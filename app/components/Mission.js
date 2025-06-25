// app/components/Mission.js - NEW FILE

export default function Mission({ dict }) {
  return (
    <section id="mission" className="py-20 sm:py-24 bg-earth-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Column */}
          <div className="flex justify-center">
            {/* The image you provided */}
            <img 
              src="/branding/taodocos-logo.jpg" 
              alt="Taodocos Begena Logo" 
              className="rounded-lg shadow-2xl max-w-sm w-full border-4 border-white dark:border-gray-700"
            />
          </div>

          {/* Text Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-6">
              {dict.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {dict.paragraph1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {dict.paragraph2}
            </p>
            <a 
              href="#pricing"
              className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {dict.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}