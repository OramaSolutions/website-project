
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Zap,
  TrendingUp,
  ShieldCheck,
  Clock,

  Lightbulb,
  BarChart3,
  Factory,
  CheckCircle2,

} from "lucide-react";

const journeyContent = [
  {
    year: "2020",
    title: "Inception",
    description:
      "Founded to solve industrial vision problems by replacing brittle rule-based systems with practical, AI-driven solutions built for real shop floors.",
    icon: Rocket,
    point: 'Started with keen focus on industry 4.0 '
  },
  {
    year: "2021–22",
    title: "Tech Development",
    description:
      "Heavy investment in R&D to build, test, and harden AI vision software capable of handling complex defects and factory variability.",
    icon: Zap,
    point: 'Added Object Detection and Assembly Verification modules.'
  },
  {
    year: "2023",
    title: "Commercialization",
    description:
      "AI models matured into production-ready systems, leading to our first live deployments and measurable quality improvements.",
    icon: TrendingUp,
    point: 'Added OCR and Defect Detection capabilities.'
  },
  {
    year: "2024",
    title: "Industry Partner",
    description:
      "Became a trusted AI vision partner for 11+ major companies, delivering reliable systems across multiple production environments.",
    icon: ShieldCheck,
    point: 'Added Sound Analysis and Digitization modules.'
  },
  {
    year: "2025",
    title: "Expansion",
    description:
      "Expanded into new domains with no-code AI vision platforms, enabling faster adoption and scalable deployment across industries.",
    icon: Lightbulb,
    point: 'Developed one of a kind no-code AI-ML platform.'
  }

]

export default function About() {
  return (
    <section className="p  bg-white dark:bg-[#020617] max-w-screen overflow-hidden">
      <div className="">

        {/* ================= HERO ================= */}
        <HeroSection />
        <div className="max-w-7xl mx-auto space-y-32 px-2 md:px-4">
          {/* ================= TURNKEY SOLUTIONS ================= */}
          <TurnkeySection />


          {/* ================= JOURNEY ================= */}
          <JourneySection />

          {/* ================= VISION & MISSION ================= */}
          <VisionMissionSection />

          {/* ================= AI ADVANTAGE ================= */}
          <AIAdvantageSection />

          {/* ================= METHODOLOGY ================= */}
          <MethodologySection />

          {/* ================= WHY ORAMA ================= */}
          <WhyOramaSection />
        </div>
      </div>
    </section>
  );
}



function HeroSection() {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-[#0a0a1a]">
      {/* Background container with fixed dimensions */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Center glow - enhanced for dark mode */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 dark:from-purple-900/40 dark:via-blue-900/30 dark:to-purple-900/40 rounded-full blur-3xl" />

        {/* Simple concentric rings - enhanced for dark mode */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gray-300/40 dark:border-purple-900/60 rounded-full"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
            }}
          />
        ))}

        {/* Small decorative elements - enhanced for dark mode */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400/10 dark:bg-purple-700/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 dark:bg-blue-700/20 rounded-full blur-2xl" />

        {/* Dark mode specific elements */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/5 dark:bg-purple-800/30 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-blue-500/5 dark:bg-blue-800/30 rounded-full blur-xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Purple-themed badge - enhanced for dark mode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/50 dark:to-blue-900/50 border border-purple-100 dark:border-purple-800/50 shadow-lg dark:shadow-purple-900/20"
        >
          <Target className="w-4 h-4 text-blue-600 dark:text-purple-300" />
          <span className="text-sm font-medium text-blue-700 dark:text-purple-200">
            About Orama Solutions
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 dark:text-gray-100">
          Transforming{" "}
          <span className="font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
            Industrial AI
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          From cameras and lighting to AI models, automation, and on-site deployment —
          we build and deliver complete industrial solutions.
        </p>
      </motion.div>
    </div>
  );
}

function TurnkeySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="relative w-full mx-auto dark:bg-slate-400 rounded-t-2xl md:rounded-3xl bg-[#020617] px-6 py-12"
    >

      {/* Heading */}
      <div className="mb-24 text-center mx-auto" >
        <h2 className="text-4xl md:text-5xl font-light mb-6 dark:text-gray-900 text-gray-100">
          Built as a Complete Industrial System
        </h2>
        <p className="text-xl dark:text-gray-600 text-gray-400 max-w-3xl mx-auto ">
          Orama does not deliver software modules.
          We design, deploy, and take ownership of full automation systems on the shop floor.
        </p>
      </div>

      {/* Vertical spine */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/50 to-blue-500/20" />

        <div className="space-y-24 pl-12">
          {[
            {
              label: 'PHYSICAL LAYER',
              title: 'Hardware & Sensors',
              desc: 'Industrial cameras, lighting, optics, compute units, and enclosures designed for harsh factory conditions.',
            },
            {
              label: 'INTELLIGENCE LAYER',
              title: 'AI Vision & Decision Making',
              desc: 'Custom-trained deep learning models that understand real defects, not synthetic lab data.',
            },
            {
              label: 'CONTROL LAYER',
              title: 'Automation & Actuation',
              desc: 'PLC integration, robotics, reject mechanisms, conveyors, alarms, and machine control.',
            },
            {
              label: 'SYSTEM LAYER',
              title: 'Integration & Data',
              desc: 'MES, ERP, dashboards, traceability, analytics, and plant-wide visibility.',
            },
            {
              label: 'OWNERSHIP',
              title: 'On-site Deployment & Support',
              desc: 'Installation, calibration, validation, training, and long-term system responsibility.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-8">
                {/* Index */}
                <div className="dark:text-blue-600 text-blue-400 font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div>
                  <div className="text-sm tracking-widest text-gray-400 dark:text-gray-600 mb-2">
                    {item.label}
                  </div>
                  <h3 className="text-2xl font-medium mb-3 dark:text-gray-900 text-gray-100">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray-700 text-gray-400 max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing authority line */}
      <div className="mt-24 text-xl font-medium dark:text-gray-800 text-gray-200 text-center">
        One system. One accountable partner. Zero handoffs.
      </div>
    </motion.section>
  )
}

function JourneySection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
          Our Journey
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          From inception to becoming a trusted industry partner
        </p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative hidden lg:block">
        {/* Horizontal line */}
        <div className="absolute left-8 right-8 top-12 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 dark:from-blue-700 dark:via-blue-600 dark:to-blue-700" />

        <div className="flex items-start justify-between gap-4 px-4">
          {journeyContent.map((milestone, idx) => {
            const Icon = milestone.icon
            return (
              <div key={idx} className="relative w-1/5">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 h-80 flex flex-col">
                  {/* Top */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                    {milestone.description}
                  </p>

                  <p className="mt-2 text-sm bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                    {milestone.point}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden space-y-14 px-2">
        {journeyContent.map((milestone, idx) => {
          const Icon = milestone.icon
          return (
            <div key={idx}>
              {/* Year + icon */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                  {milestone.year}
                </span>
                <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                {milestone.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {milestone.description}
              </p>

              {/* Highlight point */}
              <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                {milestone.point}
              </p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

function VisionMissionSection() {
  return (
    <section className="relative w-full ">
      <div className="grid lg:grid-cols-2 min-h-[80vh] gap-1 lg:gap-0">

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="relative flex items-center px-10 lg:px-16 "
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/about/vision-bg.png"
              alt="Industrial AI vision"
              className="w-full h-full object-cover rounded-l-3xl"
            />
            <div className="absolute inset-0 bg-black/60 rounded-l-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl text-white py-4 md:py-0">
            <div className="mb-6 inline-flex items-center gap-3 text-blue-300">
              <Target className="w-6 h-6" />
              <span className="tracking-widest text-sm">VISION</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Transform the Shop Floor
            </h2>

            <p className="text-lg leading-relaxed text-gray-200">
              To become a trusted partner in shop floor digital transformation —
              enabling zero-defect manufacturing through intelligent automation,
              real-time decision-making, and AI-driven quality systems.
            </p>
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="relative flex items-center px-10 lg:px-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/images/about/mission-bg.png"
              alt="Factory automation system"
              className="w-full h-full object-cover rounded-r-3xl"
            />
            <div className="absolute inset-0 bg-black/65 rounded-r-3xl *:" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl text-white py-4 md:py-0">
            <div className="mb-6 inline-flex items-center gap-3 text-blue-300">
              <Rocket className="w-6 h-6" />
              <span className="tracking-widest text-sm">MISSION</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Build Systems That Run Production
            </h2>

            <p className="text-lg leading-relaxed text-gray-200">
              Design, deploy, and own complete industrial automation systems —
              combining hardware, AI vision, automation, and integration to deliver
              measurable quality improvement and operational efficiency.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function AIAdvantageSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
          Our AI Advantage
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Why modern AI vision outperforms traditional systems
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Legacy Systems */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/50 dark:to-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 text-red-600 dark:text-red-400">
              <Factory className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Legacy Vision Systems
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Traditional limitations</p>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Limited scope and flexibility",
              "Struggle with complex defects",
              "Highly sensitive to environmental changes",
              "Frequent false alarms"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Orama AI Systems */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200 dark:border-blue-800/30 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Orama AI Vision Systems
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Modern advantages</p>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Deep learning for complex visual tasks",
              "Accuracy up to 99%",
              "Real-time, millisecond-level decision making",
              "Robust against lighting and orientation changes"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function MethodologySection() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const phases = [
    {
      label: 'PHASE 01',
      title: 'Discovery & Foundation',
      desc: 'On-site problem understanding, data evaluation, feasibility analysis, and system architecture grounded in real production constraints.',
      color: 'from-blue-500/20 dark:from-blue-400/50'
    },
    {
      label: 'PHASE 02',
      title: 'Proof & Validation',
      desc: 'Rapid proof-of-concept deployed under live conditions, iterated and validated until production-level accuracy is achieved.',
      color: 'from-purple-500/20 dark:from-purple-400/50'
    },
    {
      label: 'PHASE 03',
      title: 'Deployment & Ownership',
      desc: 'Full-scale deployment into production lines with continuous optimization and long-term system responsibility.',
      color: 'from-emerald-500/20 dark:from-emerald-400/40 via-blue-300/20'
    }
  ]

  return (
    <section className="relative max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 max-w-4xl text-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Our Proven Methodology
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {isMobile
            ? 'Tap through the phases to understand our process.'
            : 'Move your cursor to explore how our systems go from concept to production.'}
        </p>
      </div>

      {/* Mobile Tabs */}
      {isMobile && (
        <div className="flex gap-6 mb-6 text-sm tracking-widest">
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-opacity ${active === i ? 'opacity-100 font-medium' : 'opacity-40'
                }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Interaction Area */}
      <div
        onMouseMove={(e) => {
          if (isMobile) return
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const rawIndex = Math.floor((x / rect.width) * phases.length)
          const index = Math.max(0, Math.min(phases.length - 1, rawIndex))
          setActive(index)
        }}
        className={`relative h-[320px] rounded-3xl overflow-hidden ${isMobile ? 'cursor-default' : 'cursor-none'
          }`}
      >
        {/* Background Wash */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${phases[active]?.color} to-transparent transition-all duration-500`}
        />

        {/* Desktop Phase Indicators */}
        {!isMobile && (
          <div className="absolute top-6 left-6 flex gap-4 text-sm tracking-widest">
            {phases.map((p, i) => (
              <span
                key={i}
                className={`transition-opacity ${i === active ? 'opacity-100' : 'opacity-30'
                  }`}
              >
                {p.label}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative h-full flex items-center px-8 md:px-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-medium mb-4">
              {phases[active]?.title}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {phases[active]?.desc}
            </p>
          </div>
        </div>

        {/* Desktop Hint */}
        {!isMobile && (
          <div className="absolute bottom-6 right-6 text-sm opacity-50">
            move →
          </div>
        )}
      </div>
    </section>
  )
}

function WhyOramaSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="text-center bg-blue-50 dark:bg-gradient-to-r dark:from-blue-600/20 dark:to-indigo-600/20 border border-blue-200 dark:border-blue-700/30 rounded-3xl p-12"
    >
      <div className="relative">
        <div className="inline-flex items-center gap-3 mb-8 p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40">
          <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-600" />
          <span className="text-xl font-semibold text-blue-700 dark:text-blue-700">
            Why Choose Orama
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-light mb-10 text-gray-900 dark:text-gray-800">
          Your Competitive <span className="font-medium">AI Advantage</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: Zap, text: "Orientation and lighting agnostic systems" },
            { icon: ShieldCheck, text: "Elimination of false alarms" },
            { icon: BarChart3, text: "Data-driven optimization" },
            { icon: Clock, text: "Lightning-fast return on investment" }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/50 border border-blue-200 dark:border-blue-800/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-600">
          Join 11+ major companies already transforming their operations with Orama AI
        </p>
      </div>
    </motion.div>
  )
}

