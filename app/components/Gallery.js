// NOTE: Add your images to the `public/gallery/` folder
// For example: image1.jpg, image2.jpg, etc.
const images = [
  '/gallery/image1.jpg',
  '/gallery/image2.jpg',
  '/gallery/image3.jpg',
  '/gallery/image4.jpg', // Add more if you like
];

export default function Gallery({ dict }) {
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          {dict.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img src={src} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-300"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}