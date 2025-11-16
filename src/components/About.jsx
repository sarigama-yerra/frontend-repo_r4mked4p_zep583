import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tentang Akmal</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Spesialis Kesehatan Masyarakat dengan fokus pada promosi kesehatan, pencegahan penyakit, dan manajemen program berbasis bukti. Berpengalaman dalam merancang, mengeksekusi, dan mengevaluasi intervensi yang berorientasi pada dampak, termasuk penguatan sistem kesehatan, edukasi perilaku, dan advokasi kebijakan.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60">Keahlian</p>
                <p className="text-white font-semibold">Epidemiologi, M&E, Health Promotion</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white/60">Pendekatan</p>
                <p className="text-white font-semibold">Evidence-based, Human-centered, Collaborative</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)]" />
            </div>
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/40 to-sky-500/40 blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
