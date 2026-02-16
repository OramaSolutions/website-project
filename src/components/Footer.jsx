'use client'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Contact from './Contact'
const Footer = () => {
    return (
        <footer className="relative overflow-hidden">

            {/* ================= CTA SECTION ================= */}
            <section className="relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0">
                    {/* Base background */}
                    <div className="absolute inset-0 bg-white dark:bg-black" />

                    {/* Center glow */}
                    <div
                        className="
      absolute inset-0
      bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.25)_0%,rgba(59,130,246,0.15)_30%,rgba(255,255,255,0)_65%)]
      dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18)_0%,rgba(30,64,175,0.25)_30%,rgba(0,0,0,0)_65%)]
    "
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
                    <p className="text-blue-400 uppercase tracking-widest text-sm font-medium">
                        Connect With Our Experts
                    </p>

                    <h2 className="mt-6 text-3xl md:text-4xl  font-semibold text-gray-700 dark:text-white leading-tight">
                        Built as a Complete Industrial Solution
                    </h2>

                    {/* CTA button with line */}
                    <div className="relative mt-16 flex items-center justify-center">
                        <div className=" -z-1 absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                        <Contact />
                    </div>
                </div>
            </section>

            {/* ================= FOOTER LINKS ================= */}
            <div className="relative">
                {/* Base */}
                <div className="
  absolute inset-0
  bg-gradient-to-b from-slate-900 via-black to-black
" />

                {/* Noise */}
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">

                        <FooterColumn title="Product" items={[
                            'Orama Vision',
                            'Modular AI Hardware',
                            'Edge Deployment',
                            'Analytics Dashboard',
                        ]} />

                        <FooterColumn title="Use Cases" items={[
                            'Defect Detection',
                            'Sorting & Counting',
                            'Label & Text Recognition',
                            'Assembly Verification',
                            
                        ]} />

                        <FooterColumn title="Industries" items={[
                            'Automotive',
                            'FMCG',
                            'Pharmaceuticals',
                            'Electronics',
                            'Warehousing & Logistics',
                        ]} />

                        <FooterColumn title="Resources" items={[
                            'Customer Stories',
                            'Blogs & Insights',
                            'Documentation',
                            'API Guides',
                        ]} />

                        <FooterColumn title="Company" items={[
                            'Our Story',
                            'Careers',
                            'Contact Us',
                            'Privacy Policy',
                        ]} />
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-300 text-xs">
                            © 2020 Orama Solutions. All rights reserved.
                        </p>

                        <div className="flex items-center gap-2">
                            <img
                                src="/logo-sq.png"
                                alt="Orama"
                                className="relative w-9 h-9 rounded-full p-0.5 bg-white"
                            />

                            <span className="text-white font-semibold tracking-wide">
                                ORAMA SOLUTIONS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

/* ---------- Helper ---------- */
const FooterColumn = ({
    title,
    items,
}) => (
    <div>
        <h4 className="text-white font-semibold mb-4">{title}</h4>
        <ul className="space-y-2 text-slate-400">
            {items.map((item) => (
                <li key={item} className="hover:text-white transition-colors">
                    {item}
                </li>
            ))}
        </ul>
    </div>
)
