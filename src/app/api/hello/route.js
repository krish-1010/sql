import { NextResponse } from "next/server";

export async function GET(req) {
  return new Response("Hello Ashika");
}

export async function POST(req, res) {
  return NextResponse.json({
    message: "Hello world. Im posted!",
  });
}
