import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const formData = await req.formData();
  const image = formData.get("image");

  if (!image || typeof image === "string") {
    return NextResponse.json({ error: "صورة غير صالحة" }, { status: 400 });
  }

  const buffer = Buffer.from(await image.arrayBuffer());

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: { picture: buffer },
    });
    return NextResponse.json({ success: "true" });
  } catch (error) {
    console.error("Image Upload Error:", error);
    return NextResponse.json({ error: "فشل رفع الصورة" }, { status: 500 });
  }
}
