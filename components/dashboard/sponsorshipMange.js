"use client";

import React, { useEffect, useState } from "react";
import Styles from "./table.module.css";

export default function SponsorshipsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "فشل تحميل البيانات");

        const sponsors = data.safeSponsorshipWithUser;
        const orphans = data.safeSponsorshipWithOrphan;

        // دمج الكفيل واليتيم حسب الفهرس
        const merged = sponsors.map((sponsor, index) => {
          const orphan = orphans[index] || {};
          return {
            sponsorName: [sponsor.first_name, sponsor.last_name].join(" "),
            sponsorPhone: sponsor.phone,
            sponsorEmail: sponsor.email,
            orphanName: [orphan.fname, orphan.mname, orphan.lname].join(" "),
            type: [orphan.sub_type, orphan.p_type].join(" "),
            sponsorDate: orphan.date,
            sponsorState: orphan.status,
          };
        });
        const filtered = merged.filter(
          (row) =>
            row.sponsorState === "approved" || row.sponsorState === "canceled"
        );

        setRows(filtered);
      } catch (err) {
        console.error(err);
        setError("حدث خطأ أثناء تحميل البيانات");
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
        <div className={Styles.scroll}>
          <table className={Styles.table}>
            <thead>
              <tr style={{ backgroundColor: "#d8e4ebff" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>اسم الكفيل</th>
                <th style={thStyle}>رقم الهاتف</th>
                <th style={thStyle}>البريد الإلكتروني</th>
                <th style={thStyle}>اسم اليتيم</th>
                <th style={thStyle}>نوع الكفالة</th>
                <th style={thStyle}>تاريخ الكفالة</th>
                <th style={thStyle}>حالة الكفالة</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{row.sponsorName}</td>
                  <td style={tdStyle}>{row.sponsorPhone}</td>
                  <td style={tdStyle}>{row.sponsorEmail}</td>
                  <td style={tdStyle}>{row.orphanName}</td>
                  <td style={tdStyle}>{row.type}</td>
                  <td style={tdStyle}>
                    {new Date(row.sponsorDate).toLocaleDateString("en-EG")}
                  </td>
                  <td style={tdStyle}>{row.sponsorState}</td>
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
