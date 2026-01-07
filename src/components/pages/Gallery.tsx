import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';
import { Button } from '../ui/Button';

export const Gallery: React.FC = () => {
  // State for Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const imageRef = useRef<HTMLImageElement>(null);

  // Guaranteed reliable Unsplash IDs
  const galleryImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000", // Online Placeholder
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1595805200312-d04b66d49925?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
  ];

  // Reset state when closing or opening new image
  const handleOpen = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsDragging(false);
  };

  // Zoom Logic
  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4)); // Max zoom 4x
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 }); // Reset pan if zoomed out fully
      return newScale;
    });
  };

  const handleReset = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Pan Logic (Mouse)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault(); // Prevent default drag behavior
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel Zoom Support
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (selectedImage) {
        e.preventDefault();
        if (e.deltaY < 0) {
          setScale(prev => Math.min(prev + 0.2, 4));
        } else {
          setScale(prev => {
             const newScale = Math.max(prev - 0.2, 1);
             if (newScale === 1) setPosition({ x: 0, y: 0 });
             return newScale;
          });
        }
      }
    };

    if (selectedImage) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') handleClose();
      });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', () => {});
    };
  }, [selectedImage]);


  return (
    <div className="pt-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Mockup Gallery</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Explore our curated selection of premium room scenes available for your art.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((imgUrl, i) => (
                <div 
                    key={i} 
                    className="group relative overflow-hidden rounded-xl shadow-sm cursor-zoom-in bg-slate-100"
                    onClick={() => handleOpen(imgUrl)}
                >
                    <img 
                        src={imgUrl} 
                        alt={`Gallery Item ${i + 1}`} 
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                            <ZoomIn size={16} /> View Detail
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleClose}
        >
            {/* Toolbar */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
                <Button 
                    variant="secondary" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                    onClick={(e) => { e.stopPropagation(); handleClose(); }}
                >
                    <X size={24} />
                </Button>
            </div>

            {/* Bottom Controls */}
            <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={handleZoomOut} className="text-white hover:text-brand-400 p-2 transition-colors disabled:opacity-50" disabled={scale <= 1}>
                    <ZoomOut size={20} />
                </button>
                <span className="text-white font-mono text-sm w-12 text-center">{Math.round(scale * 100)}%</span>
                <button onClick={handleZoomIn} className="text-white hover:text-brand-400 p-2 transition-colors disabled:opacity-50" disabled={scale >= 4}>
                    <ZoomIn size={20} />
                </button>
                <div className="w-px h-6 bg-white/20 mx-2"></div>
                <button onClick={handleReset} className="text-white hover:text-brand-400 p-2 transition-colors" title="Reset View">
                    <RotateCcw size={20} />
                </button>
            </div>
            
            {/* Image Container */}
            <div 
                className="w-full h-full flex items-center justify-center overflow-hidden p-4 md:p-10 cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img 
                    ref={imageRef}
                    src={selectedImage}
                    alt="Lightbox View"
                    className="max-w-full max-h-full object-contain transition-transform duration-75 ease-linear select-none shadow-2xl"
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                    }}
                    draggable={false}
                />
                
                {scale > 1 && !isDragging && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 animate-pulse">
                         <Move className="text-white drop-shadow-lg" size={48} />
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};