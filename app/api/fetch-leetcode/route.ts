import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Extract username from query params

    // Fetch data from LeetCode API
    const response = await fetch(
      `https://alfa-leetcode-api.onrender.com/daemon777/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Add timeout
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch LeetCode profile: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return the data with cache headers
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);

    if (error instanceof Error && error.message.includes("timeout")) {
      return NextResponse.json(
        { error: "Request timeout - LeetCode API is taking too long" },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch LeetCode profile data" },
      { status: 500 }
    );
  }
}
