import { FiBookOpen, FiCpu, FiShield } from 'react-icons/fi';
import { Reveal, Section } from './ui';

const highlights = [
  {
    icon: FiCpu,
    title: 'Agentic AI Systems',
    text: 'Multi-agent LangGraph pipelines, RAG, and knowledge graphs, shipped with tracing and blocking eval gates for factual correctness.',
  },
  {
    icon: FiShield,
    title: 'Security-Critical Software',
    text: 'Bitcoin self-custody wallets, applied cryptography, and SOC2-aligned infrastructure where correctness is non-negotiable.',
  },
  {
    icon: FiBookOpen,
    title: 'B.E. Computer Science',
    text: 'PES College of Engineering, Mandya · 2021 - 2025',
  },
];

const About = () => (
  <Section id="about" eyebrow="01 / About" title="Engineering AI that holds up in production">
    <div className="grid gap-10 lg:grid-cols-5">
      <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-3">
        <p>
          I'm an Applied AI Engineer with <span className="text-fg">3+ years</span> of experience building
          production LLM systems end to end, from multi-agent orchestration and RAG pipelines to evaluation,
          observability, and deployment. I specialize in LangGraph and LangChain agent architectures, MCP tooling,
          knowledge graphs, and vector search.
        </p>
        <p>
          I've shipped AI and security-critical software for clients across investment research, hospitality,
          fintech, Bitcoin, and cloud infrastructure, with outcomes including{' '}
          <span className="text-fg">25% faster room turnover</span>,{' '}
          <span className="text-fg">90% less deployment downtime</span>, and{' '}
          <span className="text-fg">sub-200ms semantic retrieval</span>.
        </p>
        <p>
          I back everything I build with strong testing discipline: Pytest, Vitest, Playwright end-to-end suites,
          and blocking LLM eval gates.
        </p>
      </Reveal>

      <div className="grid gap-4 lg:col-span-2">
        {highlights.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} index={i} className="glass spotlight flex gap-4 rounded-3xl p-5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-fg/5 text-fg ring-1 ring-fg/10">
              <Icon />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
