import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/PSG.module.css";

const media = [
  { type: "video", src: "/Ambiancetifo.mp4", alt: "Musique mythique du club" },
  { type: "video", src: "/supporter.mp4", alt: "Supporters PSG" },
  { type: "video", src: "/PSG_tifo.mp4", alt: "Ambiance PSG" }
];

export default function PSG() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % media.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <section id="psg" className={styles.psgContainer}>
      <h2 className={styles.title}>Ma Passion : Foot & PSG</h2>
        <p className={styles.description}>
        Être fan du <strong>Paris Saint-Germain</strong>, ce n’est pas juste regarder un match.
        C’est vivre une passion qui m’accompagne depuis plus de 10 ans, une école de valeurs :
        <strong>travail d’équipe, persévérance et ambition... Dans les hauts et les bas, le PSG m’a appris à ne jamais abandonner. </strong>
        Ces valeurs, je les applique chaque jour, dans ma façon d’apprendre et de travailler : viser plus haut, rester soudé et ne jamais baisser les bras, même quand le match semble perdu.
        </p>
      <div className={styles.carousel}>
        <button onClick={prevSlide} className={styles.navBtn}>‹</button>

        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.mediaContainer}
          >
            <video src={media[index].src} controls className={styles.video} />
          </motion.div>
        </AnimatePresence>

        <button onClick={nextSlide} className={styles.navBtn}>›</button>
      </div>

      <blockquote className={styles.quote}>
        “Comme sur le terrain, je crois en l’effort, la passion et l’esprit d’équipe. Parce qu’au final, on gagne ensemble.”
      </blockquote>
    </section>
  );
}
