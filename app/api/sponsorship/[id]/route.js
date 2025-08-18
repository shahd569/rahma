import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  const { params } = context;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ message: "غير مصرح" }, { status: 401 });
  }

  const sponsorshipId = parseInt(params.id);

  try {
    const sponsorship = await prisma.sponsorship.findUnique({
      where: { S_id: sponsorshipId },
    });

    if (!sponsorship || sponsorship.U_id !== session.user.U_id) {
      return NextResponse.json(
        { message: " غير مصرح أو الكفالة غير موجودة" },
        { status: 403 }
      );
    }

    await prisma.sponsorship.update({
      where: { S_id: sponsorshipId },
      data: { status: "canceled" },
    });

    await prisma.orphan.update({
      where: { Orphan_id: sponsorship.Orphan_id },
      data: { orphan_status: "un_guaranteed" },
    });

    return NextResponse.json({ message: "تم إلغاء الكفالة بنجاح" });
  } catch (error) {
    console.error("Error Cancel Sponsorship:", error);
    return NextResponse.json({ message: "فشل إلغاء الكفالة" }, { status: 500 });
  }
}
