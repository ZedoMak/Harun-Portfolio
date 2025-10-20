
import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface HorizontalShowcaseProps {
  children: React.ReactNode[];
  direction?: 'left' | 'right';
  staggerDelay?: number;
  className?: string;
}

export function HorizontalShowcase({ 
  children, 
  direction = 'left', 
  staggerDelay = 150,
  className = '' 
}: HorizontalShowcaseProps) {
  const { containerRef, visibleItems } = useStaggeredAnimation(children.length, { staggerDelay });

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-6 ${className}`}>
      {children.map((child, index) => {
        const isVisible = visibleItems.has(index);
        const translateClass = direction === 'left' ? '-translate-x-full' : 'translate-x-full';
        
        return (
          <div
            key={index}
            className={`transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : `opacity-0 ${translateClass} scale-95`
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxScroll({ children, speed = 0.5, className = '' }: ParallaxScrollProps) {
  const [scrollY, setScrollY] = React.useState(0);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setScrollY(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
    >
      {children}
    </div>
  );
}