import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "يجب تسجيل الدخول أولا لإتمام الكفالة" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { Orphan_id, p_type, Bank, sub_type } = body;

    const existing = await prisma.sponsorship.findFirst({
      where: {
        U_id: parseInt(session.user.U_id),
        Orphan_id: parseInt(Orphan_id),
      },
    });

    if (existing) {
      return NextResponse.json(
        { message: "انت بالفعل تكفل هذ اليتيم" },
        { status: 409 }
      );
    }

    const existing2 = await prisma.sponsorship.findFirst({
      where: {
        Orphan_id: parseInt(Orphan_id),
        status: "approved",
      },
    });

    if (existing2) {
      return NextResponse.json(
        { message: "تمت كفالة هذا اليتيم من قبل مستخدم اخر" },
        { status: 400 }
      );
    }

    const newSponsorship = await prisma.sponsorship.create({
      data: {
        Orphan_id: parseInt(Orphan_id),
        p_type,
        sub_type,
        Bank,
        U_id: parseInt(session.user.U_id),
        date: new Date(),
      },
    });

    return NextResponse.json({ success: true, sponsorship: newSponsorship });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
