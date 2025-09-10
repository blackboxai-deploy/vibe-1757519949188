import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // Mock processing
  if (body.name && body.email && body.bankAccount) {
    return NextResponse.json({ success: true, message: "Application received" }, { status: 200 });
  }
  return NextResponse.json({ success: false, message: "Invalid data" }, { status: 400 });
}
