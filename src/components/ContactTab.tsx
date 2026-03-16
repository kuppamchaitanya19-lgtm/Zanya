import React, { useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactTab() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const location = formData.get('location') as string;
    const service = formData.get('service') as string;
    const remarks = formData.get('remarks') as string;
    
    const subject = encodeURIComponent(`New Demo Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nMobile: ${mobile}\nLocation: ${location}\nInterested Service: ${service}\nRemarks: ${remarks}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      window.location.href = `mailto:cloudbooksit@gmail.com?subject=${subject}&body=${body}`;
      
      formRef.current?.reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen py-8 bg-[#f0ebf8] font-sans relative">
      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white px-6 py-4 rounded shadow-2xl flex items-center space-x-3"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">Response submitted.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          
          {/* Header Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="h-2.5 bg-[#673ab7] w-full"></div>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3">Request a Demo / Contact Us</h1>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                Please fill out the form below to request a demo or get in touch with our sales team. We will contact you shortly.
              </p>
              <div className="pt-4 border-t border-gray-200 text-sm text-red-600 font-medium">
                * Indicates required question
              </div>
            </div>
          </div>

          {/* Name Question */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <span className="text-base text-gray-900">Full Name</span>
              <span className="text-red-600 ml-1">*</span>
            </div>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your answer"
              className="w-full md:w-1/2 border-b border-gray-300 focus:border-[#673ab7] focus:border-b-2 outline-none py-1 transition-colors bg-transparent text-gray-800"
            />
          </div>

          {/* Mobile Question */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <span className="text-base text-gray-900">Mobile Number</span>
              <span className="text-red-600 ml-1">*</span>
            </div>
            <input 
              type="tel" 
              name="mobile"
              required
              placeholder="Your answer"
              className="w-full md:w-1/2 border-b border-gray-300 focus:border-[#673ab7] focus:border-b-2 outline-none py-1 transition-colors bg-transparent text-gray-800"
            />
          </div>

          {/* Location Question */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <span className="text-base text-gray-900">Location (City, State)</span>
              <span className="text-red-600 ml-1">*</span>
            </div>
            <input 
              type="text" 
              name="location"
              required
              placeholder="Your answer"
              className="w-full md:w-1/2 border-b border-gray-300 focus:border-[#673ab7] focus:border-b-2 outline-none py-1 transition-colors bg-transparent text-gray-800"
            />
          </div>

          {/* Service Radio Question */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <span className="text-base text-gray-900">Which service are you interested in?</span>
              <span className="text-red-600 ml-1">*</span>
            </div>
            <div className="space-y-4">
              {['Education ERP', 'Hotel Management', 'Salon Services', 'CRM Solutions', 'Other'].map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input 
                      type="radio" 
                      name="service" 
                      value={opt} 
                      required
                      className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-[#673ab7] transition-colors cursor-pointer"
                    />
                    <div className="absolute w-2.5 h-2.5 bg-[#673ab7] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                  <span className="text-gray-800">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Remarks Question */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="mb-6">
              <span className="text-base text-gray-900">Type of Business / Remarks</span>
              <span className="text-red-600 ml-1">*</span>
            </div>
            <textarea 
              name="remarks"
              required
              rows={1}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 focus:border-[#673ab7] focus:border-b-2 outline-none py-1 transition-colors bg-transparent text-gray-800 resize-none min-h-[32px]"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-2 pb-8">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`bg-[#673ab7] hover:bg-[#5e35b1] text-white font-medium py-2.5 px-6 rounded transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button 
              type="button" 
              onClick={() => formRef.current?.reset()}
              className="text-[#673ab7] hover:bg-purple-50 font-medium py-2 px-4 rounded transition-colors"
            >
              Clear form
            </button>
          </div>
          
          <div className="text-center text-xs text-gray-500 pb-8">
            Never submit passwords through Google Forms.
          </div>
        </form>
      </div>
    </div>
  );
}
