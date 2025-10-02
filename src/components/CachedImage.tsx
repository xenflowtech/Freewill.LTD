import React, { useState, useEffect, useRef } from 'react';

interface CachedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [cachedSrc, setCachedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached
  useEffect(() => {
    const checkCache = () => {
      const img = new Image();
      img.onload = () => {
        setCachedSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setHasError(true);
      };
      img.src = src;
    };

    // Check browser cache first
    if ('caches' in window) {
      caches.open('images-v1').then(cache => {
        cache.match(src).then(response => {
          if (response) {
            setCachedSrc(src);
            setIsLoaded(true);
          } else {
            checkCache();
          }
        });
      });
    } else {
      checkCache();
    }
  }, [src]);

  // Cache the image when it loads
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Store in browser cache
    if ('caches' in window) {
      caches.open('images-v1').then(cache => {
        fetch(src).then(response => {
          cache.put(src, response);
        });
      });
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`cached-image-container ${className}`} style={style}>
      {!isLoaded && !hasError && (
        <div className="image-loading-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      {isLoaded && (
        <img
          ref={imgRef}
          src={cachedSrc || src}
          alt={alt}
          className={`cached-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding="async"
        />
      )}
      
      {hasError && (
        <div className="image-error">
          <div className="error-content">Failed to load image</div>
        </div>
      )}
    </div>
  );
};

export default CachedImage;
