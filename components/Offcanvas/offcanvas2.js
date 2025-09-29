"use client";

import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Styles from "./offcanvas.module.css";
import Link from "next/link";

export default function Offcanvas1() {
  const [show, setShow] = useState(false);
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      const fetchDonations = async () => {
        try {
          const response = await fetch("/api/user-donations");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setDonations(data.donations || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDonations();
    }
  }, [show]);

  return (
    <>
      <Button
        className={Styles.button}
        variant="primary"
        onClick={() => setShow(true)}
      >
        عرض التبرعات
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>التبرعات</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {loading && <div>جاري تحميل البيانات...</div>}
          {error && <div>حدث خطأ: {error}</div>}
          {donations.length > 0 ? (
            <ul>
              {donations.map((donation, index) => (
                <li key={index} className={Styles.card}>
                  <p>
                    الاسم : {donation.fname} {donation.minit} {donation.lname}
                  </p>
                  <p>
                    {" "}
                    التاريخ:{" "}
                    {new Date(donation.date).toLocaleDateString("ar-EG")}
                  </p>
                  <p> النوع: {donation.type}</p>
                  <p> المبلغ: {donation.amount}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p>لا يوجد تبرعات للعرض</p>
          )}
          <hr></hr>
          <div className={Styles.add}>
          <Link href={"/donations"}>
            <button className={Styles.cardButton}>إضافة تبرع جديد</button>
          </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
