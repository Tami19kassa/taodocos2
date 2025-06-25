// app/components/MezmurSamples.js - NEW REDESIGNED VERSION

// IMPORTANT: Paste your YouTube video IDs here
const mezmurVideos = [
  { id: 'uDuqpMYuxaI', titleKey: 'ክፍል 28:-የበገና ቁጥሮችን እንዴት በራሣችን እናውጣ?' },
  { id: '1v7E3EI8aE8', titleKey: 'ክፍል 32:-አለም ማረፊያ ናት የበገና መዝሙር አዘማመር( Alem Marefia Nat Begena Mezmure Tutorial)' },
  { id: 'wlmHvgT9RWk', titleKey: 'ክፍል 9:- (INTRO......)ታኦዶኮስ የበገና መማሪያ ገጽ' },
];


export default function MezmurSamples({ dict }) {
  return (
    // Section uses a cohesive background color
    <section id="mezmur-samples" className="py-20 sm:py-24 bg-earth-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* The main title, consistent with the rest of the site */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-4">
            {dict.title}
          </h2>
        </div>
        
        {/* The new grid for the video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {mezmurVideos.map((video) => (
            // The Card: rounded, with a subtle border and shadow that changes on hover
            <div 
              key={video.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700
                         transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Responsive video container */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={dict[video.titleKey]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              
              {/* The styled title area below the video */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-earth-900 dark:text-white">
                  {dict[video.titleKey]}
                </h3>
                {/* A decorative line using our brand colors */}
                <hr className="w-1/4 mx-auto mt-3 border-gold-light dark:border-gold" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}