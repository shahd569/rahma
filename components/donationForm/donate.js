"use client";
import Image from "next/image";
import Form1 from "@/public/image/form1.png";
import Form2 from "@/public/image/form2.png";
import Styles from "./donationForm.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const DonateForm = () => {
  const [childId, setChildId] = useState("");
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("");
  const [bankName, setBankName] = useState("");
  const { data: session } = useSession();

  console.log("SESSION:", session);

  const handleSelectChange = (e) => {
    setBankName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      alert("يجب تسجيل الدخول لإتمام عملية التبرع");
      return;
    }

    const donationData = {
      orphan_id: parseInt(childId),
      amount: parseInt(amount),
      type: donationType,
      Bank: bankName,
    };

    try {
      await axios.post("/api/donations", donationData);
      window.location.href = bankName;
    } catch (error) {
      console.error("Donation Error:", error?.response?.date || error.message);
      alert(error?.response?.date || "حدث خطأ أثناء تسجيل التبرع.");
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className="col">
          <Image src={Form1} alt="img_form" width={400} height={100} />
        </div>
        <div className="col">
          <form className={Styles.form} onSubmit={handleSubmit}>
            <h1 className={Styles.title}>نموذج التبرع</h1>
            <input
              className={Styles.input}
              type="text"
              value={childId}
              onChange={(e) => setChildId(e.target.value)}
              placeholder="رقم حساب الطفل"
              required
            />

            <input
              className={Styles.input}
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="المبلغ"
              required
            />

            <select
              className={Styles.select}
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              required
            >
              <option value="">نوع التبرع</option>
              <option value="تبرع مالي عام">تبرع مالي عام</option>
              <option value="تبرع لمناسبة معينة">تبرع لمناسبة معينة</option>
              <option value="تبرع لمشروع محدد">تبرع لمشروع محدد</option>
            </select>

            <select
              className={Styles.select}
              onChange={handleSelectChange}
              value={bankName}
            >
              <option value="">اسم البنك</option>
              <option value="https://www.bbsfbank.com/">
                بنك بيمو السعودي الفرنسي
              </option>
              <option value="https://www.albaraka.com.sy/">بنك البركة</option>
              <option value="https://www.bankaudi.com.lb/">بنك العودة</option>
            </select>

            <button className={Styles.button} type="submit">
              تقديم التبرع
            </button>
          </form>
        </div>
        <div className="col">
          <Image src={Form2} alt="img_form" width={400} height={100} />
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
