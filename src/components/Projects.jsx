import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { Chips, Reveal, Section } from './ui';

// `label` marks client work under NDA, which has no public links.
const projects = [
  {
    title: "Multi-Agent AI Due Diligence Platform",
    label: "Client Project (NDA)",
    description: "Primary engineer on a multi-agent LLM platform that turns a single company name into an auditable, source-grounded due diligence recommendation. A LangGraph state machine runs discovery, validation, analysis, and synthesis with specialist scoring agents and a multi-persona council that debates findings, on a FastAPI microservice backend with SSE progress streaming, a knowledge graph, vector retrieval, and per-service fault isolation. Every result carries data lineage and claim grounding, guarded by blocking LLM eval gates and 290+ test files across Pytest, Vitest, and Playwright.",
    tech: ["Python", "FastAPI", "LangGraph", "LangSmith", "LiteLLM", "PostgreSQL", "Memgraph", "Qdrant", "Redis", "Next.js", "TypeScript", "Docker"],
  },
  {
    title: "Bitcoin Self-Custody Vault Wallet",
    label: "Client Project (NDA)",
    description: "Sole engineer of a cross-browser Manifest V3 wallet extension for Bitcoin self-custody vaults with Taproot Schnorr signing and Bitcoin Layer-2 support. Key management is hardened with AES-GCM under PBKDF2-SHA256, and a secure dApp provider API adds site allow-listing, nonce replay protection, fee caps, and a popup-only approval queue. Also built a testnet faucet with HD-wallet UTXO management and shipped 1,900+ automated tests across 32K+ lines of TypeScript.",
    tech: ["TypeScript", "React", "WXT (Manifest V3)", "bitcoinjs-lib", "Web Crypto API", "Cloudflare Workers", "Vitest", "Playwright"],
  },
  {
    title: "AI Memory Protocol",
    description: "A persistent, local-first knowledge layer that keeps user preferences and history searchable across siloed AI platforms like ChatGPT, Claude, and Gemini. Episodic and semantic memory built on LangMem SDK and LangGraph Store delivers semantic retrieval under 200ms across 10,000+ entries and a 40% reduction in manual context re-entry, with pay-per-use storage via the x402 protocol and ERC-8004.",
    tech: ["Python", "LangChain", "LangGraph", "ChromaDB", "Redis", "SQLite", "TypeScript"],
  },
  {
    title: "AI-Powered DevOps Console & CLI",
    description: "An autonomous code-to-production deployment engine with integrated security scanning and self-healing infrastructure for a Silicon Valley technology firm. Go CLI tooling orchestrates deployments across GKE clusters with Terraform-managed infrastructure, cutting deployment-related downtime by 90% and moving the client from bi-weekly to daily releases, with Snyk and Trivy baked into every SOC2-aligned deployment gate.",
    tech: ["Go", "Docker", "GitHub Actions", "GitLab CI", "Snyk", "Trivy", "Prometheus", "Grafana", "GKE", "Terraform"],
  },
  {
    title: "L2GPT: Bitcoin L2 RAG Chatbot",
    description: "A RAG chatbot giving accurate, context-aware answers across Bitcoin Layer 2 solutions and scaling technologies, using LangChain with FAISS vector retrieval, Claude Sonnet 3.5 for generation, and an interactive Streamlit interface.",
    tech: ["Python", "LangChain", "FAISS", "Claude Sonnet 3.5", "Streamlit"],
  },
  {
    title: "Stealth Market-Maker Agent (DeFAI)",
    description: "An AI-orchestrated batching layer for prediction markets that eliminates front-running and alpha leakage through off-chain aggregation and ZK-shielded settlement. LangGraph drives multi-step agent orchestration with GPT-4 market intelligence, settling through Anchor smart contracts on Solana with MagicBlock ER.",
    tech: ["Next.js 15", "TypeScript", "Python", "FastAPI", "LangGraph", "Anchor (Rust)", "Helius RPC"],
  },
  {
    title: "AI Travel Planner",
    description: "An intelligent travel planning system built on LangChain RAG pipelines and FAISS semantic search, with the ELK Stack for logging and analytics, deployed as containers on GCP with Kubernetes and an automated CI/CD pipeline.",
    tech: ["Python", "LangChain", "FAISS", "ELK Stack", "Groq API", "Streamlit", "Docker", "GCP", "Kubernetes"],
  },
  {
    title: "IoT Air Quality & Decentralized Climate Infrastructure",
    description: "A decentralized climate tech stack monitoring air quality through ESP32 devices, processing 2.6M data points per month with an incentivization layer for data contributors. Readings land in an immutable IPFS data layer, with pay-as-you-go access via the x402 protocol and ERC-8004, visualized on a real-time AQI dashboard.",
    tech: ["ESP32 (Embedded C)", "IPFS", "React", "Leaflet", "x402 Protocol", "ERC-8004"],
    github: "https://github.com/aqihub/aqi-dashboard",
    external: "https://dashboard.aqi.co.in/",
  },
];

const linkClass = 'grid h-9 w-9 place-items-center rounded-full border border-fg/10 text-muted transition hover:bg-fg/10 hover:text-fg';

const Projects = () => (
  <Section id="projects" eyebrow="04 / Projects" title="Selected work">
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal
          key={project.title}
          index={i % 2}
          className="glass spotlight flex flex-col rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <div className="flex shrink-0 gap-2">
              {project.label && <span className="chip whitespace-nowrap">{project.label}</span>}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className={linkClass}>
                  <FiGithub />
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`} className={linkClass}>
                  <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
          <p className="mb-6 mt-4 leading-relaxed text-muted">{project.description}</p>
          <div className="mt-auto">
            <Chips items={project.tech} />
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;
