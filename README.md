# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Applications
 ├─ Defect Detection
 │   ├─ Surface Defects
 │   ├─ Cosmetic Inspection
 │   ├─ Crack / Dent Detection
 │
 ├─ Assembly Verification
 │   ├─ Part Presence Check
 │   ├─ Sequence Verification
 │   ├─ Missing / Wrong Part
 │
 ├─ Counting & Measurement
 │   ├─ Object Counting
 │   ├─ Dimensioning
 │   ├─ Sorting & Grading
 │
 ├─ OCR & Barcode
 │   ├─ Barcode / QR Reading
 │   ├─ Label Inspection
 │   ├─ Text Extraction (OCR)
 │
 └─ Classification
     ├─ Product Classification
     ├─ Quality Grading
     ├─ Category Identification


Industries
 ├─ Automotive (2W / 4W)
 ├─ Pharma & Medical
 ├─ Food & Beverage
 ├─ Consumer Goods
 ├─ PCBs & Electronics
 └─ Battery & EV



     <div className="overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-gray-100">
                            From Dataset to Deployment
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            A streamlined workflow that takes you from data to production in hours, not weeks
                        </p>
                    </div>

                    {/* Flow Selector */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {[
                            { key: "classification", label: "Image Classification" },
                            { key: "objectDetection", label: "Object Detection" },
                            { key: "defectDetection", label: "Defect Detection" }
                        ].map(({ key, label }) => (
                            <button
                                key={key}
                                onClick={() => setActiveFlow(key)}
                                className={`px-6 py-3.5 rounded-full text-lg font-medium border-2 transition-all duration-300 ${activeFlow === key
                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent shadow-lg"
                                    : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Process Steps with connecting line */}
                    <div className="relative ">
                        {/* Horizontal line for first row on desktop */}
                        <div className="hidden md:block absolute top-[7rem] left-0 right-0 h-1 bg-blue-400 dark:bg-blue-600 z-0 transform -translate-y-1/2" style={{ height: '4px' }}></div>

                        {/* Vertical connector between rows on desktop */}
                        {/* <div className="hidden lg:block absolute right-0 top-1/4 w-1 bg-gradient-to-b from-blue-400 to-blue-400 dark:from-blue-600 dark:to-blue-600 z-0" style={{ height: 'calc(50% - 1rem)', transform: 'translateY(50%)' }}></div> */}

                        {/* Horizontal line for second row on desktop */}
                        <div className="hidden md:block absolute bottom-[7rem] left-0 right-0 h-1 bg-blue-400 dark:bg-blue-600 z-0 transform translate-y-1/2" style={{ height: '4px' }}></div>

                        {/* Connecting line for tablet and mobile - spans entire grid height */}
                        <div className="block md:hidden absolute top-0 bottom-0 left-1/2 w-1 40 bg-blue-400 dark:bg-blue-600 z-0 transform -translate-x-1/2"></div>

                        <div className={`grid md:grid-cols-4 gap-8 relative z-10 w-full ${processSteps[activeFlow].length === 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                            {processSteps[activeFlow].map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative h-[14rem] "
                                    >
                                        {/* Arrow indicator for desktop */}
                                        {idx < processSteps[activeFlow].length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                                                <div className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-600">
                                                    {/* <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg> */}
                                                </div>
                                            </div>
                                        )}
                                        {/* Step Card */}
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-3 transition-all duration-300 h-full relative z-20 border border-gray-100 dark:border-gray-600">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30 text-blue-600 dark:text-blue-400 text-lg font-bold border-4 border-white dark:border-gray-900/50 shadow-md">
                                                    {idx + 1}
                                                </div>
                                                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                            </div>

                                            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>