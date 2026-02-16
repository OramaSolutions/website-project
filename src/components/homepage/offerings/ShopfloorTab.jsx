import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Activity,
  Zap,
  Users,
  Clock,
  Battery,
  Wifi,
  Shield
} from "lucide-react";

const ShopfloorTab = () => {
  const [live, setLive] = useState(false);
  const [efficiency, setEfficiency] = useState(87);

  // const machines = [
  //   { id: 1, name: "CNC Router 01", status: "active", output: 95, temp: 42 },
  //   { id: 2, name: "3D Printer A", status: "active", output: 88, temp: 38 },
  //   { id: 3, name: "Assembly Line", status: live ? "active" : "idle", output: live ? 92 : 0, temp: 35 },
  //   { id: 4, name: "Packaging Unit", status: "warning", output: 75, temp: 45 },
  // ];

  const handleGoLive = () => {
    setLive(true);
    const interval = setInterval(() => {
      setEfficiency(prev => Math.min(99, prev + 0.5));
    }, 100);

    setTimeout(() => clearInterval(interval), 2000);

    // Auto reset after 10 seconds
    setTimeout(() => {
      setLive(false);
      setEfficiency(87);
    }, 10000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Smart Shopfloor Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time monitoring and optimization of production lines
          </p>
        </div>
        <motion.button
          onClick={handleGoLive}
          disabled={live}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-2 py-1 md:px-6 md:py-3 text-md md:text-lg rounded-xl font-semibold flex items-center gap-2 
            ${live
              ? 'bg-blue-600 dark:bg-blue-400 cursor-default'
              : 'bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500'
            } text-white shadow-lg`}
        >
          <Zap className={`w-4 h-4 ${live && 'animate-pulse'}`} />
          {live ? "LIVE MONITORING" : "GO LIVE"}
        </motion.button>
      </div>

      {/* Status Cards */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {machines.map((machine) => (
          <motion.div
            key={machine.id}
            whileHover={{ y: -5 }}
            className={`p-4 rounded-xl border-2 transition-all duration-300
              ${machine.status === 'active'
                ? 'border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-600/10'
                : machine.status === 'warning'
                  ? 'border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10'
                  : 'border-gray-500/20 bg-gradient-to-br from-gray-500/10 to-gray-600/10'
              }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-semibold dark:text-white">{machine.name}</div>
                <div className={`text-sm ${machine.status === 'active'
                  ? 'text-blue-400'
                  : machine.status === 'warning'
                    ? 'text-orange-400'
                    : 'text-gray-400'
                  }`}>
                  {machine.status.toUpperCase()}
                </div>
              </div>
              <div className={`p-2 rounded-lg ${machine.status === 'active'
                ? 'bg-blue-500/20'
                : machine.status === 'warning'
                  ? 'bg-orange-500/20'
                  : 'bg-gray-500/20'
                }`}>
                <Activity className={`w-4 h-4 ${machine.status === 'active'
                  ? 'text-blue-400'
                  : machine.status === 'warning'
                    ? 'text-orange-400'
                    : 'text-gray-400'
                  }`} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Output</span>
                <span className="font-semibold dark:text-white">{machine.output}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${machine.output}%` }}
                  transition={{ duration: 1 }}
                  style={{
                    background: machine.status === 'active'
                      ? 'linear-gradient(to right, #3b82f6, #06b6d4)'
                      : machine.status === 'warning'
                        ? 'linear-gradient(to right, #f97316, #f59e0b)'
                        : 'linear-gradient(to right, #6b7280, #9ca3af)'
                  }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Temp</span>
                <span className="font-semibold dark:text-white">{machine.temp}°C</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Feed */}
        <div className={`${live ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${live ? 'bg-green-500' : 'bg-gray-500'}`}
                    animate={live ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {live && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-green-500"
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
                <span className="font-semibold text-white">Live Production Feed</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Wifi className="w-4 h-4" />
                  <span>Connected</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
            <div className="p-1">
              <motion.img
                src={live ? "/images/offerings/shop_online.png" : "/images/offerings/shop_offline.png"}
                alt="shopfloor dashboard"
                className="w-full max-h-[400px] object-cover rounded-lg"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: live ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Efficiency Stats */}
        {live && <div className="space-y-4">
          <motion.div
            className="bg-blue-600/10 dark:bg-blue-400/10 p-6 rounded-2xl"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Overall Efficiency</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {efficiency.toFixed(1)}%
                </div>
              </div>
              <div className="p-3 rounded-full bg-blue-600/20 dark:bg-blue-400/20">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 dark:bg-blue-400"
                initial={{ width: "87%" }}
                animate={{ width: `${efficiency}%` }}
                transition={{ duration: 2 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600/10 dark:bg-blue-400/10 p-6 rounded-2xl"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Downtime Today</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  24min
                </div>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600/10 dark:bg-blue-400/10 p-6 rounded-2xl"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Uptime Today</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  7h 42m
                </div>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600/10 dark:bg-blue-400/10 p-6 rounded-2xl"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Power Consumption</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  3.2kW
                </div>
              </div>
              <Battery className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
        </div>}

      </div>
    </div>
  );
};

export default ShopfloorTab;
