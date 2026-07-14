import { useScrollReveal } from '../hooks/useScrollReveal';
import Card from './Card';
import { RocketIcon, PaletteIcon, BrainIcon } from './Icons';

/**
 * Skills section — "¿Por qué encajo en la oferta?"
 * 3-column grid of glassmorphism cards.
 */
export default function Skills() {
  const labelRef = useScrollReveal();
  const titleRef = useScrollReveal();

  return (
    <section id="skills" className="section" aria-label="Habilidades">
      <div className="container">
        <div ref={labelRef} className="section__label reveal">
          ¿Por qué encajo?
        </div>
        <h2 ref={titleRef} className="section__title reveal reveal--delay-1">
          Lo que aporto al{' '}
          <span className="gradient-text--red">equipo</span>
        </h2>

        <div className="skills-grid">
          <Card
            icon={<RocketIcon size={26} />}
            iconColor="red"
            title="Rendimiento"
            delay={1}
          >
            Acostumbrado a manejar catálogos masivos. En mi último proyecto,
            implementé un Grid Infinito con paginación activa del lado del
            servidor y asincronía controlada para no colapsar la memoria del
            navegador. Tu web no se caerá por picos de tráfico.
          </Card>

          <Card
            icon={<PaletteIcon size={26} />}
            iconColor="blue"
            title="UI/UX Fluida"
            delay={2}
          >
            Sin depender de frameworks pesados. Diseño con CSS Vanilla, Flexbox
            y estados asíncronos de React para crear sistemas adaptables al
            100%.
          </Card>

          <Card
            icon={<BrainIcon size={26} />}
            iconColor="purple"
            title="Resolución Creativa"
            delay={3}
          >
            ¿Problemas técnicos complejos? Para mi proyecto final, logré
            mimetizar cabeceras User-Agent para esquivar el WAF de Akamai (el
            firewall de Steam) y extraer datos mediante web scraping. Si hay un
            bloqueo, encuentro la forma de lanzar una telaraña por encima.
          </Card>
        </div>
      </div>
    </section>
  );
}
