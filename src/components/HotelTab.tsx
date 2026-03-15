import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarCheck, Key, Users, BedDouble, X, Activity, BarChart3 } from 'lucide-react';

const features = [
  { id: 'checkin', title: 'Express Check-In/Out', description: 'Streamline guest arrivals and departures with our digital kiosk and mobile check-in solutions.', icon: Key, gradient: 'from-emerald-500 to-teal-600' },
  { id: 'booking', title: 'Advance Room Bookings', description: 'Powerful reservation system with real-time availability, dynamic pricing, and channel manager integration.', icon: CalendarCheck, gradient: 'from-blue-500 to-indigo-600' },
  { id: 'staff', title: 'Staff Management', description: 'Manage housekeeping, maintenance, and front desk shifts. Track performance and assign tasks dynamically.', icon: Users, gradient: 'from-purple-500 to-fuchsia-600' },
  { id: 'inventory', title: 'Room Inventory', description: 'Visual dashboard of all rooms, their current status (clean, dirty, out of order), and upcoming reservations.', icon: BedDouble, gradient: 'from-orange-500 to-red-600' },
];

const staffMembers = [
  { id: 1, name: 'Sarah Jenkins', role: 'Front Desk Manager', image: 'https://picsum.photos/seed/sarah/200/200' },
  { id: 2, name: 'Michael Chen', role: 'Head of Housekeeping', image: 'https://picsum.photos/seed/michael/200/200' },
  { id: 3, name: 'Elena Rodriguez', role: 'Concierge', image: 'https://picsum.photos/seed/elena/200/200' },
  { id: 4, name: 'David Kim', role: 'Maintenance Supervisor', image: 'https://picsum.photos/seed/david/200/200' },
];

function HotelDemoDashboard({ featureId }: { featureId: string }) {
  if (featureId === 'checkin') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Expected Arrivals</p>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Checked In</p>
            <p className="text-3xl font-bold text-emerald-600">8</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Pending Departures</p>
            <p className="text-3xl font-bold text-amber-500">3</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Live Front Desk Log</h4>
            <button className="text-sm bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-medium">New Check-in</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="p-4 font-medium">Guest Name</th>
                  <th className="p-4 font-medium">Room</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Time</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Michael Scott', room: '302', status: 'Checked In', time: '14:30', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Jim Halpert', room: '405', status: 'Pending', time: 'ETA 16:00', color: 'bg-amber-100 text-amber-700' },
                  { name: 'Pam Beesly', room: '210', status: 'Checked Out', time: '10:15', color: 'bg-slate-100 text-slate-700' },
                ].map((guest, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{guest.name}</td>
                    <td className="p-4 text-slate-600">{guest.room}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${guest.color}`}>
                        {guest.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-sm">{guest.time}</td>
                    <td className="p-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default function HotelTab() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://picsum.photos/seed/hotel/1920/1080" alt="Hotel Lobby" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Next-Gen Hotel <br /> Property Management
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Elevate guest experiences and optimize operations with our comprehensive hospitality suite.
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
            Explore Features
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to run a modern hotel efficiently.</p>
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

      {/* Staff Management Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Staff Management</h2>
              <p className="text-slate-600">Keep track of your team with visual profiles and shift assignments.</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              View All Staff
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={staff.image} alt={staff.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg">{staff.name}</h4>
                  <p className="text-slate-300 text-sm">{staff.role}</p>
                </div>
              </div>
            ))}
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
                    <p className="text-white/80 text-sm">Interactive Dashboard Preview</p>
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
                <HotelDemoDashboard featureId={selectedFeature.id} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
