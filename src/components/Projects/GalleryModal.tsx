import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import './GalleryModal.css';

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
}

export function GalleryModal({ isOpen, onClose, images, title }: GalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when modal opens
    useEffect(() => {
        if (isOpen) setCurrentIndex(0);
    }, [isOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="gallery-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="gallery-content"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="gallery-header">
                            <h3>{title}</h3>
                            <button className="close-btn" onClick={onClose}>
                                <X size={24} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="gallery-image-container">
                            {images.length > 0 ? (
                                <>
                                    <motion.img
                                        key={currentIndex}
                                        src={images[currentIndex]}
                                        alt={`${title} - demo ${currentIndex + 1}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="gallery-image"
                                    />

                                    {images.length > 1 && (
                                        <>
                                            <button className="nav-btn prev" onClick={showPrev}>
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button className="nav-btn next" onClick={showNext}>
                                                <ChevronRight size={24} />
                                            </button>

                                            <div className="gallery-dots">
                                                {images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                                        onClick={() => setCurrentIndex(idx)}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="no-images">
                                    <ImageIcon size={48} />
                                    <p>No hay imágenes disponibles para este proyecto</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
