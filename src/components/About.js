import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section id="about" className={`aboutContainer ${isVisible ? 'fadeIn' : ''}`}>
      <h2 className="aboutTitle">À propos de moi</h2>
      <p className="aboutDescription">
        Je ne suis pas encore un expert, mais je progresse chaque jour vers le développeur que je veux devenir.  
        Étudiant à l’<strong>ETNA</strong>, je me forme au <strong>développement web fullstack</strong>, au <strong>DevOps</strong> et aux <strong>systèmes d’information</strong> — pas seulement pour écrire du code, mais pour comprendre comment les choses fonctionnent en profondeur.
        <br /><br />
        Mon objectif : devenir ce profil complet capable de coder, de dépanner, de connecter les outils et surtout, de toujours trouver des solutions concrètes, même quand ce n’est pas évident.
        <br /><br />
        Aujourd’hui, je cherche une <strong>alternance</strong> ou un <strong>job étudiant</strong> pour apprendre sur le terrain, progresser au contact de professionnels, et contribuer activement à des projets utiles.
        <br /><br />
        Je ne suis pas encore parfait, mais je suis déterminé, curieux, et prêt à m’investir à fond.
      </p>
    </section>
  );
}
