import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            Enchanté, moi c’est <span className={styles.highlight}>Soren</span>
          </h1>
          <p className={styles.subtitle}>
          Je ne prétends pas tout savoir, mais j’apprends vite et je ne lâche rien.  
          Je cherche une <strong>alternance</strong> pour gagner ma place sur le terrain, progresser chaque jour, et devenir un développeur solide, utile et humain.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/large_1.jpg"
            alt="Photo de profil"
            width={250}
            height={250}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
