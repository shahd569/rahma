import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "يجب تسجيل الدخول أولا لإتمام التبرع" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { orphan_id, amount, type, Bank } = body;

    const newDonation = await prisma.donation.create({
      data: {
        orphan_id,
        amount,
        type,
        Bank,
        Userrr_id: parseInt(session.user.U_id),
        date: new Date(),
      },
    });
    return NextResponse.json({ success: true, donation: newDonation });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "حدث خطأ في السيرفر" }, { status: 500 });
  }
}
