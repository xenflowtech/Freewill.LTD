import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  loading = 'eager',
  onLoad,
  onError
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`optimized-image ${className}`}
      style={style}
      onLoad={onLoad}
      onError={onError}
      loading={loading}
      decoding="async"
    />
  );
};

export default OptimizedImage;
