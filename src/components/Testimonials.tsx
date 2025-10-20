import { useState, useEffect } from "react";
const imgEllipse21 = "https://unsplash.com/photos/a-person-wearing-a-blue-mask-with-a-black-background-d4PPeyLyQEs";
import svgPaths from "../imports/svg-6oiz5hy205";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Star Rating Component
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5).keys()].map((index) => (
        <div key={index} className="w-6 h-6 relative">
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 26">
            <path 
              d={svgPaths.pc42afc0} 
              fill={index < rating ? "#14b8a6" : "#374151"} 
            />
          </svg>
        </div>
      ))}
      <span className="ml-2 text-white font-medium text-lg">{rating}.0</span>
    </div>
  );
}

// Quote Icon Component
function QuoteIcon() {
  return (
    <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <path d={svgPaths.p323a5500} fill="#667085" fillOpacity="0.3" />
        <path d={svgPaths.pfad0700} fill="#667085" fillOpacity="0.3" />
      </svg>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, isActive }: { testimonial: any; isActive: boolean }) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 mx-auto max-w-2xl relative min-h-[300px] flex flex-col">
        <QuoteIcon />
        
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-400/50">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
            <p className="text-gray-300 text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Testimonial Text */}
        <div className="flex-1">
          <p className="text-gray-200 leading-relaxed text-base">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );
}

// Decorative Elements
function DecorativeElements() {
  return (
    <>
      {/* Top right decorative element */}
      <div className="absolute top-16 right-20 w-8 h-8 opacity-60 animate-float">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 33">
          <path 
            d={svgPaths.p11905b20} 
            stroke="#14b8a6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      </div>

      {/* Bottom left decorative element */}
      <div className="absolute bottom-32 left-16 w-6 h-6 opacity-40 animate-float" style={{ animationDelay: '1s' }}>
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <path 
            d={svgPaths.p291c6200} 
            fill="#14b8a6" 
          />
        </svg>
      </div>

      {/* Top left decorative element */}
      <div className="absolute top-32 left-32 w-5 h-5 opacity-50 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-teal-400 rounded-full"></div>
      </div>
    </>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Misrak Legesse",
      role: "Computer Teacher, Graphic Design Teacher",
      image: imgEllipse21,
      rating: 5,
      text: "Working with Harun was a great experience. He is a very talented and dedicated graphic designer. He is very responsive and always willing to help. He is a great team player and always willing to go the extra mile. I highly recommend him for any graphic design project."
    },
    {
      name: "Zerihun Mekonen", 
      role: "Software Developer",
      image: imgEllipse21,
      rating: 5,
      text: "As a software developer, I have worked with Harun on several projects. He is a very talented and dedicated software developer. He is very responsive and always willing to help. He is a great team player and always willing to go the extra mile. I highly recommend him for any software development project."
    },
    {
      name: "Kubra Ahmed",
      role: "Event Coordinator, Celebration Co",
      image: imgEllipse21,
      rating: 5,
      text: "The versatility is incredible! Whether we need eye-catching flyers for corporate events, professional photography during the celebrations, or highlight videos for social media, the quality is consistently outstanding. Fast turnaround and creative solutions every single time."
    },
    {
      name: "Ahmed Kemal",
      role: "Business Owner, Local Cafe",
      image: imgEllipse21,
      rating: 5,
      text: "As a business, finding someone who can handle all our creative needs - from menu design to food photography to promotional videos - has been a game changer. The professional quality and affordable pricing helped us elevate our brand significantly."
    },
    {
      name: "Rebira Tesfaye",
      role: "Shop Owner",
      image: imgEllipse21,
      rating: 5,
      text: "As a shop owner, I have worked with Harun on several projects. He is a very talented and dedicated shop owner. He is very responsive and always willing to help. He is a great team player and always willing to go the extra mile. I highly recommend him for any shop owner project."
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <DecorativeElements />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Testimonials That{" "}
            <br className="hidden sm:block" />
            Speak to{" "}
            <span className="text-teal-400">My Results</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Real feedback from clients who have experienced the impact of professional creative services. 
            From stunning wedding photography to compelling brand design, here's what they have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[350px] md:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-teal-400 hover:text-teal-300 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-teal-400 hover:text-teal-300 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}