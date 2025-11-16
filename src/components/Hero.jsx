import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -inset-[40%] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute -inset-[60%] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_3px_rgba(16,185,129,0.8)]" />
          Public Health Professional
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          Akmal Rayhan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/70"
        >
          Membangun strategi kesehatan masyarakat berbasis data, kolaborasi lintas sektor, dan intervensi yang berdampak untuk komunitas yang lebih sehat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-black font-semibold hover:bg-emerald-400 transition-colors">
            Lihat Portfolio
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors">
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
