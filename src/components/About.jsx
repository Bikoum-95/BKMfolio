import { useEffect, useState } from "react";
import styles from '../styles/About.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`${styles.aboutContainer} ${isVisible ? styles.fadeIn : ''}`}
    >
      <h2 className={styles.aboutTitle}>À propos de moi</h2>
      <p className={styles.aboutDescription}>
        Étudiant en informatique à l’<strong>ETNA</strong>, je me forme au <strong>Développeur Back-End</strong>, et aux <strong>systèmes IT</strong>.  
        Je n’ai pas encore tout vu, mais j’apprends vite et je n’abandonne jamais. Pour moi, chaque bug est un défi, chaque projet un match à gagner.  
        <br /><br />
        Comme sur un terrain de foot, je crois au collectif, à la persévérance et à l’envie de se dépasser. Je veux être ce profil polyvalent, capable de coder, d’analyser et d’apporter des solutions, même dans les prolongations.  
        <br /><br />
        Aujourd’hui, je cherche une <strong>alternance</strong> pour passer du code à l’action, apprendre des meilleurs et contribuer à des projets qui comptent. Si vous aimez les profils ambitieux, curieux et prêts à jouer le jeu à fond… on est dans la même équipe.
        <br /><br />
        Et comme quand je porte un maillot, je donnerai tout pour défendre vos couleurs et atteindre nos objectifs.
      </p>
    </section>
  );
}
