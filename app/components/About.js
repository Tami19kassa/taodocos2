// app/components/About.js - NEW FILE

export default function About({ dict }) {
  return (
    <section id="about-me" className="py-20 sm:py-24 bg-white dark:bg-gray-800/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Your Picture */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              {/* IMPORTANT: Replace this placeholder with your actual picture path */}
              <img 
                // Create a 'profile' folder in `public` and put your pic there
                src="/profile/my-picture.jpg" 
                alt="Your Name" 
                className="w-64 h-64 rounded-full object-cover shadow-2xl z-10 relative" 
              />
              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-64 h-64 rounded-full bg-gradient-to-br from-gold to-gold-light opacity-50 z-0"></div>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-4">
              {dict.title}
            </h2>
            <p className="text-2xl font-semibold text-primary dark:text-primary-light mb-6">
              {dict.greeting}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {dict.paragraph}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}