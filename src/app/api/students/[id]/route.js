import { NextResponse } from "next/server";

export async function GET(req, context) {
  console.log(context.params);
  return NextResponse.json({
    studentID: context.params,
  });
}
