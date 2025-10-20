import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Eye, Play, Camera, Video, Palette, ExternalLink } from 'lucide-react';

interface ShowcaseItem {
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

interface VerticalShowcaseProps {
  items: ShowcaseItem[];
  onItemClick?: (item: ShowcaseItem) => void;
}

export function VerticalShowcase({ items, onItemClick }: VerticalShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create multiple transform values for different scroll effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  

  

  // Split items into columns
  const leftColumnItems = items.filter((_, index) => index % 2 === 0);
  const rightColumnItems = items.filter((_, index) => index % 2 === 1);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Moves up */}
          <motion.div style={{ y: y1 }} className="space-y-8">
            {leftColumnItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group cursor-pointer"
                onClick={() => onItemClick?.(item)}
              >
                <ShowcaseCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Moves down */}
          <motion.div style={{ y: y2 }} className="space-y-8 mt-16 lg:mt-32">
            {rightColumnItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group cursor-pointer"
                onClick={() => onItemClick?.(item)}
              >
                <ShowcaseCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'design': return <Palette className="w-4 h-4" />;
      case 'photo': return <Camera className="w-4 h-4" />;
      case 'video': return <Video className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card border border-border/50 hover:border-teal-200 dark:hover:border-teal-800 transform hover:-translate-y-2">
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
                  // Handle view action
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
  );
}