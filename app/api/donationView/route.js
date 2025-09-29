import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const donations = await prisma.$queryRaw`
        SELECT * FROM v_donations_with_user_info
        `;
    const donationDetails = donations.map((item) => ({
      ...item,
      age: Number(item.age),
    }));

    return NextResponse.json({ donationDetails });
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return NextResponse.json(
      { error: "فشل تحميل البيانات", details: error.message },
      { status: 500 }
    );
  }
}
