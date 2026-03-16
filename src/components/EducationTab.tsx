import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, DoorOpen, Calendar, UserCheck, ClipboardList, 
  Mail, Bell, Lock, FileText, MessageSquare, 
  CalendarDays, AlertCircle, BookOpen, X, CheckCircle2,
  MapPin, Phone, Mail as MailIcon, User, GraduationCap,
  Activity, BarChart3, Smartphone, Package, AlertTriangle
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

  if (featureId === 'gate-attendance') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Total Entries Today</p>
            <p className="text-3xl font-bold text-slate-800">1,245</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Active on Campus</p>
            <p className="text-3xl font-bold text-emerald-600">1,180</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Alerts Triggered</p>
            <p className="text-3xl font-bold text-amber-500">12</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Live Gate Feed (Main Entrance)</h4>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <div className="p-4 space-y-4">
            {[
              { name: 'John Doe', type: 'Student', time: 'Just now', action: 'Entry', color: 'text-emerald-600 bg-emerald-50' },
              { name: 'Sarah Smith', type: 'Staff', time: '2 mins ago', action: 'Entry', color: 'text-emerald-600 bg-emerald-50' },
              { name: 'Mike Johnson', type: 'Student', time: '5 mins ago', action: 'Exit', color: 'text-amber-600 bg-amber-50' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${log.color}`}>
                    {log.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{log.name}</p>
                    <p className="text-xs text-slate-500">{log.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm ${log.action === 'Entry' ? 'text-emerald-600' : 'text-amber-600'}`}>{log.action}</p>
                  <p className="text-xs text-slate-500">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'appointment') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold text-slate-800">Upcoming Appointments</h4>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-sm">New Appointment</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { with: 'Mr. Anderson (Parent)', purpose: 'Academic Review', time: '10:00 AM - 10:30 AM', date: 'Today' },
            { with: 'Mrs. Davis (Parent)', purpose: 'Behavioral Discussion', time: '11:00 AM - 11:45 AM', date: 'Today' },
            { with: 'Vendor Meeting', purpose: 'New Lab Equipment', time: '02:00 PM - 03:00 PM', date: 'Tomorrow' },
            { with: 'Staff Meeting', purpose: 'Curriculum Planning', time: '04:00 PM - 05:00 PM', date: 'Tomorrow' },
          ].map((apt, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h5 className="font-bold text-slate-800">{apt.with}</h5>
                  <p className="text-sm text-slate-500">{apt.purpose}</p>
                </div>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md">{apt.date}</span>
              </div>
              <div className="mt-auto flex items-center text-slate-600 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                {apt.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === 'visitor') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Active Visitors</p>
            <p className="text-3xl font-bold text-purple-600">14</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Pre-approved</p>
            <p className="text-3xl font-bold text-slate-800">5</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm font-medium">Total Today</p>
            <p className="text-3xl font-bold text-slate-800">42</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Visitor Log</h4>
            <button className="text-sm bg-purple-600 text-white px-3 py-1.5 rounded-lg font-medium">Register Visitor</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="p-4 font-medium">Visitor Name</th>
                  <th className="p-4 font-medium">Purpose</th>
                  <th className="p-4 font-medium">Host</th>
                  <th className="p-4 font-medium">Check-In</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Robert Fox', purpose: 'Meeting', host: 'Principal', time: '09:30 AM', status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Wade Warren', purpose: 'Delivery', host: 'Office', time: '10:15 AM', status: 'Checked Out', color: 'bg-slate-100 text-slate-700' },
                  { name: 'Esther Howard', purpose: 'Admission Inquiry', host: 'Admin', time: '11:00 AM', status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
                ].map((visitor, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{visitor.name}</td>
                    <td className="p-4 text-slate-600">{visitor.purpose}</td>
                    <td className="p-4 text-slate-600">{visitor.host}</td>
                    <td className="p-4 text-slate-500 text-sm">{visitor.time}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${visitor.color}`}>
                        {visitor.status}
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

  if (featureId === 'admission') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Applications', value: '450', color: 'text-blue-600', bg: 'bg-blue-100' },
            { label: 'Under Review', value: '120', color: 'text-amber-600', bg: 'bg-amber-100' },
            { label: 'Approved', value: '280', color: 'text-emerald-600', bg: 'bg-emerald-100' },
            { label: 'Rejected', value: '50', color: 'text-rose-600', bg: 'bg-rose-100' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h4 className="font-bold text-slate-800">Recent Applications</h4>
            <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="p-4 font-medium">Applicant Name</th>
                  <th className="p-4 font-medium">Grade Applied</th>
                  <th className="p-4 font-medium">Date Submitted</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Michael Scott', grade: 'Grade 5', date: 'Oct 24, 2023', status: 'Under Review', color: 'bg-amber-100 text-amber-700' },
                  { name: 'Jim Halpert', grade: 'Grade 8', date: 'Oct 23, 2023', status: 'Approved', color: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Pam Beesly', grade: 'Grade 1', date: 'Oct 22, 2023', status: 'Pending Docs', color: 'bg-blue-100 text-blue-700' },
                ].map((app, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{app.name}</td>
                    <td className="p-4 text-slate-600">{app.grade}</td>
                    <td className="p-4 text-slate-500 text-sm">{app.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.color}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-slate-400 hover:text-emerald-600 transition-colors">Review</button>
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

  if (featureId === 'exam') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Mid-Term Examination Results</h3>
            <p className="text-sm text-slate-500">Class 10 - Section A</p>
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Publish Results</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { subject: 'Mathematics', avg: '82%', highest: '98%', lowest: '45%' },
            { subject: 'Science', avg: '78%', highest: '95%', lowest: '52%' },
            { subject: 'English', avg: '85%', highest: '99%', lowest: '60%' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-800 mb-4">{stat.subject}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Class Average</span>
                  <span className="font-bold text-slate-800">{stat.avg}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: stat.avg }}></div>
                </div>
                <div className="flex justify-between items-center pt-2 text-sm">
                  <span className="text-emerald-600 font-medium">Highest: {stat.highest}</span>
                  <span className="text-rose-600 font-medium">Lowest: {stat.lowest}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === 'email') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Emails Sent (This Month)</p>
              <p className="text-3xl font-bold text-slate-800">14,250</p>
            </div>
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Average Open Rate</p>
              <p className="text-3xl font-bold text-emerald-600">68.4%</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Click Rate</p>
              <p className="text-3xl font-bold text-blue-600">24.1%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Recent Campaigns</h3>
            <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
              Compose Email
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Campaign Name</th>
                  <th className="p-4 font-medium">Audience</th>
                  <th className="p-4 font-medium">Sent Date</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Open Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Term 1 Fee Reminder', audience: 'All Parents', date: 'Oct 25, 2023', status: 'Sent', statusColor: 'bg-emerald-100 text-emerald-700', rate: '82%' },
                  { name: 'Diwali Holiday Notice', audience: 'Students & Staff', date: 'Oct 20, 2023', status: 'Sent', statusColor: 'bg-emerald-100 text-emerald-700', rate: '94%' },
                  { name: 'Monthly Newsletter - Oct', audience: 'Subscribers', date: 'Oct 15, 2023', status: 'Sent', statusColor: 'bg-emerald-100 text-emerald-700', rate: '45%' },
                  { name: 'Parent-Teacher Meeting', audience: 'Grade 10 Parents', date: 'Scheduled', status: 'Draft', statusColor: 'bg-slate-100 text-slate-700', rate: '-' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800 font-medium">{row.name}</td>
                    <td className="p-4 text-slate-600">{row.audience}</td>
                    <td className="p-4 text-slate-600">{row.date}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-700">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'push') {
    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Compose Push Notification</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Target Audience</label>
              <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>All Users (Parents, Students, Staff)</option>
                <option>Parents Only</option>
                <option>Students Only</option>
                <option>Staff Only</option>
                <option>Specific Grade/Class</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Notification Title</label>
              <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="e.g., School Closed Tomorrow" defaultValue="Unexpected Weather Alert" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message Body</label>
              <textarea rows={4} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Enter your message here..." defaultValue="Due to heavy rainfall, the school will remain closed tomorrow. Stay safe!"></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg mt-4 flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Send Notification Now</span>
            </button>
          </form>
        </div>
        <div className="w-full md:w-80 flex flex-col items-center">
          <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Mobile Preview</p>
          <div className="w-72 h-[500px] bg-slate-100 rounded-[3rem] border-[12px] border-slate-800 p-4 relative shadow-2xl overflow-hidden flex flex-col">
            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-32 mx-auto"></div>
            <div className="mt-12 space-y-4 flex-1">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-slate-200/50">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">Z</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">Zanya App • Now</span>
                </div>
                <h5 className="font-bold text-slate-800 text-sm">Unexpected Weather Alert</h5>
                <p className="text-xs text-slate-600 mt-1">Due to heavy rainfall, the school will remain closed tomorrow. Stay safe!</p>
              </div>
            </div>
            <div className="mt-auto pt-4 text-center">
              <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'login') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { role: 'Administrators', count: 5, color: 'bg-rose-100 text-rose-600' },
            { role: 'Teachers', count: 84, color: 'bg-blue-100 text-blue-600' },
            { role: 'Parents', count: 1240, color: 'bg-emerald-100 text-emerald-600' },
            { role: 'Students', count: 1150, color: 'bg-purple-100 text-purple-600' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${item.color}`}>
                <Users className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{item.count}</p>
              <p className="text-xs font-medium text-slate-500 uppercase">{item.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Active Sessions</h3>
            <span className="flex items-center space-x-2 text-sm text-emerald-600 font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>Live Monitoring</span>
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">User</th>
                  <th className="p-4 font-medium">Role</th>
                  <th className="p-4 font-medium">IP Address</th>
                  <th className="p-4 font-medium">Login Time</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Dr. Robert Adams', role: 'Admin', ip: '192.168.1.45', time: '08:15 AM', roleColor: 'bg-rose-100 text-rose-700' },
                  { name: 'Sarah Jenkins', role: 'Teacher', ip: '10.0.0.12', time: '08:30 AM', roleColor: 'bg-blue-100 text-blue-700' },
                  { name: 'Michael Smith', role: 'Parent', ip: '172.16.254.1', time: '09:45 AM', roleColor: 'bg-emerald-100 text-emerald-700' },
                  { name: 'Emma Davis', role: 'Student', ip: '10.0.0.55', time: '10:02 AM', roleColor: 'bg-purple-100 text-purple-700' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800 font-medium">{row.name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${row.roleColor}`}>
                        {row.role}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 font-mono text-sm">{row.ip}</td>
                    <td className="p-4 text-slate-600">{row.time}</td>
                    <td className="p-4">
                      <button className="text-xs font-medium text-rose-600 hover:text-rose-700 border border-rose-200 px-3 py-1 rounded hover:bg-rose-50 transition-colors">
                        Revoke
                      </button>
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

  if (featureId === 'concern') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Helpdesk & Concerns</h3>
            <p className="text-sm text-slate-500">Manage tickets raised by parents and students.</p>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-bold">12 Open</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">5 In Progress</span>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 'TCK-1042', subject: 'School bus arriving late', from: 'John Doe (Parent)', category: 'Transport', status: 'Open', priority: 'High', time: '2 hours ago' },
            { id: 'TCK-1041', subject: 'Issue with cafeteria food quality', from: 'Emma Smith (Student)', category: 'Facilities', status: 'In Progress', priority: 'Medium', time: '5 hours ago' },
            { id: 'TCK-1040', subject: 'Unable to access exam results portal', from: 'Sarah Jenkins (Parent)', category: 'IT Support', status: 'Resolved', priority: 'High', time: '1 day ago' },
          ].map((ticket, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500">{ticket.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    ticket.priority === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                  }`}>{ticket.priority} Priority</span>
                  <span className="text-xs text-slate-400">{ticket.time}</span>
                </div>
                <h4 className="font-bold text-slate-800 text-lg">{ticket.subject}</h4>
                <p className="text-sm text-slate-500">From: {ticket.from} • Category: {ticket.category}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  ticket.status === 'Open' ? 'bg-rose-100 text-rose-700' :
                  ticket.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {ticket.status}
                </span>
                <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (featureId === 'books') {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Total Inventory Items</p>
              <p className="text-3xl font-bold text-slate-800">1,845</p>
            </div>
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Low Stock Alerts</p>
              <p className="text-3xl font-bold text-rose-600">8</p>
            </div>
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Items Distributed</p>
              <p className="text-3xl font-bold text-emerald-600">850</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Inventory Status</h3>
            <div className="flex space-x-2">
              <input type="text" placeholder="Search items..." className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <button className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors">
                Add Stock
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Item Name</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Stock Level</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Grade 10 Mathematics Textbook', category: 'Books', stock: 145, status: 'In Stock', statusColor: 'bg-emerald-100 text-emerald-700', price: '$45.00' },
                  { name: 'Summer Uniform Shirt (Size M)', category: 'Uniforms', stock: 12, status: 'Low Stock', statusColor: 'bg-orange-100 text-orange-700', price: '$25.00' },
                  { name: 'Winter Jacket (Size L)', category: 'Uniforms', stock: 0, status: 'Out of Stock', statusColor: 'bg-rose-100 text-rose-700', price: '$65.00' },
                  { name: 'Grade 8 Science Lab Manual', category: 'Books', stock: 80, status: 'In Stock', statusColor: 'bg-emerald-100 text-emerald-700', price: '$15.00' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-800 font-medium">{item.name}</td>
                    <td className="p-4 text-slate-600">{item.category}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px]">
                          <div 
                            className={`h-2 rounded-full ${item.stock > 50 ? 'bg-emerald-500' : item.stock > 0 ? 'bg-orange-500' : 'bg-rose-500'}`} 
                            style={{ width: `${Math.min(100, (item.stock / 150) * 100)}%` }}
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

  if (featureId === 'text') {
    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Send Text Update</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Recipient Group</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none">
                  <option>Grade 10 Parents</option>
                  <option>All Teaching Staff</option>
                  <option>Bus Route 4 Parents</option>
                  <option>Custom Selection</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message (Max 160 chars)</label>
                <textarea rows={3} maxLength={160} className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none resize-none" placeholder="Type your SMS message here..." defaultValue="Reminder: Tomorrow is a half-day for all Grade 10 students due to the science exhibition preparation. Dismissal at 12:30 PM."></textarea>
                <div className="text-right text-xs text-slate-400 mt-1">124/160 characters</div>
              </div>
              <button className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold hover:bg-sky-700 transition-colors shadow-lg mt-4 flex items-center justify-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Send SMS Now</span>
              </button>
            </form>
          </div>
          <div className="w-full md:w-80 flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Messages</h3>
            <div className="space-y-3 flex-1 overflow-y-auto">
              {[
                { to: 'Grade 10 Parents', msg: 'Reminder: Tomorrow is a half-day for all Grade 10 students...', time: 'Just now', status: 'Sending' },
                { to: 'All Staff', msg: 'Staff meeting scheduled for 3:00 PM in the main hall.', time: '2 hours ago', status: 'Delivered' },
                { to: 'Bus Route 4', msg: 'Bus 4 is running 15 mins late due to traffic.', time: 'Yesterday', status: 'Delivered' },
              ].map((msg, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-700">{msg.to}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${msg.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{msg.status}</span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">{msg.msg}</p>
                  <p className="text-[10px] text-slate-400 mt-2 text-right">{msg.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'ptm') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Upcoming PTMs</h3>
            <p className="text-sm text-slate-500">Manage schedules and parent confirmations.</p>
          </div>
          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors flex items-center space-x-2">
            <CalendarDays className="w-4 h-4" />
            <span>Schedule New PTM</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Term 1 Review - Grade 10', date: 'Oct 28, 2023', time: '09:00 AM - 02:00 PM', confirmed: 34, total: 40, status: 'Upcoming', color: 'bg-violet-100 text-violet-700' },
            { title: 'Mid-Term Discussion - Grade 8', date: 'Nov 05, 2023', time: '10:00 AM - 03:00 PM', confirmed: 12, total: 35, status: 'Scheduling', color: 'bg-amber-100 text-amber-700' },
            { title: 'Annual Review - All Grades', date: 'Dec 15, 2023', time: '09:00 AM - 04:00 PM', confirmed: 0, total: 450, status: 'Draft', color: 'bg-slate-100 text-slate-700' },
          ].map((ptm, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${ptm.color}`}>{ptm.status}</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <Activity className="w-4 h-4" />
                </button>
              </div>
              <h4 className="font-bold text-slate-800 mb-2 line-clamp-1">{ptm.title}</h4>
              <div className="space-y-2 mb-6 flex-1">
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                  {ptm.date}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Activity className="w-4 h-4 mr-2 text-slate-400" />
                  {ptm.time}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-slate-500">Confirmed Parents</span>
                  <span className="text-xs font-bold text-slate-800">{ptm.confirmed}/{ptm.total}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: `${(ptm.confirmed / ptm.total) * 100}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Generic fallback for other features to save space but still look good
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Activity className="w-16 h-16 text-slate-300 mb-4" />
      <h4 className="text-2xl font-bold text-slate-800 mb-2">{featureId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Dashboard</h4>
      <p className="text-slate-500 max-w-md">
        This is a simulated dashboard view for this module. In the live application, this area contains real-time charts, data tables, and management controls specific to this feature.
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

export default function EducationTab({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
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
          
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-blue-50 mb-10">
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

          <button onClick={() => setActiveTab?.('contact')} className="px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
            Request a Demo
          </button>
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
                <p className="text-lg font-medium">cloudbooksit@gmail.com</p>
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
