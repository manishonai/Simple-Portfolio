import { useEffect } from 'react'
import { MotionConfig, motion, useScroll } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const tilt = !matchMedia('(prefers-reduced-motion: reduce)').matches
    let active = null
    const onMove = (e) => {
      const el = e.target.closest('.spotlight')
      if (active && active !== el) active.style.rotate = ''
      active = el
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      el.style.setProperty('--x', `${px}px`)
      el.style.setProperty('--y', `${py}px`)
      if (!tilt) return
      // The individual `rotate` property composes with framer-motion's inline transform instead of replacing it.
      const nx = (px / rect.width) * 2 - 1
      const ny = (py / rect.height) * 2 - 1
      const amount = Math.hypot(nx, ny)
      el.style.rotate = amount ? `${-ny} ${nx} 0 ${amount * 2.5}deg` : ''
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="halo absolute -top-[30vmax] left-1/2 h-[60vmax] w-[100vmax] -translate-x-1/2" />
        <div className="bg-dots absolute inset-0" />
      </div>

      <Cursor />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
