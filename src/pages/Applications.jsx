// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, Layers } from "lucide-react";

const applications = [
    {
        id: "defect-detection",
        title: "Defect Detection",
        subtitle: "Automated Quality Inspection",
        description:
            "Detect cosmetic defects, scratches, dents, cracks, and surface anomalies in real-time using no-code vision models.",
        stats: "Up to 99% defect detection accuracy",
        features: [
            "Surface & cosmetic defect detection",
            "Real-time line inspection",
            "No-code model training",
        ],
        image: "/images/models/defectD.png",
    },
    {
        id: "assembly-verification",
        title: "Assembly Verification",
        subtitle: "Component Presence & Sequence",
        description:
            "Verify correct assembly steps, part presence, alignment, and sequence compliance without writing code.",
        stats: "Reduce assembly errors by 70%",
        features: [
            "Component presence validation",
            "Sequence compliance checks",
            "Operator error prevention",
        ],
        image: "/images/products/assembly-verification.png",
    },
    {
        id: "counting",
        title: "Counting & Measurement",
        subtitle: "Precision Counting & Sizing",
        description:
            "High-accuracy object counting, dimensional measurement, and grading for manufacturing lines.",
        stats: "Sub-millimeter measurement precision",
        features: [
            "High-speed object counting",
            "Dimensional measurement",
            "Automated grading",
        ],
        image: "/images/products/counting.png",
    },
    {
        id: "ocr-barcode",
        title: "OCR & Barcode Reading",
        subtitle: "Text, QR & Code Recognition",
        description:
            "Extract printed or handwritten text, read barcodes, QR codes, and validate labels at scale.",
        stats: "Multi-language OCR support",
        features: [
            "Printed & handwritten OCR",
            "Barcode & QR scanning",
            "Label validation",
        ],
        image: "/images/products/ocr.png",
    },
    {
        id: "classification",
        title: "Classification",
        subtitle: "Sorting & Categorization",
        description:
            "Classify products by type, quality, grade, or category using AI-powered vision models.",
        stats: "Real-time multi-class sorting",
        features: [
            "Quality-based sorting",
            "Multi-class classification",
            "Edge & cloud deployment",
        ],
        image: "/images/models/classF.png",
    },
];

const detailSlugMap = {
    "defect-detection": "defect-detection",
    "assembly-verification": "object-detection",
    counting: "classification",
    "ocr-barcode": "ocr-barcode",
    classification: "classification",
};

const Applications = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {

            const el = document.getElementById(location.hash.replace("#", ""));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 50);
            }
        }
    }, [location]);

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 pt-28 px-4 md:px-8">
            {/* Hero */}
            <section className="max-w-7xl mx-auto mb-24 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4"
                >
                    VISION APPLICATIONS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-light mb-6 dark:text-white"
                >
                    Powerful{" "}
                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                        AI Vision Applications
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto mb-12"
                >
                    Production-ready computer vision applications built for modern manufacturing.
                </motion.p>
            </section>
            {/* Hero Stats */}
            <section className="max-w-7xl mx-auto mb-28">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {[
                        { value: "99%+", label: "Detection Accuracy" },
                        { value: "2×", label: "Inspection Efficiency" },
                        { value: "70%", label: "Error Reduction" },
                        { value: "<2 weeks", label: "Deployment Time" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ type: "spring", stiffness: 300, }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}   >
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>



            {/* Applications */}
            <section className="max-w-7xl mx-auto">
                <div className="grid gap-28">
                    {applications.map((app, index) => (
                        <motion.div
                            key={app.id}
                            id={app.id}
                            className={`scroll-mt-28 flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            {/* Image */}
                            <motion.div
                                className="md:w-1/2 relative"

                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 -z-10" />
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="rounded-3xl shadow-2xl w-full max-h-96 object-cover border border-gray-200 dark:border-gray-700"
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="md:w-1/2">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-medium dark:text-white">
                                        {app.title}
                                    </h3>
                                </div>

                                <p className="text-blue-600 dark:text-blue-400 mb-3">
                                    {app.subtitle}
                                </p>

                                <p className="text-xl text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
                                    {app.description}
                                </p>

                                <div className="mb-8 inline-block px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                                    <p className="text-blue-600 dark:text-blue-300 font-medium">
                                        {app.stats}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {app.features.map((f, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                                            <span className="text-lg text-gray-700 dark:text-gray-200">
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={`/applications/${detailSlugMap[app.id] || app.id}`}
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:opacity-80"
                                >
                                    Read more
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* CTA Section */}
            <section className="max-w-7xl mx-auto mt-32">
                <motion.div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-3xl p-12 text-center text-white"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-medium mb-4">
                        Ready to build vision applications without code?
                    </h2>

                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Explore our no-code AI vision platform or reach out to discuss your
                        specific application requirements.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        {/* No-Code Platform */}
                        <motion.a
                            href="/no-code-platform"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium flex items-center justify-center shadow-lg"
                        >
                            Explore No-Code Platform
                        </motion.a>

                        {/* Contact Us */}
                        <motion.a
                            href="mailto:sales@oramasolutions.com?subject=Vision%20Application%20Enquiry"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/60 px-8 py-4 rounded-xl font-medium flex items-center justify-center hover:bg-white/10 transition"
                        >
                            Contact Us for Enquiry
                        </motion.a>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default Applications;
