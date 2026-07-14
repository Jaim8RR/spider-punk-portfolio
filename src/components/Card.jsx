import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Reusable Glassmorphism card for the skills grid.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon       — Icon component to render
 * @param {string}          props.iconColor  — 'red' | 'blue' | 'purple'
 * @param {string}          props.title      — Card heading
 * @param {string}          props.children   — Card body text
 * @param {number}          props.delay      — Animation delay index (1-4)
 */
export default function Card({ icon, iconColor = 'red', title, children, delay = 1 }) {
  const revealRef = useScrollReveal();

  return (
    <article
      ref={revealRef}
      className={`glass-card reveal reveal--delay-${delay}`}
    >
      <div className={`glass-card__icon glass-card__icon--${iconColor}`}>
        {icon}
      </div>
      <h3 className="glass-card__title">{title}</h3>
      <p className="glass-card__text">{children}</p>
    </article>
  );
}
