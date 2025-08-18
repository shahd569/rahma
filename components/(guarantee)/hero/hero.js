import Image from "next/image";
import Styles from "./hero.module.css";
import Hero2 from "@/public/image/hero2.jpg";
export default function guaranteeHero() {
  return (
    <section className={Styles.section}>
      <div className={Styles.background}>
        <p className={Styles.desc}>لن تنالوا البر حتى تنفقوا مما تحبون</p>

        <Image
          className={Styles.image}
          src={Hero2}
          alt=""
          width={600}
          height={500}
        />
      </div>
    </section>
  );
}
