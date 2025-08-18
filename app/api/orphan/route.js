import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orphans = await prisma.orphan.findMany();
    return NextResponse.json({ orphans });
  } catch (error) {
    console.error("Error Fetching orphans:", error);
    return NextResponse.json({ error: "فشل تحميل الأيتام" }, { status: 500 });
  }
}
