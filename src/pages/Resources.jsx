import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import resources from "../content/resources.json";

const { blogs, caseStudies } = resources;

const Resources = () => {
  return (
    <main className="bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100">
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Resources
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore practical blogs and real-world case studies on industrial automation,
            computer vision, Industry 4.0, and shop floor digitization.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            
            <h2 className="text-2xl md:text-3xl font-medium">Blogs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{blog.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{blog.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{blog.readTime}</span>
                    <Link
                      to={blog.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:opacity-80"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            
            <h2 className="text-2xl md:text-3xl font-medium">Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {item.industry}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.summary}</p>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-5">
                  Outcome: <span className="text-blue-600 dark:text-blue-400">{item.outcome}</span>
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.offerings?.map((offering) => (
                    <span
                      key={`${item.id}-${offering}`}
                      className="text-[11px] font-medium px-2 py-1 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300"
                    >
                      Offering: {offering}
                    </span>
                  ))}
                  {item.applications?.map((application) => (
                    <span
                      key={`${item.id}-${application}`}
                      className="text-[11px] font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      App: {application}
                    </span>
                  ))}
                </div>

                <Link
                  to={item.cta?.href || "/applications"}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:opacity-80"
                >
                  {item.cta?.label || "Explore"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
