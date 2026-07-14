/**
 * Hero Section — "Mi sentido arácnido me dice que necesitáis un Frontend."
 * Full-viewport intro with staggered entrance animations.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Presentación">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__badge hero-enter hero-enter--delay-1">
            <span className="hero__badge-dot" />
            InfoJobs × Midudev · Spider-Man: Brand New Day
          </div>

          <h1 className="hero__title hero-enter hero-enter--delay-2">
            Midu, mi sentido arácnido me dice que{' '}
            <span className="gradient-text">necesitas un Frontend.</span>
          </h1>

          <p className="hero__subtitle hero-enter hero-enter--delay-3">
            Soy <strong>Jaime Riesgo</strong>. Recién graduado en DAW y
            Desarrollador Full-Stack apasionado por React. Creo interfaces tan
            fluidas como{' '}
            <span className="memory-spell">
              <span className="real-text">Peter Parker</span>
            </span>{' '}
            balanceándose por Nueva York y estoy buscando mi primera
            oportunidad para demostrarlo.
          </p>

          <div className="hero__actions hero-enter hero-enter--delay-4">
            <a href="#skills" className="btn btn--primary">
              <span>🕸️ Ver mi arsenal web</span>
            </a>
            <a href="#project" className="btn btn--glass">
              Explorar proyecto
            </a>
          </div>
        </div>

        <div className="hero__scroll-indicator hero-enter hero-enter--delay-5">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}
