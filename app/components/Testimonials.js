// app/components/Testimonials.js - NEW VERSION

"use client";

import Marquee from "react-fast-marquee";

// =========================================================================
// == YOUR NEW REVIEW CONTROL PANEL ==
// Edit all names and reviews directly here.
// 'en' is for English, 'am' is for Amharic.
// =========================================================================
const testimonials = [
  {
    name: {
      en: "Anterh Gode",
      am: "አንተህ ጎዴ", // Example Amharic name
    },
    review: {
      en: "Tefere at the Taodocos Institute is a skilled and patient harp trainer who knows the instrument inside and out.",
      am: "በታኦዶኮስ ኢንስቲትዩት ውስጥ መምህር ተፈሪ፣ መሣሪያውን ከውስጥና ከውጭ የሚያውቅ፣ ችሎታ ያለው እና ታጋሽ የበገና አሠልጣኝ ነው።", // Example Amharic review
    },
    image: "/testimonials/student1.jpg",
  },
  {
    name: {
      en: "Hiwet Teferi",
      am: "ሕይወት ተፈሪ", // Example Amharic name
    },
    review: {
      en: "Tefere at the Taodocos Institute is a skilled and patient harp trainer who knows the instrument inside and out.",
      am: "በታኦዶኮስ ኢንስቲትዩት ውስጥ መምህር ተፈሪ፣ መሣሪያውን ከውስጥና ከውጭ የሚያውቅ፣ ችሎታ ያለው እና ታጋሽ የበገና አሠልጣኝ ነው።", // Example Amharic review
    },
    image: "/testimonials/student.jpg",
  },
  {
    name: {
      en: "Kidist",
      am: "ኪዲስት", // Example Amharic name
    },
    review: {
      en: "I found him on a whim and now my house is filled with begena sounds again. He is an inspiration to learn from.",
      am: "በአጋጣሚ አገኘሁት እና አሁን ቤቴ እንደገና በገና ድምፅ ተሞልቷል። ከእርሱ መማር መነሳሳት ነው።", // Example Amharic review
    },
    image: "/testimonials/student2.jpg", // Note: The path here should be correct
  },
  {
    name: {
      en: "Abdulkemsis",
      am: "አብዱልከምሲስ", // Example Amharic name
    },
    review: {
      en: "I met Tefera when he was teaching 'Begena' at St. John's Church. When he was teaching, he tried to reach everyone.",
      am: "ተፈራን ያገኘሁት በቅዱስ ዮሐንስ ቤተ ክርስቲያን 'በገና' ሲያስተምር ነበር። ሲያስተምር ሁሉንም ሰው ለመድረስ ይሞክር ነበር።", // Example Amharic review
    },
    image: "/testimonials/student5.jpg",
  },
];
// =========================================================================

// This component now receives 'lang' to choose the correct text.
export default function Testimonials({ dict, lang }) {
  // We double the testimonials for a seamless scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-earth-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* This title STILL comes from the dictionary files */}
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
            <div key={index} className="w-[350px] md:w-[450px] mx-4">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow">
                  <span className="text-4xl text-gold-light dark:text-gold-dark font-serif absolute -left-1 -top-1">“</span>
                  {/* It now reads the review directly, selecting 'en' or 'am' based on the lang prop */}
                  <p className="pl-6">{testimonial.review[lang]}</p>
                </blockquote>
                <figcaption className="flex items-center mt-4">
                  <img src={testimonial.image} alt={testimonial.name[lang]} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-blue-200 dark:border-gold" />
                  <div>
                    {/* It does the same for the name */}
                    <div className="font-serif text-lg text-earth-900 dark:text-white">{testimonial.name[lang]}</div>
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