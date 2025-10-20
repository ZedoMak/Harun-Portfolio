import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, Play, Camera, Video, Palette, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  type: 'design' | 'photo' | 'video';
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
  link: string;
  videoUrl?: string;
}

interface ScrollGallerySectionProps {
  title: string;
  subtitle: string;
  items: GalleryItem[];
  direction?: 'left' | 'right';
  onItemClick?: (item: GalleryItem) => void;
}

export function ScrollGallerySection({ 
  title, 
  subtitle, 
  items, 
  direction = 'left',
  onItemClick 
}: ScrollGallerySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [100, -100] : [-100, 100]
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'design': return <Palette className="w-4 h-4" />;
      case 'photo': return <Camera className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl mb-4">{title}</h3>
          <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>

      <motion.div
        ref={scrollRef}
        style={{ x }}
        className="flex gap-8 px-6"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
            onClick={() => onItemClick?.(item)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border border-border/50 hover:border-teal-200 dark:hover:border-teal-800">
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Type Indicator */}
                <div className="absolute top-4 left-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-teal-600 shadow-lg">
                  {getTypeIcon(item.type)}
                </div>

                {/* Video Play Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-teal-500/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full border border-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          onItemClick?.(item);
                        }}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full border border-white/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.link, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg group-hover:text-teal-500 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h4>
                  <Badge 
                    variant="secondary" 
                    className="text-xs ml-2 bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
                  >
                    {item.category}
                  </Badge>
                </div>
                
                {item.client && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Client:</span>
                    <span className="font-medium">{item.client}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-teal-200 text-teal-600 dark:border-teal-800 dark:text-teal-400"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-teal-200 text-teal-600 dark:border-teal-800 dark:text-teal-400"
                    >
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}