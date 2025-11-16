import { motion } from 'framer-motion'

const items = [
  {
    title: 'Program Imunisasi Komunitas',
    tag: 'Community Health',
    desc: 'Peningkatan cakupan imunisasi melalui pendekatan berbasis data dan kemitraan puskesmas.',
  },
  {
    title: 'Riset Perilaku Kesehatan Remaja',
    tag: 'Behavioral Research',
    desc: 'Studi longitudinal untuk memetakan faktor risiko dan intervensi efektif pada populasi remaja.',
  },
  {
    title: 'Dashboard Monitoring COVID-19',
    tag: 'Data & Surveillance',
    desc: 'Pengembangan dashboard real-time untuk pengambilan keputusan berbasis bukti.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Portfolio</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            Kolaborasi? <span>→</span>
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] overflow-hidden"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-emerald-500/20 to-sky-500/20" />
              <div className="relative z-10">
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">{it.tag}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{it.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
