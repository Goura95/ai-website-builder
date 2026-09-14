import { Zap, Shield, Smartphone, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed to ensure your users have the best experience possible.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Enterprise-grade security built into every layer of the platform.',
    icon: Shield,
  },
  {
    title: 'Mobile First',
    description: 'Responsive layouts that look amazing on every device, from mobile to desktop.',
    icon: Smartphone,
  },
  {
    title: 'Advanced Analytics',
    description: 'Deep insights into how your product is performing with real-time data.',
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Powerful tools and features designed to help you build better software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
