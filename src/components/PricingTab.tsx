import { CheckCircle2, Building2, GraduationCap, Scissors } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    title: 'Education ERP',
    icon: GraduationCap,
    description: 'Complete management system for schools, colleges, and universities.',
    price: 'Custom',
    color: 'blue',
    features: [
      'Classroom & Gate Attendance',
      'Admission & Fee Management',
      'Exam & Result Processing',
      'Multi-Role Login System',
      'Books & Uniform Inventory',
      'Parent-Teacher Communication',
      'Email & Push Notifications',
    ],
  },
  {
    title: 'Hotel Management',
    icon: Building2,
    description: 'Streamline bookings, staff, and guest experiences for your property.',
    price: 'Custom',
    color: 'emerald',
    features: [
      'Real-time Booking Engine',
      'Room & Inventory Management',
      'Staff Scheduling & Payroll',
      'Guest CRM & Feedback',
      'Housekeeping Tracking',
      'Billing & Invoicing',
      'Multi-property Support',
    ],
    popular: true,
  },
  {
    title: 'Salon Services',
    icon: Scissors,
    description: 'All-in-one solution for salons, spas, and beauty studios.',
    price: 'Custom',
    color: 'pink',
    features: [
      'Online Appointment Booking',
      'Stylist Schedule Management',
      'Product Inventory Tracking',
      'Client History & Preferences',
      'Point of Sale (POS)',
      'Loyalty Programs',
      'Automated Reminders',
    ],
  },
];

export default function PricingTab() {
  return (
    <div className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored Solutions for Your Business</h2>
          <p className="text-lg text-slate-600">
            Whether you run an educational institution, a hotel, or a salon, we have a comprehensive package designed specifically for your operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            const colorClasses = {
              blue: 'from-blue-600 to-indigo-600 text-blue-600 bg-blue-50 border-blue-200',
              emerald: 'from-emerald-600 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-200',
              pink: 'from-pink-600 to-rose-600 text-pink-600 bg-pink-50 border-pink-200',
            }[plan.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${isPopular ? colorClasses.split(' ')[4] : 'border-transparent'} flex flex-col`}
              >
                {isPopular && (
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}></div>
                )}
                
                <div className="p-8 flex-1">
                  <div className={`w-14 h-14 rounded-2xl ${colorClasses.split(' ')[3]} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${colorClasses.split(' ')[2]}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                  <p className="text-slate-500 mb-6 h-12">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium ml-2">Pricing</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${colorClasses.split(' ')[2]}`} />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${
                    isPopular 
                      ? `bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white` 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}>
                    Request a Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center bg-white p-10 rounded-3xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a custom enterprise solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We offer tailored implementations, dedicated support, and custom feature development for large organizations.
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  );
}
