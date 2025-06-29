// app/components/Pricing.js

import { CheckCircle } from 'lucide-react';

const plans = [
    { key: 'basic', features: ['basic_feature1', 'basic_feature2', 'basic_feature3'] },
    { key: 'standard', features: ['standard_feature1', 'standard_feature2', 'standard_feature3'], popular: true },
    { key: 'premium', price: '$150', features: ['premium_feature1', 'premium_feature2', 'premium_feature3'] },
];

export default function Pricing({ dict }) {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white dark:bg-gray-800/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-4">{dict.title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{dict.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.key} className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-transform duration-300 ${plan.popular ? 'lg:scale-105 border-2 border-gold' : 'border border-gray-200 dark:border-gray-700'}`}>
              {plan.popular && <span className="bg-gold text-earth-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase absolute -top-4 left-1/2 -translate-x-1/2">{dict.standard}</span>}
              <div className="text-center">
                <h3 className="text-3xl font-serif text-earth-900 dark:text-white">{dict[`${plan.key}_title`]}</h3>
                <p className="text-4xl font-extrabold my-4 text-earth-900 dark:text-white">
                  {dict[`${plan.key}_price`] || plan.price}
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">/{dict.month} ({dict.hours})</span>
                </p>
              </div>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 my-8">
                {plan.features.map(featureKey => (
                  <li key={featureKey} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-dark dark:text-primary-light mr-3 flex-shrink-0 mt-1" />
                    <span>{dict[featureKey]}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full text-center block font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${plan.popular ? 'bg-gold text-earth-900 hover:bg-gold-light' : 'bg-blue-50 dark:bg-gray-700 text-primary-dark dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600'}`}>
                {dict.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
