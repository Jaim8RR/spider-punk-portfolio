import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLinkIcon, GithubIcon } from './Icons';

/**
 * Project showcase — SavePoint-DB
 * Split layout: visual mockup + project details.
 */
export default function Project() {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const visualRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const techStack = [
    'React',
    'Laravel',
    'JWT',
    'OpenID / Steam',
    'i18next',
    'REST API',
    'MySQL',
    'Conventional Commits',
  ];

  return (
    <section id="project" className="section project" aria-label="Proyecto principal">
      <div className="container">
        <div ref={labelRef} className="section__label reveal">
          Proyecto destacado
        </div>
        <h2 ref={titleRef} className="section__title reveal reveal--delay-1">
          <span className="gradient-text">SavePoint-DB</span>: Red Social Gamer
        </h2>

        <div className="project__card">
          {/* Visual mockup */}
          <div ref={visualRef} className="project__visual reveal reveal--delay-2">
            <div className="project__visual-inner">
              <div className="project__visual-mockup">
                <div className="project__visual-topbar">
                  <span className="project__visual-dot project__visual-dot--red" />
                  <span className="project__visual-dot project__visual-dot--yellow" />
                  <span className="project__visual-dot project__visual-dot--green" />
                  <span className="project__visual-url">savepoint-db-1.onrender.com</span>
                </div>
                <img
                  src="/savepoint-db.png"
                  alt="Captura de SavePoint-DB — Red Social Gamer con catálogo de juegos, análisis y perfil de usuario"
                  className="project__visual-screenshot"
                  loading="lazy"
                />
              </div>
              <div className="project__visual-glow" />
            </div>
          </div>

          {/* Project Info */}
          <div ref={infoRef} className="project__info reveal reveal--delay-3">
            <p className="project__description">
              Una SPA Full-Stack (React + Laravel) desarrollada para mi TFG.
              Cuenta con autenticación dual (JWT y OpenID con Steam),
              internacionalización en caliente (i18next) y control de estados
              globales. Código limpio gestionado con Conventional Commits.
            </p>

            <div className="project__tech" role="list" aria-label="Tecnologías usadas">
              {techStack.map((tech) => (
                <span key={tech} className="project__tech-tag" role="listitem">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project__actions">
              <a
                href="https://savepoint-db-1.onrender.com/"
                className="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver demo de SavePoint-DB"
              >
                <span>
                  Ver Demo <ExternalLinkIcon size={14} />
                </span>
              </a>
              <a
                href="https://github.com/Jaim8RR/SavePoint-DB"
                className="btn btn--glass"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código en GitHub"
              >
                <GithubIcon size={16} /> Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
