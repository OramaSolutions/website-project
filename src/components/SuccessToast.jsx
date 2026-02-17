import React from "react";
import { CheckCircle2, X } from "lucide-react";

const SuccessToast = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 z-[100] w-[min(92vw,420px)] rounded-xl border border-emerald-200 dark:border-emerald-900 bg-white dark:bg-gray-900 shadow-xl">
      <div className="flex items-start gap-3 p-4">
        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
        <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SuccessToast;
