import Image from "next/image"
import Services1 from '@/public/image/service1 (2).jpg'
import Services2 from '@/public/image/service2.jpg'
import Services3 from '@/public/image/service3.jpg'
import Services4 from '@/public/image/service4.jpg'
import styles from './Services.module.css'
export default function Services(){
    return (
        <section className={styles.services}>
        <div className={styles.container}>
            <h2 className={styles.sectiontitle}>خدماتنا</h2>
            <p className={styles.desc}>وأحسنوا إن الله يحب المحسنين</p>
            <div className={styles.allservices}>
            <div className={styles.service}>
                    <Image
                    className={styles.image}
                    src={Services1}
                    alt="services"
                    width={200}
                    height={200}
                     />
                    <h3>كفالة</h3>
                    <p>كن عوناً للأيتام من خلال كفالتهم ودعمهم في حياتهم اليومية، كن سبباً في ابتسامة يتيم</p>
                    <button>كفالة</button>

                </div>

                <div className={styles.service}>
                    <Image
                    className={styles.image}
                    src={Services2}
                    alt="services"
                    width={200}
                    height={200}
                     />
                    <h3>كفالة تعليمية</h3>
                    <p>دعم تعليم الأيتام هو استثمار في مستقبلهم . كل يتيم يستحق فرصة، كن معهم</p>
                    <button>كفالة</button>

                </div>
                <div className={styles.service}>
                    <Image
                    className={styles.image}
                    src={Services3}
                    alt="services"
                    width={200}
                    height={200}
                     />
                    <h3>فعاليات خيرية</h3>
                    <p>اجعل مناسباتك مميزة من خلال تقديم الدعم للأيتام. دعمك اليوم مستقبل مشرق غداً.</p>
                    <button>تواصل معنا</button>

                </div>
                <div className={styles.service}>
                    <Image
                    className={styles.image}
                    src={Services4}
                    alt="services"
                    width={200}
                    height={200}
                     />
                    <h3>تبرّع</h3>
                    <p>ساهم في تغيير حياة الأيتام من خلال تبرعك السخي. كل تبرع مهما كان حجمه، يحدث فرقاً</p>
                    <button>تبرع</button>

                </div>
                

            </div>
        </div>
     </section>
    )
}