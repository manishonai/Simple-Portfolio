import { useState } from 'react';
import { FiFileText, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { RESUME_URL } from '../links';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // The inline script in index.html applies the initial theme before first paint.
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
    setIsDark(next);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-5 pr-2">
        <a href="#" className="text-lg font-semibold tracking-tight">
          MR<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-fg/5 hover:text-fg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="rounded-full p-2.5 text-fg transition-colors hover:bg-fg/10"
          >
            {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex">
            <FiFileText />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="rounded-full p-2.5 text-fg transition-colors hover:bg-fg/10 md:hidden"
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-2 md:hidden">
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 w-full justify-center sm:hidden"
          >
            <FiFileText />
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
