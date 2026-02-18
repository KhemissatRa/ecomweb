import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../commponents/navbar'
import Footer from './footer'; 

const stats = [
  { value: '50K+', label: 'Clients Satisfaits', icon: '👥' },
  { value: '12K+', label: 'Produits', icon: '📦' },
  { value: '48', label: 'Wilayas Couvertes', icon: '📍' },
  { value: '4.9★', label: 'Note Moyenne', icon: '⭐' },
]

const values = [
  {
    icon: '🛡️',
    title: 'Confiance & Qualité',
    desc: 'Chaque produit est vérifié et certifié avant d\'être mis en vente. Votre satisfaction est notre priorité absolue.',
  },
  {
    icon: '🚀',
    title: 'Livraison Express',
    desc: 'Livraison rapide dans toute l\'Algérie — de Tamanrasset à Annaba, en 24 à 72 heures.',
  },
  {
    icon: '💳',
    title: 'Paiement Sécurisé',
    desc: 'Paiement à la livraison, CIB, Dahabia — nous acceptons tous les modes de paiement locaux.',
  },
  {
    icon: '🤝',
    title: 'Support Local',
    desc: 'Une équipe algérienne disponible 7j/7 pour répondre à toutes vos questions en arabe, français ou tamazight.',
  },
]

const team = [
  { name: 'Youcef Benali', role: 'Fondateur & CEO', city: 'Alger', emoji: '👨‍💼' },
  { name: 'Amina Kaci', role: 'Directrice Produit', city: 'Oran', emoji: '👩‍💻' },
  { name: 'Riad Meziane', role: 'Chef Logistique', city: 'Constantine', emoji: '👨‍🔧' },
]

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(numTarget)) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * numTarget))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, animate }) {
  const num = useCountUp(stat.value, 1200, animate)
  const suffix = stat.value.replace(/[0-9.]/g, '')
  const isNum = !isNaN(parseFloat(stat.value.replace(/[^0-9.]/g, '')))

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/40 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      <span className="text-3xl mb-2">{stat.icon}</span>
      <span className="text-3xl font-black text-yellow-400 tracking-tight">
        {isNum ? `${num}${suffix}` : stat.value}
      </span>
      <span className="text-xs text-slate-400 tracking-widest uppercase mt-1 text-center">{stat.label}</span>
    </div>
  )
}

export default function About() {
  const statsRef = useRef(null)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateStats(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 min-h-screen font-sans">
    <Navbar/>

      {/* ─── HERO ─── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />

        {/* Flag accent */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">🇩🇿</span>
          <span className="text-slate-400 text-xs tracking-[0.3em] uppercase font-semibold">Fièrement Algérien</span>
          <span className="text-2xl">🇩🇿</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          À Propos de{' '}
          <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            DzShop
          </span>
        </h1>

        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mt-4">
          La première marketplace 100% algérienne — née à Alger, construite pour les 48 wilayas.
          Nous connectons les meilleurs vendeurs locaux avec des millions d'acheteurs à travers tout le pays.
        </p>

        <div className="mt-8 flex gap-3 flex-wrap justify-center">
          <span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold tracking-wider uppercase">
            Fondée en 2021
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-700/60 border border-slate-600/40 text-slate-300 text-xs font-bold tracking-wider uppercase">
            Alger, Algérie
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-700/60 border border-slate-600/40 text-slate-300 text-xs font-bold tracking-wider uppercase">
            Startup Algérienne 🦁
          </span>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section ref={statsRef} className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} animate={animateStats} />
          ))}
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600/40 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl shadow-black/40">
          <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-yellow-400 rounded-full" />
            <span className="text-yellow-400 font-bold text-xs tracking-[0.3em] uppercase">Notre Histoire</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-5 leading-snug">
            Né d'un besoin réel,<br />
            <span className="text-yellow-400">construit pour l'Algérie</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            En 2021, trois amis d'Alger ont réalisé qu'acheter en ligne en Algérie était encore compliqué — des sites étrangers, des délais interminables, des frais de douane imprévisibles. Ils ont décidé de changer ça.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            Aujourd'hui, <span className="text-white font-semibold">DzShop</span> est la plateforme de confiance de milliers d'algériens — avec des vendeurs vérifiés, une livraison locale fiable, et un service client qui parle votre langue.
          </p>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white tracking-tight">
            Nos <span className="text-yellow-400">Valeurs</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm tracking-wider uppercase">Ce qui nous guide chaque jour</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex gap-4 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/40 rounded-2xl p-6 shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-2xl group-hover:scale-110 transition-transform duration-200">
                {v.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-yellow-400 transition-colors duration-200">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white tracking-tight">
            L'<span className="text-yellow-400">Équipe</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm tracking-wider uppercase">Les gens derrière DzShop</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-600/40 rounded-3xl p-7 w-56 shadow-2xl shadow-black/40 hover:shadow-yellow-500/10 hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/50 flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:border-yellow-500/40 transition-colors duration-300">
                {member.emoji}
              </div>
              <h3 className="text-white font-bold text-sm text-center mb-1">{member.name}</h3>
              <p className="text-yellow-400 text-xs font-semibold text-center">{member.role}</p>
              <p className="text-slate-500 text-xs mt-1">📍 {member.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="relative bg-gradient-to-br from-yellow-500/10 via-slate-800 to-slate-900 border border-yellow-500/20 rounded-3xl p-10 text-center shadow-2xl shadow-yellow-500/5 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl font-black text-white mb-3">
            Prêt à <span className="text-yellow-400">faire vos achats ?</span>
          </h2>
          <p className="text-slate-400 mb-7 text-sm">Rejoignez plus de 50 000 algériens qui font confiance à DzShop.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-7 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-sm tracking-widest uppercase transition-colors duration-200 shadow-lg shadow-yellow-500/30">
              Commencer les achats
            </button>
            <button className="px-7 py-3 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 text-white font-bold text-sm tracking-wider uppercase transition-colors duration-200">
              Contacter l'équipe
            </button>
          </div>
        </div>
      </section>
    <Footer/>

    </div>
  )
}