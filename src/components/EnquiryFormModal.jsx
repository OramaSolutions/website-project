import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { submitEnquiryForm } from "../api/enquiryForm";
import SuccessToast from "./SuccessToast";

const EnquiryFormModal = ({ onClose }) => {
  const initialFormState = {
    name: "",
    email: "",
    company: "",
    designation: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    enquiryType: "",
    message: "",
  };

  const [form, setForm] = useState({
    ...initialFormState,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showSuccessToast = () => {
    setSuccessMessage(
      "Your enquiry has been submitted successfully. Our team will contact you shortly."
    );

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitEnquiryForm(form);
      setForm({ ...initialFormState });
      showSuccessToast();
      onClose?.();
    } catch (error) {
      setSubmitError(error.message || "Failed to submit enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {successMessage && (
        <SuccessToast
          message={successMessage}
          onClose={() => setSuccessMessage("")}
        />
      )}
      <div className="relative p-4 md:p-6 lg:p-8 max-h-[85vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Header */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Request a Demo / Enquiry
        </h2>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
          Tell us about your use case and our team will get back to you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-3 md:gap-4
          "
        >
          <Input
            label="Full Name*"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Work Email*"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Designation*"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            required
          />

          <Input
            label="Company Name*"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
          />

          <Input
            label="Country*"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />

          <Input
            label="State"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />

          <Input
            label="City*"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone Number*"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {/* Enquiry Type */}
          <div className="md:col-span-2 xl:col-span-1">
            <label className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
              Enquiry Type*
            </label>
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              required
              className="
                w-full rounded-lg border border-gray-300 dark:border-gray-600
                px-3 py-2 text-sm bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
                outline-none
              "
            >
              <option value="" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">Select</option>
              <option value="assembly" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">Assembly Inspection AI</option>
              <option value="cosmetic" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">Cosmetic Inspection AI</option>
              <option value="dimensioning" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">Dimensioning AI</option>
              <option value="label" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">Label Inspection AI</option>
              <option value="general" className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-800">General Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2 xl:col-span-3">
            <label className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={2}
              placeholder="Briefly describe your requirement..."
              className="
                w-full rounded-lg border border-gray-300 dark:border-gray-600
                px-3 py-2 text-sm resize-none bg-white dark:bg-gray-800
                text-gray-900 dark:text-gray-100
                placeholder-gray-400 dark:placeholder-gray-500
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
                outline-none
              "
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 xl:col-span-3 flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full md:w-auto
                rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600
                px-6 py-2.5 text-sm font-medium text-white
                shadow-md hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>

          {submitError && (
            <p className="md:col-span-2 xl:col-span-3 text-sm text-red-600">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

/* ---------- Reusable Input ---------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-xs font-medium mb-1 text-gray-700 dark:text-gray-300">
      {label}
    </label>
    <input
      {...props}
      className="
        w-full rounded-lg border border-gray-300 dark:border-gray-600
        px-3 py-2 text-sm bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        placeholder-gray-400 dark:placeholder-gray-500
        focus:border-blue-500 dark:focus:border-blue-400
        focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
        outline-none
      "
    />
  </div>
);

export default EnquiryFormModal;
