 

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-teal-300/20 rounded-full animate-rotate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-teal-500/25 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-600/30 rounded-full animate-rotate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-teal-400/20 rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/2 w-6 h-1 bg-gradient-to-r from-teal-400/20 to-transparent rotate-45 animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-8 h-1 bg-gradient-to-r from-transparent to-teal-300/25 rotate-12 animate-rotate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-6 bg-gradient-to-b from-teal-500/20 to-transparent rotate-30 animate-float-slow" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
}

interface ParticleFieldProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

export function ParticleField({ density = 'medium', className = '' }: ParticleFieldProps) {
  const particleCount = {
    low: 8,
    medium: 12,
    high: 16,
  }[density];

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-teal-400/20 rounded-full animate-float-slow"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}