// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Layers } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import applicationDetails from "../content/applicationDetails.json";

const ApplicationDetail = () => {
  const { applicationSlug } = useParams();
  const detail = applicationDetails[applicationSlug];

  if (!detail) return <Navigate to="/applications" replace />;

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 pt-28 px-4 md:px-8">
      <section className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
            INDUSTRIAL AI APPLICATION
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 dark:text-white">
            {detail.title}
          </h1>
          <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{detail.tagline}</p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {detail.description}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {detail.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 -z-10" />
            <img
              src={detail.image}
              alt={detail.title}
              className="rounded-3xl shadow-2xl w-full max-h-[420px] object-cover border border-gray-200 dark:border-gray-700"
            />
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 shadow-lg">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium dark:text-white">Core Capabilities</h2>
            </div>

            <ul className="space-y-4 mb-8">
              {detail.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-lg text-gray-700 dark:text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {detail.offerings.map((offering) => (
                <span
                  key={offering}
                  className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium"
                >
                  Offering: {offering}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-24 grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl md:text-3xl font-medium mb-5 dark:text-white">Deployment Workflow</h2>
          <ol className="space-y-4">
            {detail.workflow.map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl md:text-3xl font-medium mb-5 dark:text-white">Typical Use Cases</h2>
          <ul className="space-y-4">
            {detail.useCases.map((useCase) => (
              <li key={useCase} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Build and deploy this workflow with no-code AI
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Use our no-code platform to train, validate, and deploy production-ready models faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/no-code-platform"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium flex items-center justify-center shadow-lg"
            >
              Explore No-Code Platform
            </Link>
            <Link
              to="/applications"
              className="border border-white/70 px-8 py-4 rounded-xl font-medium flex items-center justify-center hover:bg-white/10 transition"
            >
              Back to Applications
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
         
        </motion.div>
      </section>
    </main>
  );
};

export default ApplicationDetail;
