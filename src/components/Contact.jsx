import { FiCalendar, FiMail } from 'react-icons/fi'
import { EMAIL } from '../links'
import { Reveal, Words } from './ui'

const Contact = () => (
  <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
    <Reveal className="glass spotlight overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16">
      <div aria-hidden className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
      <p className="font-mono text-sm text-accent">05 / Contact</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl"><Words text="Let's build something." delay={0.1} /></h2>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m open to new opportunities and my inbox is always open. Whether you have a project, a role, or just
        want to say hi, I&apos;ll get back to you.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="https://calendly.com/manishr2889/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <FiCalendar />
          Schedule a meeting
        </a>
        <a href={`mailto:${EMAIL}`} className="btn-glass">
          <FiMail />
          {EMAIL}
        </a>
      </div>
    </Reveal>
  </section>
)

export default Contact
