import { Chips, Reveal, Section } from './ui';

const skillCategories = [
  {
    title: 'Generative AI & Agents',
    skills: ['LangGraph', 'LangChain', 'Multi-Agent Systems', 'Agentic Workflows', 'RAG', 'Prompt Engineering', 'LLM Evaluation', 'MCP (FastMCP)', 'LiteLLM', 'LangSmith', 'LangMem SDK'],
  },
  {
    title: 'LLM Providers',
    skills: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Groq', 'OpenRouter'],
  },
  {
    title: 'Data & Retrieval',
    skills: ['Qdrant', 'ChromaDB', 'FAISS', 'Memgraph', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLite', 'Supabase', 'SQLAlchemy', 'Alembic', 'ELK Stack'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'Solidity', 'SQL', 'Bash', 'Embedded C'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'Bun', 'REST APIs', 'SSE', 'WebSocket', 'Microservices', 'Async Python'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'Browser Extensions (MV3, WXT)', 'Vite', 'Streamlit'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'GCP', 'GKE', 'Terraform', 'GitHub Actions', 'GitLab CI', 'Cloudflare Workers', 'Vercel', 'Railway', 'Prometheus', 'Grafana', 'Snyk', 'Trivy'],
  },
  {
    title: 'Testing & Observability',
    skills: ['Pytest', 'Vitest', 'Playwright', 'E2E Testing', 'LLM Eval Gates', 'LangSmith Tracing', 'axe-core'],
  },
  {
    title: 'Blockchain & Security',
    skills: ['Bitcoin (Taproot, Schnorr, BIP-32/39)', 'bitcoinjs-lib', 'Self-Custody Wallets', 'AES-GCM / PBKDF2', 'Ethers.js', 'Web3.js', 'Solana Anchor', 'Solidity', 'x402 Protocol', 'ERC-8004', 'ZK Proofs'],
  },
  {
    title: 'IoT & Embedded',
    skills: ['ESP32', 'Raspberry Pi', 'IoT Sensors', 'Real-time Monitoring'],
  },
];

const Skills = () => (
  <Section id="skills" eyebrow="03 / Skills" title="Tools I reach for">
    <div className="gap-4 sm:columns-2 lg:columns-3">
      {skillCategories.map((category, i) => (
        <Reveal key={category.title} index={i} className="glass spotlight mb-4 break-inside-avoid rounded-3xl p-6">
          <h3 className="mb-4 font-medium">{category.title}</h3>
          <Chips items={category.skills} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
