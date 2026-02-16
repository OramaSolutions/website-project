import React, { useState } from "react";
import { X } from "lucide-react";

const EnquiryFormModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    country: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", form);
    onClose?.();
  };

  return (
    <div className="w-full">
      <div className="relative p-4 md:p-6 lg:p-8 max-h-[85vh] overflow-y-auto md:max-h-none md:overflow-visible">
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
                w-full rounded-lg border border-gray-300
                px-3 py-2 text-sm bg-white
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                outline-none
              "
            >
              <option value="">Select</option>
              <option value="assembly">Assembly Inspection AI</option>
              <option value="cosmetic">Cosmetic Inspection AI</option>
              <option value="dimensioning">Dimensioning AI</option>
              <option value="label">Label Inspection AI</option>
              <option value="general">General Enquiry</option>
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
                w-full rounded-lg border border-gray-300
                px-3 py-2 text-sm resize-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                outline-none
              "
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 xl:col-span-3 flex justify-end pt-2">
            <button
              type="submit"
              className="
                w-full md:w-auto
                rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600
                px-6 py-2.5 text-sm font-medium text-white
                shadow-md hover:shadow-lg transition
              "
            >
              Submit Enquiry
            </button>
          </div>
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
        w-full rounded-lg border border-gray-300
        px-3 py-2 text-sm bg-white
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
        outline-none
      "
    />
  </div>
);

export default EnquiryFormModal;
