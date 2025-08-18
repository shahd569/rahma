import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { sponsorshipId, newStatus } = body;

    if (!["approved", "rejected"].includes(newStatus)) {
      return NextResponse.json({ message: "حالة غير صالحة" }, { status: 400 });
    }
    const updated = await prisma.sponsorship.update({
      where: { S_id: parseInt(sponsorshipId) },
      data: { status: newStatus },
      include: { orphan: true },
    });

    if (newStatus == "approved") {
      await prisma.orphan.update({
        where: { Orphan_id: updated.orphan.Orphan_id },
        data: { orphan_status: "guaranteed" },
      });
    }
    return NextResponse.json({ message: "تم التحديث بنجاح" });
  } catch (error) {
    console.error("PATCH Error:", error);
    return NextResponse.json(
      { message: "فشل في تحديث الحالة" },
      { status: 500 }
    );
  }
}
