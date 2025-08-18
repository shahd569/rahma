"use client";
import Styles from "./Button.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const MyButton = () => {
  const { data: session, status } = useSession();

  if (status == "loading") return null;

  if (session) {
    return (
      <button
        className={Styles.button}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        تسجيل الخروج
      </button>
    );
  }

  return (
    <button className={Styles.button} onClick={() => signIn()}>
      تسجيل الدخول
    </button>
  );
};

export default MyButton;
