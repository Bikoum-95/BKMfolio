import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PSG from '@/components/PSG';

export default function Home() {
  return (
    <>
      <Head>
        <title>BKMFOLIO</title>
        <meta name="description" content="Étudiant en informatique à l’ETNA | Développement Fullstack • DevOps • Support IT |" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <PSG />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
