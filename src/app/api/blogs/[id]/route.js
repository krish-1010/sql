import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  //req: NextRequest
  console.log(req.nextUrl.searchParams.get("sort"));
  return new Response("Hello world - blogs");
}

export async function POST(req, res) {
  return NextResponse.json({
    message: "Hello world",
  });
}
