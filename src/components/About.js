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
        Étudiant en informatique à l’<strong>ETNA</strong>, je me forme au <strong>développement fullstack</strong>, au <strong>DevOps</strong> et aux <strong>systèmes d’information</strong>. Ce qui m’anime ? Comprendre ce qui se cache derrière les outils que nous utilisons tous les jours, et apprendre à les bâtir, pas à pas.
        <br /><br />
        J’avance avec une conviction... on ne devient pas développeur du jour au lendemain, mais à force de curiosité, de rigueur, d’écoute… et surtout d’envie. Je ne me contente pas d’apprendre, je cherche à créer, à tester, à me tromper parfois pour mieux recommencer.
        <br /><br />
              Mon ambition est de devenir <strong>data scientist</strong> : un profil capable d’analyser, de comprendre et de transformer les données en leviers d’action concrets. Mais je sais qu’on ne le devient pas du jour au lendemain. C’est un chemin qui se construit <strong>pas à pas</strong>, en développant une base solide en code, en architecture système, en logique et en collaboration.
        <br /><br />
        Je veux devenir un professionnel polyvalent, capable de coder une interface, de concevoir une solution, mais aussi d’apprendre vite, de m’adapter et de travailler en équipe. Je ne suis pas encore expert, mais je suis déjà engagé, curieux et déterminé à progresser.
        <br /><br />
        Aujourd’hui, je cherche une <strong>alternance</strong> pour mettre mes compétences au service de projets concrets, évoluer dans un environnement stimulant et me rapprocher un peu plus chaque jour de mon objectif. Si vous croyez, vous aussi, au potentiel et à l’effort, alors rencontrons-nous.
      </p>
    </section>
  );
}
