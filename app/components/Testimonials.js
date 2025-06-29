// app/components/Testimonials.js - NEW ROBUST & REFINED VERSION

"use client";

import Marquee from "react-fast-marquee";
// If you want custom scrollbars, you might need a plugin like `tailwind-scrollbar`
// and you would add `require('tailwind-scrollbar')` to your tailwind.config.js plugins.

// =========================================================================
// == YOUR NEW REVIEW CONTROL PANEL ==
// Edit all names and reviews directly here.
// 'en' is for English, 'am' is for Amharic.
// =========================================================================
const testimonials = [
  {
    name: {
      en: "Anteneh Gode",
      am: "አንተነህ ጎዴ",
    },
    review: {
      en: "Tefere at the Taodocos Institute is a skilled and patient harp trainer who knows the instrument inside and out.",
      am: "በታኦዶኮስ ኢንስቲትዩት ውስጥ መምህር ተፈሪ፣ መሣሪያውን ከውስጥና ከውጭ የሚያውቅ፣ ችሎታ ያለው እና ታጋሽ የበገና አሠልጣኝ ነው።",
    },
    image: "/testimonials/student1.jpg",
  },
  {
    name: {
      en: "Hiwet Teferi",
      am: "ሕይወት ተፈሪ",
    },
    review: {
      en: "Tefere at the Taodocos Institute is a skilled and patient harp trainer who knows the instrument inside and out.",
      am: "በታኦዶኮስ ኢንስቲትዩት ውስጥ መምህር ተፈሪ፣ መሣሪያውን ከውስጥና ከውጭ የሚያውቅ፣ ችሎታ ያለው እና ታጋሽ የበገና አሠልጣኝ ነው።",
    },
    image: "/testimonials/student.jpg",
  },
  {
    name: {
      en: "Kidist",
      am: "ቅድስት",
    },
    review: {
      en: "I found him on a whim and now my house is filled with begena sounds again. He is an inspiration to learn from.",
      am: "በአጋጣሚ አገኘሁት እና አሁን ቤቴ እንደገና በገና ድምፅ ተሞልቷል። ከእርሱ መማር መነሳሳት ነው።",
    },
    image: "/testimonials/student2.jpg",
  },
  
  {
    name: {
      en: "Kidus",
      am: "ቅዱስ",
    },
    review: {
      en: "In the name of the Father, the Son, and the Holy Spirit, One God, Amen! Teacher, though it's hard to write about you... your calmness and patience when you teach us... Even if we are forgetful, you always teach us tirelessly. You always strive for us to understand it, not just see it. You help us not only as a teacher but as a brother... May the Virgin Mary complete what I have understated. Teacher, may your years of service be blessed... ",
      am: "በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሀዱ አምላክ አሜን!🙏መምህር ስላንተ ፅሁፍ መፃፍ ✍️ቢከብድም: ስታስተምረን እርጋታህ ትግስትህ እኛ ዝንጉ ብንሆንም አንተ ዘወትር ሳትሰለች ታስተምረናለህ አይተነው ሳይሆን አውቀነው እንድናልፍ ሁሌ ነው የምትጥረው ስለተቸገርንበት ጉዳይ እንደመምህር ብቻ ሳይሆን እንደወንድም ነው የምታግዘን ባሳነስኩ ድንግል ትሙላበት ብቻ መምህር ያገልግሎት ዘመንህ ይባረክ በክብር በሞገስ ይጠብቅህ እመብርሃን ከፊትህ ትቅደምልህ ቅዱሳኑ ይከተሉህ።ፈራን ያገኘሁት በቅዱስ ዮሐንስ ቤተ ክርስቲያን 'በገና' ሲያስተምር ነበር። ሲያስተምር ሁሉንም ሰው ለመድረስ ይሞክር ነበር።",
    },
    image: "/testimonials/student6.jpg",
  },
];
// =========================================================================

export default function Testimonials({ dict, lang }) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-earth-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-earth-900 dark:text-white mb-4">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-earth-100 to-transparent dark:from-gray-900"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-earth-100 to-transparent dark:from-gray-900"></div>

        <Marquee gradient={false} speed={30} pauseOnHover={true}>
          {duplicatedTestimonials.map((testimonial, index) => (
            // === MODIFIED WRAPPER ===
            // This now has a fixed height to ensure all cards are the same size in the marquee.
            <div key={index} className="w-[380px] md:w-[450px] mx-5 h-[440px] py-4">
              {/* 'group' is added to enable hover effects on child elements like the quotation mark. */}
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 
                              h-full flex flex-col transition-all duration-300 ease-in-out 
                              hover:shadow-xl hover:-translate-y-2 hover:border-gold-light dark:hover:border-gold-dark">
                
                {/* === MODIFIED BLOCKQUOTE FOR SCROLLING === */}
                <blockquote className="relative text-gray-600 dark:text-gray-300 italic mb-6 flex-grow overflow-y-auto 
                                       pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  {/* === MODIFIED QUOTE MARK FOR ANIMATION === */}
                  <span className="text-5xl text-gold-light/80 dark:text-gold-dark/70 font-serif absolute -left-2 -top-2
                                   transition-all duration-300 ease-in-out group-hover:text-gold-light dark:group-hover:text-gold-dark
                                   group-hover:scale-110 group-hover:-translate-x-1">
                    “
                  </span>
                  <p className="pl-6">{testimonial.review[lang]}</p>
                </blockquote>
                
                <figcaption className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {/* === MODIFIED IMAGE FOR ZOOM EFFECT === */}
                  <img src={testimonial.image} 
                       alt={testimonial.name[lang]} 
                       className="w-20 h-20 rounded-full mr-6 object-cover border-2 border-gold-light/70 dark:border-gold-dark/60
                                  transition-all duration-300 ease-in-out hover:scale-110 hover:border-gold-light dark:hover:border-gold-dark" 
                  />
                  <div>
                    <div className="font-serif text-lg font-semibold text-earth-900 dark:text-white">{testimonial.name[lang]}</div>
                  </div>
                </figcaption>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}