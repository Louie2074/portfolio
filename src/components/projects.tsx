'use client';

import { motion } from 'framer-motion';
import { Plane, ArrowUpRight, Sparkles, Database, Search } from 'lucide-react';

const tech = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'FastAPI',
  'Python',
  'MotherDuck',
  'Supabase',
  'Stripe',
  'AI SDK',
  'Fly.io',
];

const highlights = [
  {
    icon: Search,
    title: 'Ask in plain English',
    body: 'Describe the trip you want and an LLM parses your intent, then surfaces ranked award redemptions.',
  },
  {
    icon: Database,
    title: 'Backed by live data',
    body: 'Real award availability scraped from Alaska, JetBlue & Delta — facts come from the database, never the model.',
  },
  {
    icon: Sparkles,
    title: 'Smart redemptions',
    body: 'Compare the cash value of points across routes and get strategy recommendations for the best redemption.',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Projects
        </motion.h2>

        <motion.a
          href="https://pointspilot.org/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="group relative block max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 shadow-xl transition-colors duration-300 hover:border-purple-500/60"
        >
          {/* Glow accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

          <div className="relative p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg shadow-purple-900/40">
                  <Plane className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 mb-2">
                    Featured · Live
                  </span>
                  <h3 className="text-2xl font-bold text-white font-serif leading-none">
                    Points Pilot
                  </h3>
                </div>
              </div>
              <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-gray-500 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <p className="mt-6 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              An AI-powered award-travel intelligence platform. Ask for flights in natural
              language and Points Pilot returns ranked point redemptions backed by live award
              availability — so you always know the smartest way to spend your miles.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <div className="mb-2 flex items-center gap-2 text-purple-400">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">{title}</span>
                  </div>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-gray-600 bg-gray-700/70 px-2 py-1 text-xs font-medium text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors group-hover:text-purple-300">
              Visit pointspilot.org
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
