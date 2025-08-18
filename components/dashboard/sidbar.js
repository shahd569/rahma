import Link from "next/link";
import Styles from "./sidbar.module.css";
// import Home from "./home"
export default function admin() {
  return (
    <div className={Styles.page}>
      <div className={Styles.sidbar}>
        <h3 className={Styles.title}>Hady</h3>
        <ul>
          <li>
            <Link className={`${Styles.list} ${Styles.active}`} href={""}>
              الصفحةالرئيسية
            </Link>
          </li>
          <li>
            <Link className={Styles.list} href={"/profile"}>
              الملف الشخصي
            </Link>
          </li>
          <li>
            <Link className={Styles.list} href={"/SponsMange"}>
              إدارة الكفالات
            </Link>
          </li>
          <li>
            <Link className={Styles.list} href={""}>
              الرسائل
            </Link>
          </li>
          <li>
            <Link className={Styles.list} href={""}>
              إدارة المستخدمين
            </Link>
          </li>
        </ul>
      </div>
      {/* <Home></Home> */}
    </div>
  );
}
