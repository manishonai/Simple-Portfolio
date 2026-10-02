import { FaGithub, FaLinkedinIn, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { FiArrowRight, FiFileText, FiLink, FiMail } from 'react-icons/fi';
import { EMAIL, RESUME_URL } from '../links';
import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Reveal, Words } from './ui';

const socials = [
  { icon: FaGithub, link: 'https://github.com/manishonai', label: 'GitHub' },
  { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/manishonai', label: 'LinkedIn' },
  { icon: FiMail, link: `mailto:${EMAIL}`, label: 'Email' },
  { icon: FaXTwitter, link: 'https://x.com/manishonai', label: 'X' },
  { icon: FaTelegram, link: 'https://telegram.dog/manishonai', label: 'Telegram' },
  { icon: FiLink, link: 'https://linktr.ee/manishonai', label: 'All links' },
];

const stats = [
  { value: '3+', label: 'years shipping LLM systems' },
  { value: '25%', label: 'faster room turnover' },
  { value: '90%', label: 'less deployment downtime' },
  { value: '<200ms', label: 'semantic retrieval' },
];

// Counts the numeric part of a stat like "<200ms" up from zero when it scrolls into view.
const CountUp = ({ value }) => {
  const [, prefix, number, suffix] = value.match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(reduceMotion ? Number(number) : 0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(count, Number(number), { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduceMotion, count, number]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const Hero = () => (
  <section className="pb-16 pt-36 sm:pb-24 sm:pt-48">
    <Reveal as="p" className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] motion-safe:animate-pulse" />
      Applied AI Engineer · Bengaluru, India
    </Reveal>

    <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-7xl">
      <Words text="Manish R" delay={0.1} />
    </h1>

    <Reveal delay={0.2}>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-sheen sm:text-5xl sm:leading-tight">
        I build production AI systems.
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        I build LLM systems end to end: multi-agent orchestration with LangGraph, RAG pipelines, knowledge
        graphs, evaluation, and deployment on Python/FastAPI backends and React/Next.js frontends.
      </p>
    </Reveal>

    <div className="mt-10 flex flex-wrap items-center gap-3">
      <Reveal as="a" delay={0.3} href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <FiFileText />
        View Resume
      </Reveal>
      <Reveal as="a" delay={0.35} href="#contact" className="btn-glass group">
        Get in touch
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </Reveal>
      <ul className="flex flex-wrap gap-2 sm:ml-2">
        {socials.map(({ icon: Icon, link, label }, i) => (
          <li key={label}>
            <Reveal
              as="a"
              delay={0.4 + i * 0.04}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="btn-icon"
            >
              <Icon />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {stats.map(({ value, label }, i) => (
        <Reveal key={label} delay={0.5} index={i} className="glass spotlight rounded-3xl p-5">
          <p className="text-3xl font-semibold tracking-tight text-sheen tabular-nums"><CountUp value={value} /></p>
          <p className="mt-1 text-sm text-muted">{label}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Hero;
