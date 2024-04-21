import React, { useEffect, useRef, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          lazyImage.src = src;
          lazyImage.onload = () => setIsLoaded(true);
          observer.unobserve(lazyImage);
        }
      });
    });

    imgRef.current && observer.observe(imgRef.current);

    return () => {
      imgRef.current && observer.unobserve(imgRef.current);
    };
  }, [src]);

  return (
    <>
      {!isLoaded && <InfinitySpin width="80" color="white" />}
      <img
        ref={imgRef}
        data-src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "is-loaded" : ""}`}
      />
    </>
  );
};

export default LazyImage;
