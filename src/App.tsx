/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, GraduationCap, Scissors, Menu, X, Users, PhoneCall, DollarSign } from 'lucide-react';
import EducationTab from './components/EducationTab';
import HotelTab from './components/HotelTab';
import SalonTab from './components/SalonTab';
import CrmTab from './components/CrmTab';
import ContactTab from './components/ContactTab';
import PricingTab from './components/PricingTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('education');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const tabs = [
    { id: 'education', label: 'ERP Services', icon: GraduationCap },
    { id: 'crm', label: 'CRM Services', icon: Users },
    { id: 'hotel', label: 'Hotel Management', icon: Building2 },
    { id: 'salon', label: 'Salon Services', icon: Scissors },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'contact', label: 'Contact Us', icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center space-x-4">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Zanya Logo" 
                  className="h-16 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg transform -rotate-6 shrink-0">
                  <span className="text-white font-extrabold text-3xl italic">Z</span>
                </div>
              )}
              <div className="flex flex-col justify-center">
                {logoError && (
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none tracking-tight">
                    ZANYA
                  </span>
                )}
                <span className="text-xs text-slate-700 font-bold tracking-widest mt-1 uppercase">
                  SERVICES • STANDARDS • SAFETY
                </span>
                <span className="text-[10px] text-blue-600 font-medium italic mt-0.5">
                  Online Platform for your Business
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shadow-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 border border-slate-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-slate-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium ${
                        activeTab === tab.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'education' && <EducationTab setActiveTab={setActiveTab} />}
            {activeTab === 'crm' && <CrmTab setActiveTab={setActiveTab} />}
            {activeTab === 'hotel' && <HotelTab setActiveTab={setActiveTab} />}
            {activeTab === 'salon' && <SalonTab setActiveTab={setActiveTab} />}
            {activeTab === 'pricing' && <PricingTab setActiveTab={setActiveTab} />}
            {activeTab === 'contact' && <ContactTab />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
