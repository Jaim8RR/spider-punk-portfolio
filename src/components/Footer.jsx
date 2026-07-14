import { useScrollReveal } from '../hooks/useScrollReveal';
import { GithubIcon, LinkedInIcon, TwitterIcon, MailIcon } from './Icons';

/**
 * Footer / CTA Section — Call-to-action closing + social links.
 */
export default function Footer() {
  const ctaRef = useScrollReveal();
  const textRef = useScrollReveal();

  return (
    <footer id="contact" className="footer" aria-label="Contacto">
      <div className="container">
        {/* Call-to-Action */}
        <div className="footer__cta">
          <h2 ref={ctaRef} className="footer__cta-title reveal">
            ¿Listo para un nuevo aliado en el equipo,{' '}
            <span className="gradient-text">Midudev</span>?
          </h2>
          <p ref={textRef} className="footer__cta-text reveal reveal--delay-1">
            Acabo de graduarme en DAW con un TFG Full-Stack del que estoy
            orgulloso. Tengo el teclado preparado y la disponibilidad de
            20h/semana listas para hacer algo espectacular con InfoJobs. Y sí,
            ¡me encantaría ir al estreno de <strong>Spider-Man: Brand New Day</strong>!
          </p>
          <a
            href="mailto:riesgorossijame2@gmail.com"
            className="btn btn--primary"
          >
            <span>📧 Contáctame</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Jaime Riesgo · Hecho con 🕷️ y React
          </p>

          <div className="footer__socials" role="list" aria-label="Redes sociales">
            <a
              href="mailto:riesgorossijame2@gmail.com"
              className="footer__social-link"
              aria-label="Email"
              role="listitem"
            >
              <MailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/jaime-riesgo-9ba96028a/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              role="listitem"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Jaim8RR"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              role="listitem"
            >
              <GithubIcon />
            </a>
            <a
              href="https://x.com/Rockofplata"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              role="listitem"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
