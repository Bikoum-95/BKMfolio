import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>BKM</div>
      <ul className={styles.navLinks}>
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#psg">PSG</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/CV_SvenSoren.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
        <li><a href="https://github.com/Bikoum-95" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/sven-soren-bikoumou-profil-link/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </nav>
  );
}
