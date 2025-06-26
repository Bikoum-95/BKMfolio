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
        Étudiant en informatique à l’<strong>ETNA</strong>, je me forme au <strong>développement fullstack</strong>, au <strong>DevOps</strong> et aux <strong>systèmes d’information</strong>, avec l’envie de comprendre ce qu’il y a derrière les outils que l’on utilise au quotidien.
        <br /><br />
        Je cherche à devenir un profil polyvalent : capable de coder, de structurer une solution, mais aussi d’écouter, de m’adapter et d’apprendre vite.  
        Je ne suis pas encore expert, mais je suis sérieux, curieux et prêt à me dépasser pour progresser.
        <br /><br />
        Aujourd’hui, je recherche une <strong>alternance</strong> ou un <strong>job étudiant</strong> pour passer de la théorie à la pratique, et construire quelque chose de concret, aux côtés de personnes passionnées.
      </p>
    </section>
  );
}
