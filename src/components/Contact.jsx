import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Me Contacter</h2>
      <p className={styles.contactDescription}>
        Un projet, une opportunité d'alternance, ou juste l’envie d’échanger sur la tech ?
        Je suis toujours ouvert aux discussions, aux conseils et aux nouvelles rencontres professionnelles.
      </p>
      <p className={styles.contactDescription}>
        N’hésitez pas à m’écrire, je répondrai avec plaisir :
      </p>
      <div className={styles.contactEmail}>
        <a href="mailto:sorenbikouta11@gmail.com">📩 Me contacter par email </a>
      </div>
    </section>
  );
}
