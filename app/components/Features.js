import { Music, Calendar, User, Users } from 'lucide-react';

const features = [
  { icon: Music, key: 'expert' },
  { icon: Calendar, key: 'flexible' },
  { icon: User, key: 'personalized' },
  { icon: Users, key: 'community' },
];

export default function Features({ dict }) {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{dict.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.key} 
              className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 text-primary-dark dark:text-indigo-200 mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-serif mb-3">{dict[feature.key]}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">{dict[`${feature.key}_desc`]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}