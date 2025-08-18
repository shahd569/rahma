"use client";
import { useState } from "react";
import Styles from "./contact.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ContavrImg from "@/public/image/ezgif-6b309787861245.gif";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const ContactForm = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      content: message,
      error,
    };
    try {
      const response = await axios.post("/api/contact", ContactForm);
      if (response.status == 201) {
        alert("تم الإرسال بنجاح");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        console.error("فشل الإرسال");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إرسال الرسالة");
    }
  };
  return (
    <section className="contact">
      <div className={Styles.row}>
        <div className={Styles.col1}>
          <form className={Styles.form} onSubmit={handleSubmit}>
            <h2 className={Styles.title}>تواصل معنا</h2>
            <input
              className={Styles.input}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="الاسم الأول"
              required
            ></input>

            <input
              className={Styles.input}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="الاسم الأخير"
              required
            ></input>

            <input
              className={Styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              required
            ></input>
            <input
              className={Styles.input}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم الهاتف"
              required
            ></input>
            <textarea
              className={Styles.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="الرسالة"
            ></textarea>
            <button className={Styles.button} type="submit">
              إرسال
            </button>
          </form>
          <span className={Styles.span}>
            <div className={Styles.email}>
              <p>راسلونا على الإيميل :</p>
              <Link href="">rahma@gmail.com</Link>
              <p>أو على الرقم التالي:</p>
              <p> 997 108 345 963 +</p>
            </div>
            <div className={Styles.social}>
              <p>تابعونا على :</p>
            </div>
          </span>
        </div>
        <div className={Styles.col}>
          <Image
            className="col"
            src={ContavrImg}
            width={800}
            height={700}
            alt="contact"
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
