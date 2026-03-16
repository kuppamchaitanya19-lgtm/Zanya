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
              <option>Men's Grooming & Fade - $45</option>
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
              <option>David (Men's Grooming Expert)</option>
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

  if (featureId === 'salon-booking') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Today\'s Appointments', value: '24', icon: CalendarClock, color: 'text-rose-600', bg: 'bg-rose-100' },
            { label: 'Pending Requests', value: '5', icon: CalendarDays, color: 'text-orange-600', bg: 'bg-orange-100' },
            { label: 'Active Stylists', value: '8', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
            { label: 'Revenue Today', value: '$1,240', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Upcoming Appointments</h3>
            <button className="text-sm font-medium text-rose-600 hover:text-rose-700">View Calendar</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Time</th>
                  <th className="p-4 font-medium">Client</th>
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Stylist</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { time: '10:00 AM', client: 'Jessica Alba', service: 'Premium Hair Styling', stylist: 'Emma', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-700' },
                  { time: '11:30 AM', client: 'Michael Smith', service: 'Men\'s Grooming & Fade', stylist: 'David', status: 'Pending', statusColor: 'bg-orange-100 text-orange-700' },
                  { time: '01:00 PM', client: 'Sarah Connor', service: 'Luxury Spa Treatment', stylist: 'Sarah', status: 'Confirmed', statusColor: 'bg-emerald-100 text-emerald-700' },
                  { time: '02:30 PM', client: 'Emily Blunt', service: 'Bridal Makeup', stylist: 'Emma', status: 'In Progress', statusColor: 'bg-blue-100 text-blue-700' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800 font-medium">{row.time}</td>
                    <td className="p-4 text-slate-600">{row.client}</td>
                    <td className="p-4 text-slate-600">{row.service}</td>
                    <td className="p-4 text-slate-600">{row.stylist}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-slate-400 hover:text-rose-600 transition-colors">Manage</button>
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

  if (featureId === 'staff-mgmt') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Staff Management</h3>
            <p className="text-sm text-slate-500">Manage your team of stylists and professionals.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Add Staff Member</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Emma Thompson', role: 'Master Stylist', rating: '4.9', clients: 124, img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=150' },
            { name: 'David Chen', role: 'Men\'s Grooming Expert', rating: '4.8', clients: 98, img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=150' },
            { name: 'Sarah Jenkins', role: 'Nail Technician', rating: '4.7', clients: 156, img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=150' },
          ].map((staff, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <img src={staff.img} alt={staff.name} className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-50 object-cover" referrerPolicy="no-referrer" />
              <h4 className="text-lg font-bold text-slate-800">{staff.name}</h4>
              <p className="text-sm text-indigo-600 font-medium mb-4">{staff.role}</p>
              
              <div className="w-full grid grid-cols-2 gap-4 border-t border-slate-100 pt-4 mt-auto">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Rating</p>
                  <p className="font-bold text-slate-800 flex items-center justify-center">
                    <span className="text-yellow-400 mr-1">★</span> {staff.rating}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Clients/mo</p>
                  <p className="font-bold text-slate-800">{staff.clients}</p>
                </div>
              </div>
              <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === 'inventory') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Total Products</p>
              <p className="text-3xl font-bold text-slate-800">452</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Low Stock Alerts</p>
              <p className="text-3xl font-bold text-rose-600">12</p>
            </div>
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Retail Value</p>
              <p className="text-3xl font-bold text-slate-800">$14,500</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Inventory Status</h3>
            <div className="flex space-x-2">
              <input type="text" placeholder="Search products..." className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                Add Stock
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Product Name</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Stock Level</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Argan Oil Hair Serum', category: 'Hair Care', stock: 45, status: 'In Stock', statusColor: 'bg-emerald-100 text-emerald-700', price: '$24.00' },
                  { name: 'Premium Men\'s Beard Oil', category: 'Men\'s Grooming', stock: 8, status: 'Low Stock', statusColor: 'bg-orange-100 text-orange-700', price: '$18.50' },
                  { name: 'Matte Hair Clay', category: 'Men\'s Styling', stock: 0, status: 'Out of Stock', statusColor: 'bg-rose-100 text-rose-700', price: '$22.00' },
                  { name: 'Professional Hair Spray', category: 'Styling', stock: 120, status: 'In Stock', statusColor: 'bg-emerald-100 text-emerald-700', price: '$15.00' },
                  { name: 'Soothing Aftershave Balm', category: 'Men\'s Grooming', stock: 15, status: 'Low Stock', statusColor: 'bg-orange-100 text-orange-700', price: '$28.00' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800 font-medium">{item.name}</td>
                    <td className="p-4 text-slate-600">{item.category}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px]">
                          <div 
                            className={`h-2 rounded-full ${item.stock > 20 ? 'bg-emerald-500' : item.stock > 0 ? 'bg-orange-500' : 'bg-rose-500'}`} 
                            style={{ width: `${Math.min(100, (item.stock / 50) * 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-slate-600">{item.stock}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-800 font-medium">{item.price}</td>
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
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
              alt="Salon Interior" 
              className="relative z-10 rounded-3xl shadow-2xl border-4 border-white transform -rotate-2 object-cover h-[400px] w-full"
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
