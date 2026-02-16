import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Suite } from "../assets/svg.jsx";
// import RotatingBorderDot from "../components/ClockAnimation.jsx";
import {
    Eye,
    Search,
    Layers,
    FileText,
    CheckCircle,
    Zap,
    Download,
    ArrowRight,
    Sparkles,
    Target,
    Factory,
    SlidersHorizontal,
    Workflow
} from "lucide-react";

import {
    applications,
    modelTypes,
    processSteps
} from "../content/noCodeContent";


const RotatingBorderDot = () => {
    return (
        <div className="absolute top-[51%] left-[50.325%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <div className="relative w-66 h-66 md:w-70 md:h-70">
                {/* Circle Border */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500" />

                {/* Rotating Dot */}
                <div className="absolute inset-0 animate-spin-slow">
                    {/* <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" /> */}
                    <div className="
    absolute -top-1 left-1/2 -translate-x-1/2
    w-3 h-3 rounded-full bg-red-500
   shadow-[0_0_10px_rgba(59,130,246,1),0_0_24px_rgba(59,130,246,0.8)]
  "
                    />
                </div>
            </div>
        </div>
    );
};

const NoCodePlatform = () => {
    const [activeFlow, setActiveFlow] = useState("objectDetection");

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.7,              // overall fade-in
                ease: "easeOut",
                staggerChildren: 0.5,       // spacing between children
                delayChildren: 0.5,          // slight pause before children start
            },
        },
    };



    return (
        <section className="py-28 px-4 md:px-8 bg-white dark:bg-[#020617]">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* ================= HERO ================= */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center max-w-5xl mx-auto flex flex-col-reverse md:flex-row"
                >


                    <div className="md:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 dark:text-gray-100 leading-tight">
                            Build Industrial AI{" "}
                            <span className="font-medium bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                                Without Code
                            </span>
                        </h1>


                        <p className="text-sm md:text-xl xl:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
                            Train, validate, and deploy computer vision models — object detection,
                            defect detection, classification, and OCR — without writing a single line of code.
                            Enterprise-ready for industrial applications.
                        </p>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/30">
                            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                No-Code AI Platform
                            </span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center ">
                        <div className="relative rounded-full max-w-screen flex justify-center text-gray-600 dark:text-gray-200">
                            <Suite />
                            {/* <RotatingBorderDot /> */}
                            <img src='/images/icon_techstack.png' alt='Orama' className="w-90 h-90 absolute top-[53%] left-[50.5%] transform -translate-x-1/2 -translate-y-1/2 z-10" />
                        </div>

                    </div>


                </motion.div>

                {/* ================= WHY THIS PLATFORM ================= */}
                <div>
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-light mb-5 text-gray-900 dark:text-gray-100">
                            Why Industrial Teams Choose This Platform
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Built for production lines, not just model training
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-120px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Lower Error Margins",
                                desc: "AI models handle real-world variability, drastically reducing false rejects and missed defects in live production."
                            },
                            {
                                icon: Factory,
                                title: "Runs on the Shop Floor",
                                desc: "Complete applications run locally on edge systems, giving factories full control with zero cloud dependency."
                            },
                            {
                                icon: SlidersHorizontal,
                                title: "Refine for Real Conditions",
                                desc: "Easily adapt models for lighting changes, camera drift, and process variations without rebuilding from scratch."
                            },
                            {
                                icon: Workflow,
                                title: "End-to-End, Not Just Training",
                                desc: "Unlike generic tools that only train models, this platform delivers deployable software ready for production use."
                            }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}

                                    className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="mb-5 p-3 w-fit rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-gray-100">
                                        {item.title}
                                    </h3>

                                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>



                {/* ================= MODEL TYPES ================= */}
                <div>
                    <div className="text-center mb-16">
                        <a
                            href="/no-code-platform"
                            className="mb-6 group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                        >
                            <span>Visit No-Code Platform</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
                            Vision Models Made Simple
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Choose from our pre-trained models or train custom models with your data
                        </p>
                    </div>



                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-120px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {modelTypes.map((model, idx) => {
                            const Icon = model.icon;
                            return (
                                <div
                                    key={idx}

                                    className="group bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300"
                                >
                                    <div className="mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-2xl font-medium mb-4 text-gray-900 dark:text-gray-100">
                                        {model.name}
                                    </h3>

                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {model.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {model.applications.map((a, i) => (
                                            <li key={i} className="flex items-center gap-3 text-base">
                                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700 dark:text-gray-300">{a}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>

                {/* ================= APPLICATIONS ================= */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
                            Pre-Built Vision Applications
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Ready-to-use solutions for common industrial vision challenges
                        </p>
                    </div>

                    
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-120px" }}
                            className="grid lg:grid-cols-2 gap-10">
                            {applications.map((app, idx) => {
                                const Icon = app.icon;
                                return (
                                    <div
                                        key={idx}

                                        className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/50 dark:to-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-xl whitespace- font-medium text-gray-900 dark:text-gray-100">
                                                        {app.title}
                                                    </h3>
                                                    <span className="px-2 py-1 lg:whitespace-nowrap rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium">
                                                        {app.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                            {app.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {app.features.map((f, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-base font-medium border border-blue-100 dark:border-blue-800/30"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                   
                </div>


                {/* ================= PROCESS FLOW ================= */}
                <section
                    className="relative"
                    style={{ transform: "none" }}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <LeftPanel activeFlow={activeFlow} setActiveFlow={setActiveFlow} />
                            <StickyStack activeFlow={activeFlow} />
                        </div>
                    </div>
                </section>


                {/* ================= CTA ================= */}
                <div

                    className="text-center bg-blue-50 dark:bg-gradient-to-r dark:from-blue-600/20 dark:to-indigo-600/20 border border-blue-200 dark:border-blue-700/30 rounded-2xl p-12"      >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 dark:opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    <div className="relative text-center">
                        <div className="inline-flex items-center gap-3 mb-8 p-3 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40">
                            <Zap className="w-7 h-7 text-blue-600 dark:text-blue-600" />
                            <span className="text-xl font-semibold text-blue-700 dark:text-blue-700">
                                Production Ready
                            </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-800">
                            Deploy at the Edge. <span className="font-medium">Refine Until Optimal.</span>
                        </h3>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Download production-ready applications and run them on your edge
                            devices or factory systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/no-code-platform"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                            >
                                <span>Visit Platform</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>


                        </div>

                        <p className="mt-8 text-gray-500 dark:text-gray-500 text-lg">
                            No credit card required • Free tier available
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NoCodePlatform;

const LeftPanel = ({ activeFlow, setActiveFlow }) => {
    return (
        <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32 space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
                        From Dataset to <span className="text-blue-600">Deployment</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Deploy fast. Refine continuously. Improve directly on the edge.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {[
                        { key: "classification", label: "Image Classification" },
                        { key: "objectDetection", label: "Object Detection" },
                        { key: "defectDetection", label: "Defect Detection" },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveFlow(key)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium border transition
                ${activeFlow === key
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StickyStack = ({ activeFlow }) => {
    const steps = processSteps[activeFlow];

    return (
        <div className="lg:col-span-6">
            <div className="relative">
                {/* Background line/connector */}
                <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden lg:block" />

                {steps.map((step, idx) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={idx}
                            className="relative lg:min-h-[320px] mb-12 last:mb-0"
                        >
                            {/* Step number indicator on the line */}
                            <div className="absolute left-[37px] -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 hidden lg:block" />

                            <div
                                className={`
                                    bg-white dark:bg-gray-900
                                    border border-gray-200 dark:border-gray-700
                                    rounded-2xl p-8 shadow-xl
                                    transition-all duration-300
                                    lg:sticky
                                    ${idx === 0 ? 'lg:top-10' : 'lg:top-10'}
                                    lg:ml-16
                                `}
                                style={{
                                    zIndex: steps.length - idx,
                                }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-semibold">
                                        {idx + 1}
                                    </div>
                                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {step.title}
                                </h4>

                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
