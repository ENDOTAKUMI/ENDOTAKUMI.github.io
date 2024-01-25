import React, { useState, useEffect } from 'react';

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-0' : 'opacity-100'}`}
        aria-busy={!loaded}
      >
        <div className="aspect-square w-full bg-gray-300 rounded animate-pulse" />
      </div>
      <img
        src={src}
        alt={alt}
        className={`aspect-square w-full rounded object-cover transition-opacity duration-700 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: loaded ? '5ms' : '0ms' }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
