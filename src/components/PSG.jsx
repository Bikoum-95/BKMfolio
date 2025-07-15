import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/PSG.module.css";

const media = [
  { type: "video", src: "/Ambiancetifo.mp4", alt: "Musique mythique du club" },
  { type: "video", src: "/supporter.mp4", alt: "Supporters PSG" },
  { type: "video", src: "/PSG_tifo.mp4", alt: "Ambiance PSG" }
];

export default function PSG() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % media.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + media.length) % media.length);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => nextSlide(), 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  useEffect(() => {
    const carousel = carouselRef.current;
    let startX = 0;

    const handleTouchStart = (e) => (startX = e.touches[0].clientX);
    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section
      id="psg"
      className={styles.psgContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className={styles.title}>Ma Passion : Le PSG</h2>
      <p className={styles.description}>
        Être fan du <strong>Paris Saint-Germain</strong>, ce n’est pas juste regarder un match.  
        C’est vivre une passion qui m’accompagne depuis plus de 10 ans, une école de valeurs :  
        <strong>travail d’équipe, persévérance et ambition... Dans les hauts et les bas, le PSG m’a appris à ne jamais abandonner.</strong>  
        Ces valeurs, je les applique chaque jour dans ma façon d’apprendre et de travailler : viser plus haut, rester soudé et ne jamais baisser les bras.
      </p>

      <div className={styles.carousel} ref={carouselRef}>
        <button onClick={prevSlide} className={styles.navBtn}>‹</button>

        <div className={styles.mediaContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.mediaWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <video
                src={media[index].src}
                controls
                className={styles.video}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className={styles.navBtn}>›</button>
      </div>

      <div className={styles.indicators}>
        {media.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <blockquote className={styles.quote}>
        “Comme sur le terrain, je crois en l’effort, la passion et l’esprit d’équipe. Parce qu’au final, on gagne ensemble.”
      </blockquote>
    </section>
  );
}
