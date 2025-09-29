"use client";
import Image from "next/image";
import Styles from "./donation.module.css";
import Type0 from "@/public/image/Ellipse 1.png"
import Type1 from "@/public/image/type1.png";
import Type2 from "@/public/image/type2.png";
import Type3 from "@/public/image/type3.png";
import Modal from "@/components/Modal/modal"
import Link from "next/link";
export default function Donation() {
  return (
    <section className={Styles.donationType}>
      <h1 className={Styles.title}>أنواع التبرع</h1>
      <div className={Styles.allTypes}>
        <div
          className={Styles.type}
          style={{ backgroundColor: " rgb(206, 255, 206)" }}
        >
          <Image
            className={Styles.image}
            src={Type0}
            alt="type1"
            width={200}
            height={200}
          />
          <h2 className={Styles.cardTitle}>"تبرع مالي عام "</h2>
          <p className={Styles.desc}>
            تبرع غير مخصص يمكن استخدامه في ي من مشاريع المنصة لدعم الأيتام بشكل
            عام . يتيح للمتبرع المساهمة بمبلغ يختاره دون قيود، مما يمنح المنصة
            المرونة فيه توجيه الأموال حسب الحاجة
          </p>
        </div>
        <div
          className={Styles.type}
          style={{ backgroundColor: "rgb(253, 253, 188)" }}
        >
          <Image
            className={Styles.image}
            src={Type2}
            alt="type"
            width={200}
            height={200}
          />
          <h2 className={Styles.cardTitle}>"تبرع لمناسبة معينة"</h2>
          <p className={Styles.desc}>
            تبرع يتم تقديمه بمناسبة خاصة مثل عيد الفطر أو أي مناسبة شخصية مثل
            أعياد الميلاد، يتيح هذا النوع من التبرع للمتبرع الاحتفال بمناسبته
            بطريقة تعود بالنفع على الأيتام
          </p>
        </div>
        <div
          className={Styles.type}
          style={{ backgroundColor: "rgb(209, 228, 245)" }}
        >
          <Image
            className={Styles.image}
            src={Type3}
            alt="type"
            width={200}
            height={200}
          />
          <h2 className={Styles.cardTitle}>"تبرع لمشروع محدد"</h2>
          <p className={Styles.desc}>
            تبرع مخصص لدعم مشروع معين مثل التعليم، لصحة،أو توفير الغذاء . يساعد
            هذا النوع من التبرع في تحقيق أهداف محددة ويضمن أن الأموال تستخدم في
            مجالات معينة يحتاجها الأيتام
          </p>
        </div>
        <div className={Styles.type}>
          <Image
            className={Styles.image}
            src={Type1}
            alt="type"
            width={200}
            height={200}
          />
          <h2 className={Styles.cardTitle}>"تبرع مالي عام "</h2>
          <p className={Styles.desc}>
            تبرع غير مخصص يمكن استخدامه في ي من مشاريع المنصة لدعم الأيتام بشكل
            عام . يتيح للمتبرع المساهمة بمبلغ يختاره دون قيود، مما يمنح المنصة
            المرونة فيه توجيه الأموال حسب الحاجة
          </p>
          <p>لمزيد من التفاصيل</p>
          <Modal />
        </div>
      </div>
    </section>
  );
}
