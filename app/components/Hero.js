// app/components/Hero.js

export default function Hero({ dict }) {
  return (
    <section className="relative overflow-hidden text-center py-24 sm:py-40 bg-earth-100 dark:bg-gray-900">
      {/* Subtle background texture */}
      <div className="absolute inset-0 -z-10 bg-[url('/path/to/texture.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 text-earth-900 dark:text-white">
          {dict.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          {dict.subtitle}
        </p>
        <a 
          href="#pricing" 
          className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {dict.cta}
        </a>
      </div>
    </section>
  );
}