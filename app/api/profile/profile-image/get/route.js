import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { picture: true },
  });

  if (!user.picture) {
    return NextResponse.json({ image: null });
  }

  const base64 = Buffer.from(user.picture).toString("base64");
  const imageDataUrl = `data:image/jpeg;base64,${base64}`;

  return NextResponse.json({ image: imageDataUrl });
}
