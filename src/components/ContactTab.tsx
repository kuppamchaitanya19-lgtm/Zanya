import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactTab() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const location = formData.get('location') as string;
    const remarks = formData.get('remarks') as string;
    
    const subject = encodeURIComponent(`New Business Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nMobile: ${mobile}\nLocation: ${location}\nBusiness Type/Remarks: ${remarks}`);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open default mail client
      window.location.href = `mailto:cloudbooksit@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="w-full py-12 md:py-24 bg-slate-50 relative">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3"
          >
            <CheckCircle2 className="w-6 h-6" />
            <div>
              <p className="font-bold">Details Submitted Successfully!</p>
              <p className="text-emerald-100 text-sm">We will get in touch with you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left side info */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Fill the details we will get in touch with you shortly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-100" />
                  </div>
                  <span className="font-medium">+91 81797 57130</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-100" />
                  </div>
                  <span className="font-medium">cloudbooksit@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-100" />
                  </div>
                  <span className="font-medium">Chittoor, Andhra Pradesh</span>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-blue-200">
                Zanya - Services • Standards • Safety
              </p>
            </div>
          </div>
          
          {/* Right side form */}
          <div className="md:w-3/5 p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder="Your full name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mobile No</label>
                  <input 
                    name="mobile"
                    type="tel" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder="Your phone number" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                <input 
                  name="location"
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                  placeholder="City, State, or Zip" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Type of Business (Remarks)</label>
                <textarea 
                  name="remarks"
                  rows={4} 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none" 
                  placeholder="Tell us about your business and requirements..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 transform active:scale-[0.98] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Details'}</span>
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
