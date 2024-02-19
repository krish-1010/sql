import { NextRequest, NextResponse } from "next/server";

import { query } from "../../../db";

export async function GET(req, res) {
  const result = await query("SELECT * FROM test.student");
  return NextResponse.json(result.rows, { status: 200 });
}

// export async function GET(req) {
//   //req: NextRequest
//   console.log(req.nextUrl.searchParams.get("sort"));
//   return new Response("Hello world - blogs");
// }

export async function POST(req, res) {
  return NextResponse.json({
    message: "Hello world",
  });
}
