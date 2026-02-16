import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { ArrowUpRight } from "lucide-react";
import EnquiryForm from './EnquiryFormModal';
// import DemoBooking from "./DemoBooking";
const Contact = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full
        bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
        text-white font-medium text-sm transition-all duration-300 shadow-lg
        hover:shadow-xl hover:scale-105 active:scale-95"
            >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <ContactModal open={open} onClose={() => setOpen(false)} />
        </>
    )
}

export default Contact

const ContactModal = ({ open, onClose }) => {
    if (!open) return null;

    return createPortal(
        <>
            {/* Backdrop overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-[999]"
                onClick={onClose}
            />

            {/* Centered modal container */}
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden">
                    <EnquiryForm onClose={onClose} />
                </div>
            </div>
        </>,
        document.body
    );
};