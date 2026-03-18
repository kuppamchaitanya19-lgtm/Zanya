import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, PhoneCall, PieChart, Target, Activity, BarChart3, X, Mail, MessageSquare, ArrowUpRight, ArrowDownRight, Filter, Search, Plus } from 'lucide-react';

const features = [
  { id: 'leads', title: 'Lead Management', description: 'Capture, track, and convert leads efficiently with automated workflows.', icon: Target, gradient: 'from-orange-500 to-red-500' },
  { id: 'contacts', title: 'Contact Directory', description: 'Centralized database for all your customer interactions and history.', icon: Users, gradient: 'from-blue-500 to-indigo-500' },
  { id: 'communication', title: 'Communication Hub', description: 'Integrated email, SMS, and call tracking for seamless client engagement.', icon: PhoneCall, gradient: 'from-emerald-500 to-teal-500' },
  { id: 'analytics', title: 'Sales Analytics', description: 'Real-time dashboards and reports to track your sales performance.', icon: PieChart, gradient: 'from-purple-500 to-pink-500' },
];

function CrmDemoDashboard({ featureId }: { featureId: string }) {
  if (featureId === 'leads') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Lead Pipeline</h3>
            <p className="text-sm text-slate-500">Track and manage your sales opportunities.</p>
          </div>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Lead</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'New Leads', count: 24, color: 'border-blue-200 bg-blue-50', leads: ['TechCorp Inc.', 'Global Solutions', 'Innovate LLC'] },
            { title: 'Contacted', count: 18, color: 'border-amber-200 bg-amber-50', leads: ['Alpha Industries', 'Beta Systems'] },
            { title: 'Qualified', count: 12, color: 'border-purple-200 bg-purple-50', leads: ['Omega Corp', 'Delta LLC', 'Zeta Partners'] },
            { title: 'Converted', count: 45, color: 'border-emerald-200 bg-emerald-50', leads: ['Sigma Solutions'] },
          ].map((stage, i) => (
            <div key={i} className={`rounded-xl border ${stage.color} p-4 flex flex-col h-[400px]`}>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-slate-800">{stage.title}</h4>
                <span className="bg-white px-2 py-1 rounded-md text-xs font-bold text-slate-600 shadow-sm">{stage.count}</span>
              </div>
              <div className="space-y-3 overflow-y-auto flex-1 pr-2">
                {stage.leads.map((lead, j) => (
                  <div key={j} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 cursor-pointer hover:border-orange-300 transition-colors">
                    <p className="font-bold text-slate-800 text-sm">{lead}</p>
                    <p className="text-xs text-slate-500 mt-1">Value: ₹{(Math.random() * 10000 + 1000).toFixed(0)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded">Software</span>
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">JD</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === 'contacts') {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-lg font-bold text-slate-800">Contact Directory</h3>
            <div className="flex space-x-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search contacts..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button className="px-3 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Company</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Alice Johnson', company: 'TechCorp Inc.', email: 'alice@techcorp.com', phone: '+1 (555) 123-4567', status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Bob Smith', company: 'Global Solutions', email: 'bob.s@globalsol.com', phone: '+1 (555) 987-6543', status: 'Inactive', color: 'bg-slate-100 text-slate-700' },
                  { name: 'Charlie Davis', company: 'Innovate LLC', email: 'cdavis@innovate.io', phone: '+1 (555) 456-7890', status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Diana Prince', company: 'Omega Corp', email: 'diana@omega.org', phone: '+1 (555) 222-3333', status: 'Pending', color: 'bg-amber-100 text-amber-700' },
                  { name: 'Evan Wright', company: 'Zeta Partners', email: 'evan@zeta.net', phone: '+1 (555) 777-8888', status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                          {row.name.charAt(0)}
                        </div>
                        <span className="text-slate-800 font-medium">{row.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">{row.company}</td>
                    <td className="p-4 text-slate-500 text-sm">{row.email}</td>
                    <td className="p-4 text-slate-500 text-sm">{row.phone}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${row.color}`}>
                        {row.status}
                      </span>
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

  if (featureId === 'communication') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Emails Sent</p>
              <p className="text-2xl font-bold text-slate-800">2,450</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Calls Logged</p>
              <p className="text-2xl font-bold text-slate-800">842</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">SMS Delivered</p>
              <p className="text-2xl font-bold text-slate-800">5,120</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activity Log</h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {[
              { type: 'call', title: 'Call with Alice Johnson', desc: 'Discussed Q3 software requirements.', time: '10:30 AM', icon: PhoneCall, color: 'bg-emerald-500' },
              { type: 'email', title: 'Email sent to Bob Smith', desc: 'Follow-up on the proposal sent last week.', time: '09:15 AM', icon: Mail, color: 'bg-blue-500' },
              { type: 'sms', title: 'SMS to Charlie Davis', desc: 'Meeting reminder for tomorrow.', time: 'Yesterday', icon: MessageSquare, color: 'bg-purple-500' },
              { type: 'meeting', title: 'Meeting with Omega Corp', desc: 'Product demo and pricing discussion.', time: 'Oct 24', icon: Users, color: 'bg-orange-500' },
            ].map((log, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${log.color} text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10`}>
                  <log.icon className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-slate-800 text-sm">{log.title}</h4>
                    <span className="text-xs text-slate-400 font-medium">{log.time}</span>
                  </div>
                  <p className="text-sm text-slate-600">{log.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'analytics') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 font-medium mb-2">Total Revenue (YTD)</p>
            <div className="flex items-end space-x-3">
              <p className="text-3xl font-bold text-slate-800">₹1.24M</p>
              <span className="flex items-center text-sm font-medium text-emerald-600 mb-1">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                14.5%
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 font-medium mb-2">Win Rate</p>
            <div className="flex items-end space-x-3">
              <p className="text-3xl font-bold text-slate-800">32.8%</p>
              <span className="flex items-center text-sm font-medium text-emerald-600 mb-1">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                2.1%
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 font-medium mb-2">Avg. Deal Size</p>
            <div className="flex items-end space-x-3">
              <p className="text-3xl font-bold text-slate-800">₹14,500</p>
              <span className="flex items-center text-sm font-medium text-rose-600 mb-1">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                1.2%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Forecast</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[40, 55, 45, 70, 65, 85, 95, 80, 100, 110, 90, 120].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center group">
                <div 
                  className="w-full bg-purple-100 rounded-t-sm group-hover:bg-purple-200 transition-colors relative"
                  style={{ height: `${height}%` }}
                >
                  <div 
                    className="absolute bottom-0 w-full bg-purple-500 rounded-t-sm group-hover:bg-purple-600 transition-colors"
                    style={{ height: `${height * 0.7}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-slate-400 mt-2 font-medium uppercase">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
              <span className="text-sm text-slate-600">Closed Won</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-100 rounded-sm"></div>
              <span className="text-sm text-slate-600">Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <BarChart3 className="w-16 h-16 text-slate-300 mb-4" />
      <h4 className="text-2xl font-bold text-slate-800 mb-2">{featureId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Dashboard</h4>
      <p className="text-slate-500 max-w-md">
        This is a simulated dashboard view for the CRM module. In the live application, this area contains real-time charts, data tables, and management controls.
      </p>
    </div>
  );
}

export default function CrmTab({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
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
            
            <button onClick={() => setActiveTab?.('contact')} className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-colors shadow-xl">
              Request a Demo
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
