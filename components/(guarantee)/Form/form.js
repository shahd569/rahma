"use client";
import Styles from "./form.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
// import { sponsorship_p_type } from "@prisma/client";

const SponsershipForm = () => {
  const [Orphan_id, setOrphan_id] = useState("");
  const [p_type, setP_type] = useState("");
  const [sub_type, setSub_type] = useState("");
  const [Bank, setBank] = useState("");
  const { data: session } = useSession();

  console.log("SESSION:", session);

  const handleSelectChange = (e) => {
    setBank(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      alert("يجب تسجيل الدخول لإتمام عملية الكفالة");
      return;
    }

    const sponsorshipData = {
      Orphan_id,
      p_type,
      sub_type,
      Bank,
    };

    try {
      await axios.post("/api/sponsorship", sponsorshipData);
      window.location.href = Bank;
    } catch (error) {
      const msg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "حدث خطأ أثناء تسجيل الكفالة";
      if (error?.response?.status === 409 || error?.response?.status === 400) {
        alert(msg);
      } else {
        alert("حدث خطأ غير متوقع");
      }
    }
  };
  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <h1 className={Styles.title}>نموذج التسجيل</h1>
        <input
          className={Styles.input}
          type="text"
          value={Orphan_id}
          onChange={(e) => setOrphan_id(e.target.value)}
          placeholder="رقم الطفل"
          required
        ></input>

        <select
          className={Styles.select}
          onChange={handleSelectChange}
          value={Bank}
        >
          <option value="">اسم البنك</option>
          <option value="https://www.bbsfbank.com/">
            بنك بيمو السعودي الفرنسي
          </option>
          <option value="https://www.albaraka.com.sy/">بنك البركة</option>
          <option value="https://www.bankaudi.com.lb/">بنك العودة</option>
        </select>

        <select
        className={Styles.select}
          value={p_type}
          onChange={(e) => setP_type(e.target.value)}
          required
        >
          <option value=""> نوع الكفالة</option>
          <option value="normal">كفالة عادية</option>
          <option value="eductional">كفالة تعليمية</option>
        </select>

        <select
        className={Styles.select}
          value={sub_type}
          onChange={(e) => setSub_type(e.target.value)}
          required
        >
          <option value=""> مدة الكفالة</option>
          <option value="yearly">كفالة سنوية</option>
          <option value="monthly">كفالة شهرية</option>
        </select>

        <button className={Styles.button} type="submit">
          تم
        </button>
      </form>
    </div>
  );
};
export default SponsershipForm;
