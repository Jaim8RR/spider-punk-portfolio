import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

/**
 * 🕷️ Spider-Punk Portfolio Landing
 * Jaime Riesgo — InfoJobs × Midudev · Spider-Man: Brand New Day
 *
 * Architecture:
 * ├── Navbar      → Fixed glass nav with scroll detection
 * ├── Hero        → Full-viewport intro with staggered animations
 * ├── Skills      → 3-column glassmorphism card grid
 * ├── Project     → SavePoint-DB showcase with mockup
 * └── Footer      → CTA + social links
 */
export default function App() {
  return (
    <>
      {/* Animated background layers */}
      <div className="bg-web" aria-hidden="true" />
      <div className="bg-web-lines" aria-hidden="true" />

      {/* Main content */}
      <Navbar />

      <main>
        <Hero />

        <div className="section-separator" aria-hidden="true" />

        <Skills />

        <div className="section-separator" aria-hidden="true" />

        <Project />
      </main>

      <div className="section-separator" aria-hidden="true" />

      <Footer />
    </>
  );
}
