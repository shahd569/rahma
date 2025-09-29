import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "يجب تسجيل الدخول" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        email: true,
        ph_num: true,
        gender: true,
        Bdate: true,
        Address: true,
        first_name: true,
        last_name: true,
        role: true,
      },
    });
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return NextResponse.json({ error: "فشل تحميل البيانات" }, { status: 500 });
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "يجب تسجيل الدخول" }, { status: 401 });
  }

  const formData = await req.formData();

  const ph_num = formData.get("ph_num");
  const gender = formData.get("gender");
  const Bdate = formData.get("Bdate");
  const Address = formData.get("Address");
  const first_name = formData.get("first_name");
  const last_name = formData.get("last_name");

  try {
    const updateData = {
      ph_num,
      gender,
      Bdate: new Date(Bdate),
      Address,
      first_name,
      last_name,
    };

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: updateData,
    });
    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "فشل تعديل البيانات" }, { status: 500 });
  }
}
