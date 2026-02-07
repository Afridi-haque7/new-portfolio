import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate input data
function validateInput(data: unknown): {
  valid: boolean
  error?: string
  data?: { name: string; email: string; message: string }
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body" }
  }

  const { name, email, message } = data as Record<string, unknown>

  // Validate name
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return { valid: false, error: "Name is required and must be a non-empty string" }
  }

  if (name.trim().length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" }
  }

  // Validate email
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    return { valid: false, error: "Valid email address is required" }
  }

  // Validate message
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return { valid: false, error: "Message is required and must be a non-empty string" }
  }

  if (message.trim().length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" }
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validation = validateInput(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.data!

    // Check environment variables
    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailPassword) {
      console.error("Gmail credentials not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Create Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    // Compose email to send to your inbox
    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; word-wrap: break-word;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message:
${message}

---
Reply to this email to respond to ${name}.
      `,
    }

    // Send email with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    try {
      await transporter.sendMail(mailOptions)
      clearTimeout(timeoutId)
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
