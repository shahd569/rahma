import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      email,
      password,
      ph_num,
      gender,
      Bdate,
      Address,
      first_name,
      last_name,
    } = body;

    const existinUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existinUserByEmail) {
      return NextResponse.json(
        { user: null, message: "الايميل موجود مسبقا" },
        { status: 409 }
      );
    }
    const existinUserByPhone = await prisma.user.findUnique({
      where: { ph_num },
    });
    if (existinUserByPhone) {
      return NextResponse.json(
        { user: null, message: "رقم الهاتف مستخدم مسبقا" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        ph_num,
        gender,
        Bdate: new Date(Bdate),
        Address,
        first_name,
        last_name,
      },
    });
    return NextResponse.json(
      {
        user: newUser,
        message: "user created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "حدث خطأ في السيرفر" },
      { status: 500 }
    );
  }
}
