
import Image from "next/image"
import Styles from './page.module.css' 
import Hero from "/public/image/hero.jpg"
export default function HeroSection () {
    return (
        <div className={Styles.row}>
        <div className={Styles.col}>
          <h1 className={Styles.title}>منصة <span className={Styles.specialchar}>ر</span>حمة لكفالة الأيتام</h1>
          <p className={Styles.desc}>تهدف منصة "رحمة" إلى تقديم الدعم والرعاية للأيتام من خلال توفير بيئة آمنةومحفزة تساهم في تنمية مهاراتهم وتعزيز قدراتهم، نسعى لربط المتبرعين بالأيتام . انضم إلينا في رحلتنا لنشر الأمل وإحداث فرق حقيقي في حياة هؤلاء الأطفال</p>
          <q>كن نوراً في حياة يتيم, فكل لمسة حب تحدث فرقاً</q>
        </div>
        <div className={Styles.col}>
          <Image
          className={Styles.image}
          src={Hero}
          alt="hero img"
          width={500}
          height={400}
          />
        </div>
       </div>
    )
}