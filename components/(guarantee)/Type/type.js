import Image from "next/image";
import Styles from "./type.module.css";
import SposorShip from "@/public/image/Rectangle 1 (1).png";
import Sponsorship3 from "@/public/image/PLkUG.jpeg";
import Sponsorship2 from "@/public/image/IMG_20250609_131645_407.jpg";
import Sponsorship4 from "@/public/image/Rectangle 6.png";
export default function type() {
  return (
    <section>
      <h3 className={Styles.title}>تفاصيل الكفالة</h3>
      <div className={Styles.amounte}>
        <p>المبلغ المطلوب للكفالة الشهرية : 150$</p>
        <p>المبلغ المطلوب للكفالة السنوية : 1800$</p>
      </div>
      <p className={Styles.parghraph}>ما يشمله هذا المبلغ :</p>
      <div className={Styles.Type}>
        <div className={Styles.box}>
          <Image className={Styles.boxImage} src={SposorShip} alt="" />
          <div className={Styles.info}>
            <p>-توفير رسوم المدرسة والكتب المدرسية.</p>
            <p>-دعم الدروس الخصوصية لتحسين مستوى التحصيل الدراسي.</p>
          </div>
        </div>
        <div className={Styles.box}>
          <Image className={Styles.boxImage} src={Sponsorship2} alt="" />
          <div className={Styles.info}>
            <p>- تأمين صحي شامل يغطي الزيارات الطبية والأدوية .</p>
            <p>- فحوصات دورية للحفاظ على صحة الطفل</p>
          </div>
        </div>
        <div className={Styles.box}>
          <Image className={Styles.boxImage} src={Sponsorship3} alt="" />
          <div className={Styles.info}>
            <p>- جلسات دعم نفي لمساعدته في التغلب على تحديات فقدان الأسرة .</p>
            <p>- أنشطة ترفيهية لتعزيز الثقة بالنفس</p>
          </div>
        </div>
        <div className={Styles.box}>
          <Image className={Styles.boxImage} src={Sponsorship4} alt="" />
          <div className={Styles.info}>
            <p>- توفير الطعام الصحي والمتوازن .</p>
            <p>- ملابس جديدة كل موسم .</p>
          </div>
        </div>
      </div>
    </section>
  );
}
