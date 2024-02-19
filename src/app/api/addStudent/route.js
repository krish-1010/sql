import { NextResponse } from "next/server";
import { query } from "../../db";

export async function POST(req, res) {
  const { id, name, city, marks } = await req.json();
  // const body = req.json();

  console.log(id);
  // console.log(id, name, city, marks);
  try {
    const result = await query(
      "INSERT into test.student (id, name, city, marks) values ($1, $2, $3, $4) RETURNING *",
      [id, name, city, marks]
    );
    return NextResponse.json({
      message: "Student added successfully",
      student: result.rows[0],
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error adding student",
      data: req.body,
      error: error.message,
    });
  }
}
