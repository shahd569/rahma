"use client";
import Styles from "./newAcount.module.css";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Arrow from "@/public/image/arrow.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CreatAccount = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [validPass, setValidPss] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== validPass) {
      setError("كلمة المرور وتأكيد كلمة المرور لا تتطابقان");
      return;
    }
    setError("");

    const CreatAccount = {
      first_name: firstName,
      last_name: lastName,
      email,
      Address: address,
      password,
      validPass,
      ph_num: phone,
      Bdate: new Date(date).toISOString(),
      error,
      gender,
    };

    try {
      const response = await axios.post("/api/account", CreatAccount);
      if (response.status == 201) {
        alert("تم إنشاء الحساب بنجاح يمكنك الان تسجيل الدخول");
        setFirstName("");
        setLastName("");
        setAddress("");
        setEmail("");
        setPassword("");
        setValidPss("");
        setPhone("");
        setDate("");
        setGender("");
        router.push("/login");
      } else {
        console.error("فشل إنشاء الحساب");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;
        if (status == 409) {
          setError(message);
        } else {
          setError("حدث خطأ غير متوقع اثناء إنشاء الحساب");
        }
      } else {
        setError("فشل الاتصال بالخادم");
      }
    }
  };

  return (
    <div className={Styles.container}>
      <Link href="/login">
        <Image src={Arrow} alt="arroe icone" width={70} height={70} />
      </Link>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <h1 className={Styles.title}>إنشاء حساب</h1>
        <input
          className={Styles.input}
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="الاسم الأول"
          style={{ width: 165 }}
          required
        />

        <input
          className={Styles.input}
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="الاسم الأخير"
          style={{ width: 165 }}
          required
        />

        <input
          className={Styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
          required
        />
        <input
          className={Styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          required
        />
        <input
          className={Styles.input}
          type="password"
          value={validPass}
          onChange={(e) => setValidPss(e.target.value)}
          placeholder="تأكيد كلمة المرور"
          required
        />
        <input
          className={Styles.input}
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="رقم الهاتف"
          required
        />
        <input
          className={Styles.input}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="العنوان"
          required
        />
        <input
          className={Styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="تاريخ الولادة"
          style={{ width: 150 }}
          required
        />

        <select
          className={Styles.select}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          style={{ width: 150 }}
        >
          <option value="">الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">إنشاء حساب</button>
      </form>
    </div>
  );
};
export default CreatAccount;
