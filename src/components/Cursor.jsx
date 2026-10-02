import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Touch devices have no hovering pointer to follow, so they keep native behaviour.
const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const RING = 32;
const PAD = 6;
const snappy = { stiffness: 450, damping: 35, mass: 0.5 };
const lazy = { stiffness: 60, damping: 20 };
const MAGNETIC = '.btn-primary, .btn-glass, .btn-icon';
const PULL = 0.2;

const Cursor = () => {
  const [enabled] = useState(() => window.matchMedia(FINE_POINTER).matches);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [radius, setRadius] = useState(RING / 2);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(-100, snappy);
  const ringY = useSpring(-100, snappy);
  const ringW = useSpring(RING, snappy);
  const ringH = useSpring(RING, snappy);
  const glowX = useSpring(x, lazy);
  const glowY = useSpring(y, lazy);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    const magnetic = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pointer = null;
    let pulled = null;

    // Over a link or button the ring wraps the element instead of the pointer.
    const update = ([cx, cy]) => {
      const target = document.elementFromPoint(cx, cy)?.closest('a, button');
      if (pulled && pulled !== target) pulled.style.translate = '';
      pulled = magnetic && target?.matches(MAGNETIC) ? target : null;
      if (target) {
        const rect = target.getBoundingClientRect();
        // The measured rect already includes the current pull, so the offset converges instead of running away.
        if (pulled) {
          pulled.style.translate = `${(cx - rect.left - rect.width / 2) * PULL}px ${(cy - rect.top - rect.height / 2) * PULL}px`;
        }
        ringX.set(rect.left - PAD);
        ringY.set(rect.top - PAD);
        ringW.set(rect.width + PAD * 2);
        ringH.set(rect.height + PAD * 2);
        setRadius(parseFloat(getComputedStyle(target).borderTopLeftRadius) + PAD);
      } else {
        ringX.set(cx - RING / 2);
        ringY.set(cy - RING / 2);
        ringW.set(RING);
        ringH.set(RING);
        setRadius(RING / 2);
      }
      setStuck(Boolean(target));
    };

    const move = (e) => {
      pointer = [e.clientX, e.clientY];
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      update(pointer);
    };
    // Scrolling moves elements under a still pointer, so re-resolve the target.
    const scroll = () => pointer && update(pointer);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    root.classList.add('custom-cursor');
    window.addEventListener('pointermove', move);
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    root.addEventListener('mouseleave', leave);
    return () => {
      if (pulled) pulled.style.translate = '';
      root.classList.remove('custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      root.removeEventListener('mouseleave', leave);
    };
  }, [enabled, x, y, ringX, ringY, ringW, ringH]);

  if (!enabled) return null;

  return (
    <>
      {/* Sits under the content, so glass cards blur it as it passes behind them. */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 -z-10 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full halo"
      />
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, width: ringW, height: ringH }}
        animate={{ opacity: visible ? 1 : 0, scale: pressed ? 0.9 : 1, borderRadius: radius }}
        transition={{ duration: 0.2 }}
        className={`pointer-events-none fixed left-0 top-0 z-[100] border transition-colors duration-200 ${
          stuck ? 'border-fg/50' : 'border-fg/30'
        }`}
      />
      {/* Difference blending inverts the dot against whatever is under it, in either theme. */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0, scale: stuck ? 0 : pressed ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
};

export default Cursor;
