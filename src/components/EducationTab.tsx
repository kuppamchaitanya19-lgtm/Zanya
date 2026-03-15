import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, DoorOpen, Calendar, UserCheck, ClipboardList, 
  Mail, Bell, Lock, FileText, MessageSquare, 
  CalendarDays, AlertCircle, BookOpen, X, CheckCircle2,
  MapPin, Phone, Mail as MailIcon, User, GraduationCap,
  Activity, BarChart3
} from 'lucide-react';

const features = [
  { id: 'class-attendance', title: 'Classroom Attendance', description: 'Automated digital attendance tracking for every class. Teachers mark attendance in seconds.', icon: Users, gradient: 'from-blue-500 to-blue-600' },
  { id: 'gate-attendance', title: 'Gate Attendance', description: 'RFID/QR-based entry and exit tracking at campus gates. Real-time alerts to parents and staff.', icon: DoorOpen, gradient: 'from-teal-500 to-teal-600' },
  { id: 'appointment', title: 'Appointment Management', description: 'Seamlessly schedule and manage appointments between parents, teachers, and administrators.', icon: Calendar, gradient: 'from-indigo-500 to-indigo-600' },
  { id: 'visitor', title: 'Visitor Portal', description: 'Digital visitor registration and management. Pre-approve visitors, issue passes.', icon: UserCheck, gradient: 'from-purple-500 to-purple-600' },
  { id: 'admission', title: 'Admission Portal', description: 'End-to-end online admission management — from application submission to fee payment.', icon: ClipboardList, gradient: 'from-emerald-500 to-emerald-600' },
  { id: 'email', title: 'Email Alerts', description: 'Automated email notifications keep your entire team in sync.', icon: Mail, gradient: 'from-orange-500 to-orange-600' },
  { id: 'push', title: 'Push Notifications', description: 'Instant in-app and push alerts for parents, teachers, and staff.', icon: Bell, gradient: 'from-yellow-500 to-amber-500' },
  { id: 'login', title: 'Multi-Role Login System', description: 'Secure, role-based access for Parents, Teachers, Students, Admin, and Office Staff.', icon: Lock, gradient: 'from-rose-500 to-rose-600' },
  { id: 'exam', title: 'Exam Management', description: 'Upload exam reports once and track them anytime. Instant access to performance reports.', icon: FileText, gradient: 'from-green-500 to-green-600' },
  { id: 'text', title: 'Text Updates', description: 'Instant text-based updates between college and parents for easy communication.', icon: MessageSquare, gradient: 'from-sky-500 to-sky-600' },
  { id: 'ptm', title: 'PTM Management', description: 'Schedule and manage Parent-Teacher Meetings effortlessly. Send invites and track attendance.', icon: CalendarDays, gradient: 'from-violet-500 to-violet-600' },
  { id: 'concern', title: 'Raise Concern', description: 'A dedicated channel for parents and students to raise concerns directly to the administration.', icon: AlertCircle, gradient: 'from-red-500 to-red-600' },
  { id: 'books', title: 'Books & Uniform Management', description: 'Manage textbook distribution and uniform orders digitally. Track inventory and payments.', icon: BookOpen, gradient: 'from-amber-500 to-amber-600' },
];

const pricingIncludes = [
  { title: 'Google Cloud', desc: 'Hosted on Google Cloud infrastructure for maximum reliability and global availability.', icon: 'cloud' },
  { title: 'Google Console', desc: 'Full Google Console integration for seamless management and monitoring of your instance.', icon: 'monitor' },
  { title: 'Server Boosters', desc: 'High-performance server boosters ensuring fast load times and smooth user experience.', icon: 'server' },
  { title: 'Email Pushes', desc: 'Automated email push notifications for attendance, alerts, and team communications.', icon: 'mail' },
  { title: 'Cloud Storage', desc: 'Secure cloud storage for documents, reports, student records, and media files.', icon: 'database' },
  { title: 'Login Storages', desc: 'Dedicated secure login storage for all roles — parents, teachers, admin, and staff.', icon: 'lock' },
];

function DemoDashboard({ featureId }: { featureId: string }) {
  if (featureId === 'class-attendance') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Total Students</p>
            <p className="text-3xl font-bold text-slate-800">45</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Present</p>
            <p className="text-3xl font-bold text-emerald-600">38</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Absent</p>
            <p className="text-3xl font-bold text-red-500">4</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Half Day (HF)</p>
            <p className="text-3xl font-bold text-amber-500">3</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h4 className="font-bold text-slate-800">Today's Attendance Roster - Class 10A</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="p-4 font-medium">Roll No</th>
                  <th className="p-4 font-medium">Student Name</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Time Logged</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { roll: '01', name: 'Alice Smith', status: 'P', time: '08:15 AM', color: 'bg-emerald-100 text-emerald-700' },
                  { roll: '02', name: 'Bob Jones', status: 'A', time: '--', color: 'bg-red-100 text-red-700' },
                  { roll: '03', name: 'Charlie Brown', status: 'HF', time: '11:30 AM', color: 'bg-amber-100 text-amber-700' },
                  { roll: '04', name: 'Diana Prince', status: 'P', time: '08:10 AM', color: 'bg-emerald-100 text-emerald-700' },
                  { roll: '05', name: 'Evan Wright', status: 'P', time: '08:12 AM', color: 'bg-emerald-100 text-emerald-700' },
                ].map((student) => (
                  <tr key={student.roll} className="hover:bg-slate-50">
                    <td className="p-4 text-slate-600">{student.roll}</td>
                    <td className="p-4 font-medium text-slate-800">{student.name}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${student.color}`}>
                        {student.status === 'P' ? 'Present' : student.status === 'A' ? 'Absent' : 'Half Day'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-sm">{student.time}</td>
                    <td className="p-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
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

export default function EducationTab() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#1a4bba] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-8 border border-white/20">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by 20+ Schools & Colleges</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            The Complete ERP Solution <br className="hidden md:block" />
            for Modern Education
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10 leading-relaxed">
            Streamline your institution's operations with our all-in-one platform — from attendance tracking to admission management, all in one powerful system.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-blue-50">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>Classroom & Gate Attendance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>Visitor & Admission Portals</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>Multi-role Login System</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-slate-50" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                whileHover={{ y: -5 }}
                className={`rounded-3xl p-6 shadow-lg cursor-pointer flex flex-col h-full bg-gradient-to-br ${feature.gradient} text-white relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20 shadow-inner">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{feature.description}</p>
                </div>
                <div className="mt-auto relative z-10">
                  <button 
                    onClick={() => setSelectedFeature(feature)}
                    className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-xl text-sm font-bold transition-colors flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <Activity className="w-4 h-4" />
                    <span>View Dashboard</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a4bba] rounded-t-3xl p-12 text-center text-white">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-6xl font-bold">₹78,999</span>
              <span className="text-xl text-blue-200">/yr</span>
            </div>
            <p className="mt-4 text-blue-100">Annual Charges — Billed once per year per institution</p>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-b-3xl p-8 md:p-12">
            <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">What's Included</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingIncludes.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900">{item.title}</h5>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Institution?</h2>
        <p className="text-lg text-slate-600 mb-12">Schedule a free demo or send us your questions — we'll get back to you within 24 hours.</p>
        
        <div className="bg-[#1a4bba] rounded-3xl p-8 md:p-12 text-left text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
          <p className="text-blue-200 mb-8">Reach out to us and our team will get back to you to schedule your personalized demo.</p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200 uppercase tracking-wider">Contact Person</p>
                <p className="text-lg font-medium">Chaithanya K</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200 uppercase tracking-wider">Phone</p>
                <p className="text-lg font-medium">+91 81797 57130</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200 uppercase tracking-wider">Email</p>
                <p className="text-lg font-medium">Cloudbooksit@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200 uppercase tracking-wider">Location</p>
                <p className="text-lg font-medium">Chittoor, Andhra Pradesh</p>
              </div>
            </div>
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
                <DemoDashboard featureId={selectedFeature.id} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
