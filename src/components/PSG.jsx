import { useEffect, useState } from "react";
import styles from "../styles/PSG.module.css";

const media = [
  { type: "video", src: "/Ambiancetifo.mp4", alt: "Musique mythique du club" },
  { type: "video", src: "/supporter.mp4", alt: "Supporters PSG" },
  { type: "video", src: "/PSG_tifo.mp4", alt: "Ambiance PSG" }
];

export default function PSG() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="psg"
      className={`${styles.psgContainer} ${isVisible ? styles.fadeIn : ""}`}
    >
      <h2 className={styles.title}>Ma Passion : Le PSG</h2>
      <p className={styles.description}>
      Être fan du <strong>Paris Saint-Germain</strong>, ce n’est pas juste regarder un match.  
      C’est vivre une passion qui m’accompagne depuis plus de 10 ans, une école de valeurs :  
      <strong>travail d’équipe, persévérance et ambition... Dans les hauts et les bas, le PSG m’a appris à ne jamais abandonner.</strong>
      Ces valeurs, je les applique chaque jour, dans ma façon d’apprendre et de travailler : viser plus haut, rester soudé et ne jamais baisser les bras, même quand le match semble perdu.
      </p>
      <div className={styles.gallery}>
        {media.map((item, index) => (
          <div key={index} className={styles.mediaWrapper}>
            <video
              src={item.src}
              controls
              className={styles.video}
            />
          </div>
        ))}
      </div>

      <blockquote className={styles.quote}>
        “Comme sur le terrain, je crois en l’effort, la passion et l’esprit d’équipe. Parce qu’au final, on gagne ensemble.”
      </blockquote>
    </section>
  );
}
