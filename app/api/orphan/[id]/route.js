import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  const orphanId = parseInt(id);

  try {
    const sponsorshipCount = await prisma.sponsorship.count({
      where: {
        Orphan_id: orphanId,
      },
    });
    if (sponsorshipCount > 0) {
      return NextResponse.json(
        { message: "لا يمكن حذف اليتيم لوجود كفالة مرتبطة به" },
        { status: 409 }
      );
    }
    await prisma.orphan.delete({
      where: { Orphan_id: orphanId },
    });

    return NextResponse.json({ message: "تم حذف اليتيم بنجاح" });
  } catch (error) {
    console.error("Error Cancel Sponsorship:", error);
    return NextResponse.json({ message: "فشل الحذف " }, { status: 500 });
  }
}
