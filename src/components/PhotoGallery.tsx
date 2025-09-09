"use client";

import Image from "next/image";

const PhotoGallery = () => {
  // Using placeholder images for the gallery
  const galleryImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=400&h=300", 
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&h=300",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=400&h=300"
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 ${
                index === 0 || index === 5 || index === 8 ? 'md:col-span-2 md:row-span-2' : ''
              } ${
                index === 2 || index === 7 ? 'md:row-span-2' : ''
              }`}
            >
              <Image 
                src={image}
                alt={`Barbarika event gallery image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover min-h-[200px]"
                priority={index < 3} // Load first 3 images with priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
