import Image from "next/image"
import About from '@/public/image/about.png'
import styles from './AboutUs.module.css'
export default function AboutUs(){
    return (
        <section className={styles.about}>
            <h2>حول ر<span style={{color : "#0a0a5a"}}>حمة</span></h2>
            <div className={styles.row}> 
            <div className={styles.col}>
                <p>تسعى منصة رحمة لكفالة الأيتام إلى أن تكون الجسر الذي يربط بين الأيتام ومجتمعهم، من خلال تقديم حلول مبتكرة وفعّالة تساهم في تديد جودة حياتهم وتوفير الدعم اللازم لهم. نؤمن بأن كل يتيم يستق فرصة للعيش بكرامة، وأن دعمهم ليس مجرد واجب إنساني ، بل هو استثمار في مستقبل مشرق.</p>
                <p>نهدف إلى بناء مجتمع متكافل يساهم فيه كل فرد بقدر استطاعته، حيث نوفر بيئة آمنة وموثوقة تتيح للمتبرعين والمستفيدين التواصل بسهولة ويسر . من خلال منصتنا . نعمل على تعزيز الوعي بأهمية كفالة الأيتم وتقديم الدعم النفسي و الاجتماعي لهم ، مما يسهم في تحقيق التنمية المستدامة لهم وللمجتمع .</p>
                <p> نؤمن بقوةالتكنولوجيا في تغيير حياة الأفراد ، لذا نستخدم أحدث التقنيات لتسهيل عملية الكفالة وضمان الشفافية والمصداقية في جميع التعاملات</p>
                <q className={styles.qute}>معاً، لنصنع فارقاً حقيقياً في حياة الأيتام ونساعدهم على تحقيق أحلامهم وطموحاتهم</q>
            </div>
            <div className={styles.row}>
            <div className={styles.image}>
                <Image
                src={About}
                alt="about us"
                width={500}
                height={500}
                />
            </div>
            </div>
            </div>

        </section>
    )
}