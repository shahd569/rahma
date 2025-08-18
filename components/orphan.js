"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Styles from "./orphan.module.css";
import Image from "next/image";
// import Profile from "@/public/image/profileImg.png";
import Link from "next/link";

const OrphansCarousel = () => {
  const [orphans, setOrphans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrphans = async () => {
      try {
        const response = await axios.get("/api/orphan");
        setOrphans(response.data.orphans);
      } catch (error) {
        console.error("Error fetching orphans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrphans();
  }, []);

  if (loading) {
    return <div className="text-center my-5">جاري التحميل...</div>;
  }

  if (orphans.length === 0) {
    return <div className="text-center my-5">لا يوجد أيتام لعرضهم.</div>;
  }

  return (
    <section className={Styles.orphan}>
      <div className={Styles.container}>
        <Carousel className="my-4">
          {orphans.map((orphan) => (
            <Carousel.Item key={orphan.id}>
              <div
                className={`${Styles.card} ${
                  orphan.gender === "ذكر" ? Styles.boy : Styles.girl
                }`}
              >
                <div className={Styles.col2}>
                  <div className={Styles.row1}>
                    <p> الحالة الاجتماعية : {orphan.F_M_status}</p>
                    <p>المدينة : {orphan.city}</p>
                  </div>
                  <p>{orphan.Orpan_id}</p>
                  <div className={Styles.row1}>
                    <p>{orphan.H_state}</p>
                    <p>{orphan.skills}</p>
                  </div>
                  <div className={`${Styles.row1} ${Styles.span}`}>
                    <span> رقم الطفل : {orphan.Orphan_id}</span>
                    <span style={{ fontWeight: "bold" }}>
                      {orphan.orphan_status === "guaranteed"
                        ? "مكفول"
                        : "غير مكفول"}
                    </span>
                  </div>
                  <div className={Styles.button}>
                    <Link href={"/sponsorship"}>
                      <button className={Styles.cardButton}>كفالة</button>
                    </Link>
                    <Link href={"/donations"}>
                      <button className={Styles.cardButton}>تبرع</button>
                    </Link>
                  </div>
                </div>
                <div className={Styles.col1}>
                  <Image
                    src={`/image/${orphan.picture}`}
                    alt=""
                    width={200}
                    height={200}
                    className={Styles.image}
                  />
                  <h3>
                    {orphan.fname} {orphan.minit} {orphan.lname}
                  </h3>
                  <p>{orphan.about}</p>
                  <p> الجنس : {orphan.gender}</p>
                  <p> العمر : {orphan.age}</p>
                  <p>
                    تاريخ الميلاد :
                    {new Date(orphan.Bdate).toLocaleDateString("en-EG")}
                  </p>
                  <p> المرحلة الدراسية : {orphan.class}</p>
                  <p> المؤسسة التعليمية : {orphan.school}</p>
                </div>
              </div>
              {/* لو كان عندك صورة استخدم src={orphan.imageUrl} */}
              <Carousel.Caption>
                {/* <h5>{orphan.fname} {orphan.lname}</h5> */}
                {/* يمكنك عرض معلومات إضافية هنا */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OrphansCarousel;
