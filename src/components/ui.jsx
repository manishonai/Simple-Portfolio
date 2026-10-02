import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

// Never wrap a .glass element in a Reveal: an ancestor with opacity < 1 becomes its backdrop root
// and the blur goes flat while fading. Put the glass class on the Reveal itself instead.
// `index` staggers siblings; capped so items far down a long list don't wait seconds to appear.
export const Reveal = ({ as = 'div', children, className, delay = 0, index = 0, ...props }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: delay + Math.min(index, 6) * 0.05, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
};

// Each word slides up from behind its own mask; the plain spaces between them keep normal line wrapping.
export const Words = ({ text, delay = 0 }) =>
  text.split(' ').map((word, i) => (
    <span key={i}>
      {i > 0 && ' '}
      <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
        <motion.span
          className="inline-block"
          initial={{ y: '110%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + i * 0.06, ease: EASE }}
        >
          {word}
        </motion.span>
      </span>
    </span>
  ));

export const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-28 py-20 sm:py-28">
    <Reveal>
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
    </Reveal>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
      <Words text={title} delay={0.1} />
    </h2>
    <div className="mt-12">{children}</div>
  </section>
);

export const Chips = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li key={item} className="chip">{item}</li>
    ))}
  </ul>
);
