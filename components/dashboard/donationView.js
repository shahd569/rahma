"use client";

import React, { useEffect, useState } from "react";
import Styles from "./table.module.css";

export default function DonationTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/donationView");
        const data = await res.json();

        if (!res.ok) {
          console.error(data.details);
          throw new Error(data.error || "فشل تحميل البيانات");
        }

        const donations = data.donationDetails.map((donation) => ({
          sponsorName: [donation.user_first_name, donation.user_last_name].join(
            " "
          ),
          sponsorPhone: donation.phone,
          sponsorEmail: donation.email,
          orphanDeatails: donation.deatails?.join(" ") ?? "لا يوجد تفاصيل",
          donationAge: donation.age,
          // donationAddress: donation.address,
          // donationGender: donation.gender,
          orphanName: [
            donation.orphan_first_name,
            donation.orphan_last_name,
          ].join(" "),
          type: donation.type,
          date: donation.donation_date,
          amount: donation.amount,
        }));

        setRows(donations);
      } catch (err) {
        console.error(err);
        setError(err.message);
        // setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ overflowX: "auto" }}>
        <div className={Styles.scrollDonation}>
          <table className={Styles.table}>
            <thead>
              <tr style={{ backgroundColor: "#d8e4ebff" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>اسم المتبرع</th>
                <th style={thStyle}>رقم الهاتف</th>
                <th style={thStyle}>البريد الإلكتروني</th>
                <th style={thStyle}>العمر</th>
                {/* <th style={thStyle}>الجنس</th> */}
                {/* <th style={thStyle}>العنوان</th> */}
                <th style={thStyle}>اسم اليتيم</th>
                <th style={thStyle}>نوع لتبرع</th>
                <th style={thStyle}>المبلغ</th>
                <th style={thStyle}>تاريخ التبرع</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{row.sponsorName}</td>
                  <td style={tdStyle}>{row.sponsorPhone}</td>
                  <td style={tdStyle}>{row.sponsorEmail}</td>
                  <td style={tdStyle}>{row.donationAge}</td>
                  {/* <td style={tdStyle}>{row.donationGender}</td> */}
                  {/* <td style={tdStyle}>{row.donationAddress}</td> */}
                  <td style={tdStyle}>{row.orphanName}</td>
                  <td style={tdStyle}>{row.type}</td>
                  <td style={tdStyle}>{row.amount}</td>
                  <td style={tdStyle}>
                    {new Date(row.date).toLocaleDateString("EG")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
  border: "1px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #eee",
};
