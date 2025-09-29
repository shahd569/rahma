import Link from "next/link";
import Styles from "./sidbar.module.css";
import Image from "next/image";
import Profile2 from "@/public/image/Ellipse 3 (1).png"

// import Home from "./home"
export default function admin() {
  return (
    <div className={Styles.page}>
      <div className={Styles.sidbar}>
        <Image
        className={Styles.Image}
        src={Profile2}
        width={200}
        height={200}
        alt="admin"></Image>
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
            <Link className={Styles.list} href={"/orphanView"}>
              إدارة الأيتام 
            </Link>
          </li>
          <li>
            <Link className={Styles.list} href={"/DonationView"}>
              التبرعات
            </Link>
          </li>
        </ul>
      </div>
       </div>
  );
}
