const certifications = [
  {
    title: "ISO 20000-1",
    desc: "IT Service Management System",
    logo: "/images/certificates/iso-20000.png",
  },
  {
    title: "ISO 27001",
    desc: "Information Security Management",
    logo: "/images/certificates/iso-27001.png",
  },
  {
    title: "OHSAS 18001",
    desc: "Occupational Health & Safety",
    logo: "/images/certificates/ohsas.png",
  },
];

const Certificates = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4 ">
            Certifications & Compliance
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our systems are built and operated in compliance with globally
            recognized standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
                flex flex-col items-center text-center
                rounded-2xl border border-gray-200 dark:border-gray-800
                p-8 bg-white dark:bg-gray-900
                shadow-sm hover:shadow-md transition
              "
            >
              <img
                src={cert.logo}
                alt={cert.title}
                className="h-20 object-contain mb-6"
                loading="lazy"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
