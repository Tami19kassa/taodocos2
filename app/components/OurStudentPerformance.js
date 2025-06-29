// app/components/OurStudentPerformance.js - A NEW BEAUTIFUL COMPONENT

"use client";

// =========================================================================
// == STUDENT PERFORMANCE CONTROL PANEL ==
// IMPORTANT: Replace these with your actual YouTube video IDs and add the
// corresponding title and performer keys to your dictionary files.
// =========================================================================
const studentPerformances = [
  { 
    id: 'WNt8o1eQKqs', // Placeholder - REPLACE
    titleKey: 'ክፍል 46 ባርከን ባርከን የበገና መዝሙር', 
    performerKey: 'performance1_performer' 
  },
  
];


export default function OurStudentPerformance({ dict }) {
  return (
    // Section has a slightly different background to distinguish it, or use the same for consistency
    <section id="student-performance" className="py-20 sm:py-24 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        
        {/* A title and subtitle to provide context */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-4">
            {dict.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            {dict.subtitle}
          </p>
        </div>
        
        {/* The grid for the performance cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {studentPerformances.map((performance) => (
            // The Card: 'group' enables hover effects on children (like the underline)
            // It has an elegant border that fades in on hover for a premium feel.
            <div 
              key={performance.id} 
              className="group bg-earth-100/60 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border-2 border-transparent
                         transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2
                         hover:border-gold-light dark:hover:border-gold-dark"
            >
              {/* Responsive video container */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${performance.id}`}
                  title={dict[performance.titleKey]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              
              {/* The styled content area below the video */}
              <div className="p-6 text-center">
                {/* The Video Title */}
                <h3 className="font-serif text-xl font-bold text-earth-900 dark:text-white">
                  {dict[performance.titleKey]}
                </h3>
                {/* Performer's Name - adding a personal touch */}
                <p className="mt-1 text-md text-gray-500 dark:text-gray-400 italic">
                  {dict.by} {dict[performance.performerKey]}
                </p>
                {/* The new animated decorative underline */}
                <div className="w-12 h-1 bg-gold-light/60 dark:bg-gold-dark/50 mx-auto mt-4 rounded-full transition-all duration-300 ease-out group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
