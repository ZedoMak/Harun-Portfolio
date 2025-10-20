import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, User, Tag, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
  link: string;
  videoUrl?: string;
  detailedDescription?: string;
}

interface ProjectLightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ProjectLightbox({ project, isOpen, onClose, onNext, onPrev }: ProjectLightboxProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsVideoPlaying(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl max-h-[90vh] mx-4 bg-background rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="grid lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
              {/* Media Section */}
              <div className="relative bg-gray-100 dark:bg-gray-900">
                {project.type === 'video' ? (
                  <div className="aspect-video relative">
                    {!isVideoPlaying ? (
                      <>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border-2 border-white/50">
                            <Play className="w-12 h-12 text-white fill-white" />
                          </div>
                        </button>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-4">
                            <Play className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-lg">Video Preview</p>
                            <p className="text-sm opacity-75">Full video available on request</p>
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => setIsVideoPlaying(false)}
                            className="text-white border-white/50 hover:bg-white/10"
                          >
                            <Pause className="w-4 h-4 mr-2" />
                            Back to Thumbnail
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-medium mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {project.detailedDescription && (
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {project.detailedDescription}
                    </p>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  {project.client && (
                    <div className="flex items-center gap-3 text-sm">
                      <User className="w-4 h-4 text-teal-500" />
                      <span className="text-muted-foreground">Client:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-teal-500" />
                    <span className="text-sm text-muted-foreground">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-teal-200 text-teal-600 dark:border-teal-800 dark:text-teal-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => window.open(project.link, '_blank')}
                    className="bg-teal-500 hover:bg-teal-600 text-white flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}