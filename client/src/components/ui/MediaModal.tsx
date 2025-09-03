import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export function MediaModal({ isOpen, onClose, src, alt, type }: MediaModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Media content */}
      <div className="max-w-[95vw] max-h-[95vh] p-4">
        {type === 'video' ? (
          <video
            src={src}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleMediaLoad}
            style={{
              imageRendering: 'crisp-edges' as const,
            } as React.CSSProperties}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onLoad={handleMediaLoad}
            style={{
              imageRendering: 'crisp-edges' as const,
            } as React.CSSProperties}
          />
        )}
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-4xl">
        <p className="text-white/90 text-sm text-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
          {alt}
        </p>
      </div>
    </div>
  );
}