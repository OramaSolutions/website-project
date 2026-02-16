// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function LoadingPage() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="flex flex-col items-center space-y-8">
                {/* Animated Logo Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ 
                        scale: [0.9, 1.05, 1],
                        opacity: 1,
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    className="p-4 rounded-2xl bg-gradient-to-tr from-blue-800 to-indigo-900 shadow-lg shadow-blue-500/20"
                >
                    {/* Replace with your actual logo image */}
                    <motion.img
                        src="/logo-sq.png" // Replace with your logo path
                        alt="Logo"
                        className="h-20 w-20 object-contain"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.9, 1, 0.9]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.div>

                {/* Loading Text with Dots Animation */}
                <div className="flex flex-col items-center space-y-4">
                    <motion.h2 
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Loading
                    </motion.h2>
                    
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-2 w-2 rounded-full bg-blue-400"
                                animate={{
                                    y: [0, -5, 0],
                                    opacity: [0.4, 1, 0.4]
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <motion.div 
                    className="h-1.5 w-64 rounded-full bg-gray-700 overflow-hidden mt-6"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 256 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}