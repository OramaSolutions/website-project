import React, { useState } from "react";

const EnquiryForm = () => {
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

    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      enquiryType: "",
      message: "",
    });
  };

  return (
    <div className="w-full  max-w-3xl mx-auto ">
      <div className="
        rounded-2xl
        border border-gray-200 dark:border-gray-700
        bg-white/80 dark:bg-gray-900/70
        backdrop-blur-md
        shadow-lg dark:shadow-black/40
        p-6 md:p-10
      ">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Request a Demo / Enquiry
        </h2>
        

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Tell us about your use case and our team will get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Enquiry Type
            </label>
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              className="
                w-full rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800
                px-4 py-2.5
                text-gray-900 dark:text-gray-100
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
                outline-none
              "
            >
              <option value="">Select an option</option>
              <option value="assembly">Assembly Inspection AI</option>
              <option value="cosmetic">Cosmetic Inspection AI</option>
              <option value="dimensioning">Dimensioning AI</option>
              <option value="label">Label Inspection AI</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Briefly describe your requirement..."
              className="
                w-full rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800
                px-4 py-3
                text-gray-900 dark:text-gray-100
                placeholder-gray-400 dark:placeholder-gray-500
                focus:border-blue-500 dark:focus:border-blue-400
                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
                outline-none resize-none
              "
            />
          </div>

          {/* Submit */}
          <div className="w-full md:col-span-2  bg-white dark:bg-gray-900/70 pt-4 flex justify-end">

            <button
              type="submit"
              className="
                items-center gap-2
                rounded-lg
                bg-gradient-to-r from-blue-600 to-indigo-600
                dark:from-blue-500 dark:to-indigo-500
                px-6 py-3
                text-white font-medium
                shadow-md hover:shadow-lg
                transition
                w-full
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

/* Reusable Input Component */
const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="
          w-full rounded-lg
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          px-4 py-2.5
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:border-blue-500 dark:focus:border-blue-400
          focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/30
          outline-none
        "
      />
    </div>
  );
};

export default EnquiryForm;
