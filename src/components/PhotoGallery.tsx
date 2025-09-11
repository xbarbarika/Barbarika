"use client";

import Image from "next/image";

const PhotoGallery = () => {
  // Using high-quality placeholder images for the gallery
  const galleryImages = [
    "/event4.jpg",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&h=600&q=80", 
    "/event1.jpg",
    "/event3.jpg",
    "/event6.jpg",
    "/event10.jpg",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&h=600&q=80",
    "/event8.jpg",
    "/event2.jpg",
    "/event7.jpg",
    "/event9.jpg",
    "/event11.jpg"
  ];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 ${
                index === 0 || index === 5 || index === 9 ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                index === 2 || index === 7 || index === 8 ? 'md:row-span-2' : ''
              }`}
              style={{
                border: '1px solid rgba(255, 59, 48, 0.2)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Image 
                src={image}
                alt={`Barbarika event gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover min-h-[200px]"
                priority={index < 3} // Load first 3 images with priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent hover:border-red-400/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
