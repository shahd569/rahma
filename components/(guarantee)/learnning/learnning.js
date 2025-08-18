import Image from "next/image";
import Learn from "@/public/image/learn.png";
import Styles from "./learnning.module.css";
export default function Learnning() {
  return (
    <section>
      <h3 className={Styles.title}>الكفالة التعليمية</h3>
      <div className={Styles.amounte}>
        <p>المبلغ المطلوب للكفالة الشهرية : 70$</p>
        <p>المبلغ المطلوب للكفالة السنوية : 840$</p>
      </div>
      <div className={Styles.row}>
        <div className={Styles.col}>
          <p>
            من خلال الكفالة التعليمية، ممكن للمتبرعين أن يلعبوا دوراً محورياً في
            تغيير مسار حياة هؤلاء الأطفال. فكل تبرع يُستخدم لتمويل دراستهم ،
            وتأمين مستلزماتهم الدراسية، وتوفير بيئة تعليمية ملائمة، يساهم بشكل
            مباشر في بناء جيل قادر على الإبداع والابتكار. إن دعم التعليم لا يُعد
            مجرد استثمار في المعرفة، بل هو استثمار في الإنسانية والمستقبل.
          </p>
          <p className={Styles.qute}>
            معاً يمكننا أن نحدث تغييراً إيجابياً ونمنح الأيتام الفرصة لتحقيق
            أحلامهم، ليصبحوا قادةً ومؤثرين في مجتماعاتهم. انضموا إلينا في رحلة
            الكفالة التعليمية ، ولنجعل من التعليم حقاً لكل طفل
          </p>
        </div>
        <div className={Styles.col}>
          <Image src={Learn} alt="" width={450} height={450} />
        </div>
      </div>
    </section>
  );
}
