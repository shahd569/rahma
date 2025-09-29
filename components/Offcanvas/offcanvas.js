"use client";

import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Styles from "./offcanvas.module.css";
import Link from "next/link";

export default function Offcanvas1() {
  const [show, setShow] = useState(false);
  const [sponsorship, setSponsorship] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      const fetchSponsorship = async () => {
        try {
          const response = await fetch("/api/user-sponsorships");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSponsorship(data.sponsorship || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchSponsorship();
    }
  }, [show]);

  return (
    <>
      <Button
        className={Styles.button}
        variant="primary"
        onClick={() => setShow(true)}
      >
        عرض الكفالات
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>الكفالات</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {loading && <div>جاري تحميل البيانات...</div>}
          {error && <div>حدث خطأ: {error}</div>}
          {sponsorship.length > 0 ? (
            <ul>
              {sponsorship.map((sponsorship, index) => (
                <div key={index} className={Styles.card}>
                  <li>
                    <p>
                      الاسم : {sponsorship.fname} {sponsorship.minit}{" "}
                      {sponsorship.lname}
                    </p>
                    <p>
                      {" "}
                      تاريخ الكفالة :{" "}
                      {new Date(sponsorship.date).toLocaleDateString("ar-EG")}
                    </p>
                    <p>
                      {" "}
                      النوع: {sponsorship.sub_type} {sponsorship.p_type}
                    </p>
                    <p> الحالة: {sponsorship.status}</p>
                  </li>
                  <button
                  className={Styles.cancelButton}
                    onClick={async () => {
                      try {
                        const res = await fetch(
                          `/api/sponsorship/${sponsorship.S_id}`,
                          {
                            method: "DELETE",
                          }
                        );
                        const result = await res.json();
                        if (!res.ok) {
                          alert(`فشل الإلغاء: ${result.message}`);
                          return;
                        }
                        // setSponsorship((prev) =>
                        //   prev.filter((item) => item.S_id !== sponsorship.S_id)
                        // );
                        alert("تم الغاء الكفالة بنجاح");
                      } catch (err) {
                        alert("حدث خطأ اثناء الإلغاء");
                        console.error(err);
                      }
                    }}
                  >
                    إلغاء الكفالة
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            !loading && <p>لا يوجد كفالات للعرض</p>
          )}
          <hr></hr>
          <div className={Styles.add}>
          <Link href={"/sponsorship"}>
              <button className={Styles.cardButton}>إضافة كفالة جديدة</button>
          </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
