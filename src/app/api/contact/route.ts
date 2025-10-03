import { NextResponse } from "next/server"

export async function POST() {
  // Email sending is disabled. The contact form has been removed from the UI.
  return NextResponse.json(
    { error: "Email service disabled" },
    { status: 501 }
  )
}



