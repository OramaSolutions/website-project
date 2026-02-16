import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Volume2,
  Waves,
  AlertCircle,
  CheckCircle,
  Play,
  Pause,
  TrendingUp,
  RotateCw,
  FileAudio
} from "lucide-react";

const SoundTab = () => {
  const [status, setStatus] = useState("idle"); // 'idle', 'analyzing', 'ok', 'ng', 'playing'
  const [selectedAudio, setSelectedAudio] = useState(null); // 'ok', 'ng'

  const [audioProgress, setAudioProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Audio files
  const okAudioFile = "/audios/audio_OK.wav";
  const ngAudioFile = "/audios/audio_NG.wav";

  const startProgressAnimation = () => {
    clearInterval(progressIntervalRef.current);

    if (audioRef.current) {
      // Track actual audio progress instead of simulated
      const updateProgress = () => {
        if (audioRef.current.duration) {
          const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setAudioProgress(progress);
        }
      };

      progressIntervalRef.current = setInterval(updateProgress, 100);
    }
  };

  const handleAudioSelect = (type) => {
    setSelectedAudio(type);
    setStatus("idle");
    setAudioProgress(0);
    setIsPlaying(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleAnalyze = () => {
    if (!selectedAudio) return;

    setStatus("analyzing");

    setAudioProgress(0);

    if (audioRef.current) {
      audioRef.current.src = selectedAudio === "ok" ? okAudioFile : ngAudioFile;
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      setIsPlaying(true);

      // Track actual audio progress
      const updateProgress = () => {
        if (audioRef.current.duration) {
          const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setAudioProgress(progress);
        }
      };

      // Update progress every 100ms
      progressIntervalRef.current = setInterval(updateProgress, 100);

      // Listen for audio end
      audioRef.current.onended = () => {
        clearInterval(progressIntervalRef.current);
        setStatus(selectedAudio); // 'ok' or 'ng'

        setIsPlaying(false);
        setAudioProgress(100);

        // Auto reset after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setAudioProgress(0);
        }, 5000);
      };
    }
  };

  const handlePlayAudio = () => {
    if (audioRef.current && selectedAudio) {
      if (isPlaying) {
        audioRef.current.pause();
        clearInterval(progressIntervalRef.current);
      } else {
        // If audio finished, reset it
        if (audioRef.current.currentTime >= audioRef.current.duration) {
          audioRef.current.currentTime = 0;
          setAudioProgress(0);
        }
        audioRef.current.play();
        startProgressAnimation();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const frequencyBands = [20, 40, 60, 80, 100, 120, 140, 160];

  return (
    <div className="space-y-6">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        className="hidden"
        preload="auto"
        onEnded={() => {
          setIsPlaying(false);
          clearInterval(progressIntervalRef.current);
          setAudioProgress(100);
        }}
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
            Audio Anomaly Detection
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Select an audio sample to analyze OK/NG sounds
          </p>
        </div>
      </div>

      {/* Audio Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* OK Audio Card */}
        <motion.div
          className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
            ${selectedAudio === "ok"
              ? 'border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/10'
              : 'border-gray-300 dark:border-gray-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:bg-blue-600/5 dark:hover:bg-blue-400/5'
            }`}
          onClick={() => handleAudioSelect("ok")}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${selectedAudio === "ok"
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-200 dark:bg-gray-800'
                }`}>
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold dark:text-white">OK Audio Sample</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Normal operating sound</p>
              </div>
            </div>
            {selectedAudio === "ok" && (
              <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            )}
          </div>


        </motion.div>

        {/* NG Audio Card */}
        <motion.div
          className={`p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer
            ${selectedAudio === "ng"
              ? 'border-blue-600 dark:border-blue-400 bg-blue-600/10 dark:bg-blue-400/10'
              : 'border-gray-300 dark:border-gray-700 hover:border-blue-600/50 dark:hover:border-blue-400/50 hover:bg-blue-600/5 dark:hover:bg-blue-400/5'
            }`}
          onClick={() => handleAudioSelect("ng")}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${selectedAudio === "ng"
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-200 dark:bg-gray-800'
                }`}>
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold dark:text-white">NG Audio Sample</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Anomaly sound pattern</p>
              </div>
            </div>
            {selectedAudio === "ng" && (
              <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            )}
          </div>


        </motion.div>
      </div>

      {/* Audio Analysis Display */}
      <div className="bg-gray-900 rounded-2xl p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <div className="p-2 rounded-lg bg-blue-600/20 dark:bg-blue-400/20">
              <Waves className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="font-semibold text-white">Audio Analysis</div>
              <div className="text-sm text-gray-400">
                {selectedAudio
                  ? `Selected: ${selectedAudio === "ok" ? "OK Sample" : "NG Sample"}`
                  : "Select an audio sample above"
                }
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {selectedAudio && (status === "ok" || status === "ng") && (
              <button
                onClick={handlePlayAudio}
                className="p-3 rounded-full bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white" />
                )}
              </button>
            )}

            {/* {(status !== "idle" || selectedAudio) && (
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 rounded-xl font-semibold flex items-center gap-2 
                  bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white shadow-lg"
              >
                <RotateCw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </motion.button>
            )} */}
          </div>
        </div>

        {/* Audio Playback Progress */}
        {selectedAudio && (
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Audio Playback</span>
              <span>{audioProgress.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 dark:bg-blue-400"
                initial={{ width: "0%" }}
                animate={{ width: `${audioProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        )}

        {/* Status Display */}
        <div className="mb-6">
          {/* <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Analysis Status</span>
            <span className={`text-sm font-semibold ${
              status === "idle" ? "text-gray-400" :
              status === "analyzing" ? "text-amber-400" :
              status === "ok" ? "text-green-400" : "text-red-400"
            }`}>
              {!selectedAudio ? "Select audio sample" :
               status === "idle" ? "Ready to analyze" :
               status === "analyzing" ? "Analyzing..." :
               status === "ok" ? "OK - Normal Sound" : "NG - Anomaly Detected"}
            </span>
          </div> */}

          {/* Analysis Progress Bar */}
          {/* <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
            <motion.div
              className={`h-full ${
                status === "analyzing" ? "bg-gradient-to-r from-amber-500 to-yellow-500" :
                status === "ok" ? "bg-gradient-to-r from-green-500 to-emerald-500" :
                status === "ng" ? "bg-gradient-to-r from-red-500 to-pink-500" :
                "bg-gradient-to-r from-gray-500 to-gray-600"
              }`}
              initial={{ width: "0%" }}
              animate={{ width: `${detectionConfidence}%` }}
              transition={{ duration: 0.3 }}
            />
          </div> */}

          {/* <div className="text-xs text-gray-400 flex justify-between">
            <span>Confidence:</span>
            <span className="font-semibold">{detectionConfidence.toFixed(0)}%</span>
          </div> */}
        </div>

        {/* Frequency Visualization */}
        <div className="h-24 md:h-24 mb-6 relative">
          <div className="absolute inset-0 flex items-end justify-between px-2 md:px-4">
            {frequencyBands.map((freq, i) => (
              <motion.div
                key={freq}
                className={`w-4 md:w-8 rounded-t-lg ${status === "idle"
                  ? "bg-gray-500"
                  : "bg-blue-600 dark:bg-blue-400"
                  }`}
                initial={{ height: "20%" }}
                animate={{
                  height: status !== "idle" && selectedAudio
                    ? `${20 + Math.sin(Date.now() / 500 + i) * 40 * (status === "analyzing" ? 1 : 0.5)}%`
                    : "20%"
                }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.7 + (i * 0.04) }}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        {selectedAudio && status === "idle" && (
          <div className="mb-6">
            <motion.button
              onClick={handleAnalyze}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 
                bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white shadow-lg"
            >
              <Volume2 className="w-5 h-5" />
              <span>Analyze {selectedAudio === "ok" ? "OK" : "NG"} Audio</span>
            </motion.button>
          </div>
        )}

        {/* Results Panel */}
        <div className="space-y-4">
          {status === "ok" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-600/20 dark:bg-blue-400/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-bold text-white">Sound OK ✓</div>
                    <div className="text-sm text-gray-300">Normal operating sound detected</div>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  98%
                </div>
              </div>

            </motion.div>
          )}

          {status === "ng" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-600/20 dark:bg-blue-400/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 rounded-r-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-bold text-white">Anomaly Detected!</div>
                    <div className="text-sm text-gray-300">Abnormal sound pattern identified</div>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  92%
                </div>
              </div>

            </motion.div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <motion.div
          className="bg-blue-600/10 dark:bg-blue-400/10 p-3 md:p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Detection Accuracy</div>
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                99.7%
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-600/10 dark:bg-blue-400/10 p-3 md:p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Samples Analyzed</div>
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                {(24500 + Math.floor(Math.random() * 1000)).toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoundTab;
