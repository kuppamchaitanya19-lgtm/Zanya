import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, PhoneCall, PieChart, Target, Activity, BarChart3, X } from 'lucide-react';

const features = [
  { id: 'leads', title: 'Lead Management', description: 'Capture, track, and convert leads efficiently with automated workflows.', icon: Target, gradient: 'from-orange-500 to-red-500' },
  { id: 'contacts', title: 'Contact Directory', description: 'Centralized database for all your customer interactions and history.', icon: Users, gradient: 'from-blue-500 to-indigo-500' },
  { id: 'communication', title: 'Communication Hub', description: 'Integrated email, SMS, and call tracking for seamless client engagement.', icon: PhoneCall, gradient: 'from-emerald-500 to-teal-500' },
  { id: 'analytics', title: 'Sales Analytics', description: 'Real-time dashboards and reports to track your sales performance.', icon: PieChart, gradient: 'from-purple-500 to-pink-500' },
];

function CrmDemoDashboard({ featureId }: { featureId: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <BarChart3 className="w-16 h-16 text-slate-300 mb-4" />
      <h4 className="text-2xl font-bold text-slate-800 mb-2">{featureId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Dashboard</h4>
      <p className="text-slate-500 max-w-md">
        This is a simulated dashboard view for the CRM module. In the live application, this area contains real-time charts, data tables, and management controls.
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

export default function CrmTab() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#fff7ed] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-1.5 mb-8 border border-orange-200">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Intelligent CRM Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Build Better <br /> Customer Relationships
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Empower your sales and support teams with a unified platform to manage leads, engage customers, and drive growth.
            </p>
            
            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-xl">
              Explore CRM
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-red-100 rounded-full blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://picsum.photos/seed/crm/800/600" 
              alt="CRM Dashboard" 
              className="relative z-10 rounded-3xl shadow-2xl border-4 border-white transform rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">CRM Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to manage your customer lifecycle.</p>
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
                        <span>View Dashboard</span>
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
                <CrmDemoDashboard featureId={selectedFeature.id} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
