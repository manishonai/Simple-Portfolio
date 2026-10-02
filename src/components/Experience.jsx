import { Chips, Reveal, Section } from './ui';

const experience = [
  {
    role: 'Applied AI Engineer',
    company: 'Zo House, Whitefield',
    points: [
      'Designed and deployed an agentic workflow system for a leading multi-national hospitality brand managing hundreds of properties (hostels, luxury homes, and boutique hotels) across diverse geographies.',
      'Architected a LangGraph-based orchestration layer for housekeeping and House Captain task routing, priority escalation, and real-time logistics, with zero manual scheduling errors during the pilot.',
      'Achieved a 25% increase in room turnover speed and a 30% boost in housekeeping productivity through AI-driven task assignment via LangChain agent pipelines.',
      'Built a FastAPI backend with PostgreSQL and Supabase for multi-property data management, and a React.js dashboard for operational visibility.',
    ],
    tech: ['LangGraph', 'LangChain', 'FastAPI', 'React.js', 'PostgreSQL', 'Supabase', 'Docker'],
  },
  {
    role: 'Applied AI Engineer',
    company: 'Atlantis',
    points: [
      'Built and maintained AI-augmented multi-chain bounty monitoring and decentralized funding platforms, resolving critical bugs and shipping features that improved stability and load times by 20%.',
      'Integrated LangChain RAG pipelines for on-chain data querying and automated reporting across blockchain networks using Ethers.js.',
      'Designed and prototyped pay-as-you-go monetization layers using the x402 protocol and ERC-8004 standard for fintech data access.',
    ],
    tech: ['Python', 'LangChain', 'React.js', 'TypeScript', 'MongoDB', 'Ethers.js', 'Express.js', 'Node.js', 'WebSocket'],
  },
];

const Experience = () => (
  <Section id="experience" eyebrow="02 / Experience" title="Where I've been building">
    <ol className="relative space-y-8 border-l border-fg/10 pl-6 sm:pl-10">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span className="absolute -left-[29px] top-8 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent)/0.8)] sm:-left-[45px]" />
          <Reveal className="glass spotlight rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
            <p className="mt-1 font-mono text-sm text-accent">{job.company}</p>
            <ul className="mt-6 space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Chips items={job.tech} />
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
