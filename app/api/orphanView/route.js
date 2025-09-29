import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orphans = await prisma.$queryRaw`
        SELECT * FROM orphan
        `;
    return NextResponse.json({ orphans });
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return NextResponse.json(
      { error: "فشل تحميل البيانات", details: error.message },
      { status: 500 }
    );
  }
}
