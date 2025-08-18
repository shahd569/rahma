import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, content } = body;
    const newMessage = await prisma.communication.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        date: new Date(),
        content,
      },
    });
    return NextResponse.json(
      { message: "success", communication: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
