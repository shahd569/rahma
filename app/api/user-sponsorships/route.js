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
      select: { U_id: true },
    });

    const sponsorships = await prisma.$queryRaw`
        SELECT * FROM show_sponsorship WHERE User_id=${user.U_id}
        `;
    return NextResponse.json({ sponsorship: sponsorships });
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return NextResponse.json({ error: "فشل تحميل البيانات" }, { status: 500 });
  }
}
