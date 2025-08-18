"use client";

import { useEffect, useState } from "react";
import Styles from "./card.module.css";
import Modal from "./modal";

export default function Offcanvas1() {
  const [sponsorships, setSponsorships] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من API
  useEffect(() => {
    const fetchSponsorships = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("فشل الاتصال بالخادم");
        }

        const data = await response.json();

        const users = data.safeSponsorshipWithUser || [];
        const orphans = data.safeSponsorshipWithOrphan || [];

        const merged = users.map((user, index) => {
          const orphan = orphans[index] || {};
          return {
            sponsorName: [user.first_name, user.last_name].join(" "),
            sponsorPhone: user.phone,
            sponsorEmail: user.email,
            orphanName: [orphan.fname, orphan.mname, orphan.lname].join(" "),
            type: [orphan.sub_type, orphan.p_type].join(" "),
            sponsorDate: orphan.date,
            sponsorState: orphan.status,
            sponsorBank: orphan.BankName,
            sponsorAge: user.age,
            sponsorAddress: user.address,
            sponsorGender: user.gender,
            sponsorshipId: orphan.S_id, // تأكد من أن لكل كفالة id
          };
        });

        const pending = merged.filter(
          (item) => item.sponsorState === "pending"
        );
        setSponsorships(pending);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsorships();
  }, []);

  const handleAction = async (id, newStatus) => {
    try {
      const response = await fetch("/api/sponsorship/update-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sponsorshipId: id, newStatus }),
      });

      if (!response.ok) {
        throw new Error("فشل في تحديث حالة الكفالة");
      }

      // حذف الكفالة من الواجهة بعد نجاح التحديث
      setSponsorships((prev) => prev.filter((s) => s.sponsorshipId !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={Styles.page}>
      <h2 className={Styles.title}>الكفالات</h2>
      {loading && <div>جاري تحميل البيانات...</div>}
      {error && <div style={{ color: "red" }}>حدث خطأ: {error}</div>}

      {sponsorships.length > 0 ? (
        <ul className={Styles.cards}>
          {sponsorships.map((item, index) => (
            <div key={index} className={Styles.card}>
              <li>
                <p>اسم الكفيل: {item.sponsorName}</p>
                <p>اسم اليتيم: {item.orphanName}</p>
                <p>
                  تاريخ الكفالة:{" "}
                  {new Date(item.sponsorDate).toLocaleDateString("en-EG")}
                </p>
                <p>نوع الكفالة: {item.type}</p>
                <p>اسم البنك: {item.sponsorBank}</p>
                <Modal sponsor={item} />
              </li>

              <div className={Styles.buttonGroup}>
                <button
                  onClick={() => handleAction(item.sponsorshipId, "approved")}
                >
                  قبول الكفالة
                </button>

                <button
                  onClick={() => handleAction(item.sponsorshipId, "rejected")}
                >
                  رفض الكفالة
                </button>
                <button onClick={() => alert("إلغاء الكفالة")}>
                  إلغاء الكفالة
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        !loading && <p>لا يوجد كفالات بالحالة قيد الانتظار</p>
      )}
    </div>
  );
}
