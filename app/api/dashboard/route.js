import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [
      donor_num_res,
      orphan_num_res,
      donation_sum_res,
      sponsor_active_res,
      total_orphans_res,
      age_distribution_res,
      monthly,
      sponsorship_with_orphan_info,
      sponsorship_with_user_info,
    ] = await Promise.all([
      prisma.$queryRaw`SELECT * FROM v_donor_num `,
      prisma.$queryRaw`SELECT * FROM v_orphan_num `,
      prisma.$queryRaw`SELECT * FROM v_donation_sum `,
      prisma.$queryRaw`SELECT * FROM v_sponsor_active `,
      prisma.$queryRaw`SELECT COUNT(*) as count FROM orphan `,
      prisma.$queryRaw`SELECT * FROM v_orphan_age `,
      prisma.$queryRaw`SELECT * FROM v_orphans_guaranteed_by_month `,
      prisma.$queryRaw`SELECT * FROM v_sponsorship_with_orphan_info `,
      prisma.$queryRaw`SELECT * FROM v_sponsorship_with_user_info `,
    ]);

    const donor_num = Number(donor_num_res[0]?.count_d || 0);
    const orphan_num = Number(orphan_num_res[0]?.count_o || 0);
    const donation_sum = Number(donation_sum_res[0]?.sum || 0);
    const sponsor_active = Number(
      sponsor_active_res[0]?.active_sponsorship || 0
    );
    const total_orphans = Number(total_orphans_res[0]?.count || 0);

    const age_distribution = age_distribution_res.map((row) => ({
      label: row.age_category,
      count: Number(row.count),
    }));

    const charData = monthly.map((row) => {
      const guaranteed = Number(row.guaranteed_count);
      return {
        month: row.month,
        guaranteed,
        un_guaranteed: total_orphans - guaranteed,
      };
    });

    const safeSponsorshipWithOrphan = sponsorship_with_orphan_info.map(
      (item) => ({
        ...item,
        S_id: Number(item.S_id),
      })
    );

    const safeSponsorshipWithUser = sponsorship_with_user_info.map((item) => ({
      ...item,
      age: Number(item.age),
    }));

    return NextResponse.json({
      donor_num,
      orphan_num,
      donation_sum,
      sponsor_active,
      age_distribution,
      charData,
      safeSponsorshipWithOrphan,
      safeSponsorshipWithUser,
    });
  } catch (error) {
    console.error("Error Fetching Data:", error);
    return NextResponse.json({ error: "فشل تحميل البيانات" }, { status: 500 });
  }
}
