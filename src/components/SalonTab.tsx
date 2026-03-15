import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, Users, Package, X, CheckCircle2, CalendarClock, Activity, BarChart3, Scissors } from 'lucide-react';

const features = [
  { id: 'user-booking', title: 'Book Salon Seat', description: 'Client-facing portal to easily reserve a seat, select a service, and choose a preferred stylist.', icon: CalendarClock, gradient: 'from-pink-500 to-rose-600' },
  { id: 'salon-booking', title: 'Service Management', description: 'Admin dashboard to manage client bookings, approve requests, and schedule staff.', icon: CalendarDays, gradient: 'from-rose-500 to-orange-500' },
  { id: 'staff-mgmt', title: 'Staff Management', description: 'Manage stylist schedules, commissions, and performance metrics.', icon: Users, gradient: 'from-purple-500 to-indigo-600' },
  { id: 'inventory', title: 'Product Inventory', description: 'Track salon products, backbar usage, and retail sales effortlessly.', icon: Package, gradient: 'from-emerald-500 to-teal-600' },
];

function SalonDemoDashboard({ featureId }: { featureId: string }) {
  if (featureId === 'user-booking') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-8 text-white text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-2">Reserve Your Seat</h3>
          <p className="text-pink-100">Book your next appointment in seconds.</p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Select Service</label>
            <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none">
              <option>Premium Hair Styling - $85</option>
              <option>Luxury Spa Treatment - $120</option>
              <option>Bridal Makeup - $150</option>
              <option>Nail Art & Care - $45</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Date</label>
              <input type="date" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Time</label>
              <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none">
                <option>10:00 AM</option>
                <option>11:30 AM</option>
                <option>02:00 PM</option>
                <option>04:30 PM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Stylist (Optional)</label>
            <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-rose-500 outline-none">
              <option>No Preference</option>
              <option>Emma (Master Stylist)</option>
              <option>David (Color Specialist)</option>
              <option>Sarah (Nail Technician)</option>
            </select>
          </div>
          <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg active:scale-95 mt-4">
            Confirm Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <BarChart3 className="w-16 h-16 text-slate-300 mb-4" />
      <h4 className="text-2xl font-bold text-slate-800 mb-2">Dashboard View</h4>
      <p className="text-slate-500 max-w-md">
        This is a simulated dashboard view for this module. In the live application, this area contains real-time charts, data tables, and management controls.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-100 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SalonTab() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#fdf2f8] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 rounded-full px-4 py-1.5 mb-8 border border-pink-200">
              <Scissors className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Salon Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Elevate Your <br /> Salon Experience
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              From seamless client bookings to staff scheduling and inventory management, run your beauty business with elegance.
            </p>
            
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-xl">
              Start Free Trial
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-rose-100 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://picsum.photos/seed/salon/800/600" 
              alt="Salon Interior" 
              className="relative z-10 rounded-3xl shadow-2xl border-4 border-white transform -rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Salon Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to run a modern beauty salon efficiently.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  whileHover={{ y: -5 }}
                  className={`rounded-3xl p-8 shadow-lg cursor-pointer flex flex-col h-full bg-gradient-to-br ${feature.gradient} text-white relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/90 leading-relaxed mb-6">{feature.description}</p>
                      <button 
                        onClick={() => setSelectedFeature(feature)}
                        className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-xl text-sm font-bold transition-colors flex items-center space-x-2 shadow-sm"
                      >
                        <Activity className="w-4 h-4" />
                        <span>{feature.id === 'user-booking' ? 'View Booking Form' : 'View Dashboard'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className={`p-6 bg-gradient-to-r ${selectedFeature.gradient} text-white flex justify-between items-center shrink-0`}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <selectedFeature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedFeature.title}</h3>
                    <p className="text-white/80 text-sm">Interactive Preview</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedFeature(null)} 
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto bg-slate-50 flex-1">
                <SalonDemoDashboard featureId={selectedFeature.id} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
