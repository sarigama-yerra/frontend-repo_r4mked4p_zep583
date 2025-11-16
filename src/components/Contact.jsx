import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center"
        >
          Hubungi Saya
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Nama" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input name="email" required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <input name="subject" placeholder="Subjek" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <textarea name="message" required rows={5} placeholder="Pesan" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />

          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-black font-semibold hover:bg-emerald-400 transition-colors">
              {status === 'loading' ? 'Mengirim…' : 'Kirim Pesan'}
            </button>
            {status === 'sent' && <p className="text-emerald-400">Terkirim! Saya akan segera menghubungi Anda.</p>}
            {status === 'error' && <p className="text-red-400">Gagal mengirim. Coba lagi.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
