import {
  ShieldCheck,
  Cpu,
  Zap,
  Rocket,
  Timer,
  TrendingDown,
} from "lucide-react";

const usps = [
  {
    icon: ShieldCheck,
    title: "0–4 PPM Accuracy",
    desc: "Industry-leading defect detection (parts per million).",
  },
  {
    icon: Rocket,
    title: "Deployment in Days",
    desc: "Rapid implementation with minimal production disruption.",
  },
  {
    icon: TrendingDown,
    title: "Fast ROI",
    desc: "Lower costs and quicker return on investment.",
  },
  {
    icon: Timer,
    title: "Millisecond Response",
    desc: "Ultra-low latency decision making at the edge.",
  },
  {
    icon: Cpu,
    title: "Reduced COPQ",
    desc: "Minimize Cost of Poor Quality across operations.",
  },
  {
    icon: Zap,
    title: "High-Performance AI",
    desc: "Optimized for real-time industrial environments.",
  },
];

const USPs = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4 ">
            Why Choose Us
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Measurable performance advantages that deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="
                  rounded-2xl p-6
                  border border-gray-200 dark:border-gray-800
                  bg-white dark:bg-gray-900
                  hover:shadow-lg transition
                "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {usp.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPs;
