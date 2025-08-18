"use client";
import Styles from "./login.module.css";
import Proto from "@/public/image/protofile.jpg";
import Login from "@/public/image/login.png";
import Image from "next/image";
import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      alert("فشل تسجيل الدخول" + res.error);
    } else {
      const session = await getSession();
      if (session?.user?.role === "admin") {
        alert("مرحبا بك أيها المدير");
        router.push("/dashboard");
      } else {
        alert("تم تسجيل الدخول بنجاح");
        router.push("/profile");
        localStorage.sestItem("email", email);
      }
    }
  };
  return (
    <section className={Styles.login}>
      <div className="container ">
        <div className="row">
          <Link href="/">
            <button className={Styles.button}>x</button>
          </Link>

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
            <div className={Styles.loginImg}>
              <Image src={Login} width={700} height={700} alt="login" />
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0">
            <div>
              <form className={Styles.form} onSubmit={handleSubmit}>
                <div className={Styles.formTitle}>
                  <Image src={Proto} width={150} height={150} alt="protofile" />
                  <h1>تسجيل الدخول</h1>
                </div>
                <div className={Styles.input}>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  {/* <i className="fa-regular fa-user fa-3x "></i>  */}
                </div>
                <div className={Styles.input}>
                  <input
                    type="password"
                    placeholder="كلمةلمرور"
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                    required
                  ></input>
                  {/* <i class="fa-regular fa-user fa-3x "></i>  */}
                </div>
                <button type="submit">تسجيل الدخول</button>
                <div className={Styles.newAccount}>
                  <p>لا يوجد لديك حساب ؟؟</p>
                  <Link href={"creatAcount"} className={Styles.newAccount}>
                    إنشاء حساب
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
