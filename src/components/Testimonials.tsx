import { useState, useEffect } from "react";
const imgEllipse21 =
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80";
import svgPaths from "../imports/svg-6oiz5hy205";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LOCAL_STORAGE_KEY = "harun-portfolio-testimonials";

type Testimonial = {
  name: string;
  role: string;
  image?: string;
  rating: number;
  text: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Misrak Legesse",
    role: "Computer Teacher, Graphic Design Teacher",
    image: imgEllipse21,
    rating: 5,
    text: "Working with Harun was a great experience. He is a very talented and dedicated graphic designer. He is very responsive and always willing to help. He is a great team player and always willing to go the extra mile. I highly recommend him for any graphic design project.",
  },
  {
    name: "Zerihun Mekonen",
    role: "Software Developer",
    image: imgEllipse21,
    rating: 5,
    text: "As a software developer, I have worked with Harun on several projects. He is a very talented and dedicated software developer. He is very responsive and always willing to help. He is a great team player and always willing to go the extra mile. I highly recommend him for any software development project.",
  },
  {
    name: "Kubra Ahmed",
    role: "Event Coordinator, Celebration Co",
    image: imgEllipse21,
    rating: 5,
    text: "The versatility is incredible! Whether we need eye-catching flyers for corporate events, professional photography during the celebrations, or highlight videos for social media, the quality is consistently outstanding. Fast turnaround and creative solutions every single time.",
  },
  {
    name: "Ahmed Kemal",
    role: "Business Owner, Local Cafe",
    image: imgEllipse21,
    rating: 5,
    text: "As a business, finding someone who can handle all our creative needs - from menu design to food photography to promotional videos - has been a game changer. The professional quality and affordable pricing helped us elevate our brand significantly.",
  },
  {
    name: "Rebira Tesfaye",
    role: "Shop Owner",
    image: imgEllipse21,
    rating: 5,
    text: "As a shop owner, I have worked with Harun on several projects. He is very talented and dedicated. He is very responsive and always willing to help. He is a great partner and always willing to go the extra mile.",
  },
];

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
function TestimonialCard({
  testimonial,
  isActive,
  canDelete,
  onDelete,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  canDelete: boolean;
  onDelete: () => void;
}) {
  return (
    <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 mx-auto max-w-2xl relative min-h-[300px] flex flex-col">
        <QuoteIcon />

        {/* Delete button (only when allowed) */}
        {canDelete && (
          <button
            onClick={onDelete}
            className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-red-500/80 hover:bg-red-600 text-white shadow-sm transition-colors duration-200"
            type="button"
          >
            Delete
          </button>
        )}
        
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-400/50 flex items-center justify-center bg-teal-900 text-teal-200 text-lg font-semibold">
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            )}
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
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });

  // Load testimonials from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Testimonial[];
        if (Array.isArray(parsed) && parsed.length) {
          setTestimonials(parsed);
        }
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  // Persist testimonials to localStorage when they change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(testimonials));
  }, [testimonials]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

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

  const handleNewTestimonialChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleNewTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name.trim() || !newTestimonial.text.trim()) return;

    const created: Testimonial = {
      name: newTestimonial.name.trim(),
      role: newTestimonial.role.trim() || "Client",
      text: newTestimonial.text.trim(),
      rating: newTestimonial.rating || 5,
      image: undefined,
    };

    setTestimonials((prev) => [...prev, created]);
    setNewTestimonial({ name: "", role: "", text: "", rating: 5 });
    setCurrentIndex(testimonials.length);
  };

  const handleDeleteTestimonial = (index: number) => {
    // Prevent deleting the initial seeded testimonials
    if (index < defaultTestimonials.length) return;

    setTestimonials((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (!updated.length) {
        setCurrentIndex(0);
      } else if (index >= updated.length) {
        setCurrentIndex(updated.length - 1);
      }
      return updated;
    });
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
            From stunning wedding photography to compelling brand design, here's what they have to say — and you can share your experience too.
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
                canDelete={index >= defaultTestimonials.length && index === currentIndex}
                onDelete={() => handleDeleteTestimonial(index)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
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
            </>
          )}

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
      
      {/* Submission Form */}
      <div className="max-w-3xl mx-auto mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
        <h3 className="text-xl md:text-2xl text-white mb-4">Share Your Experience</h3>
        <p className="text-gray-300 text-sm md:text-base mb-6">
          Have we worked together? Leave a short testimonial to help others understand the quality of my work.
        </p>

        <form onSubmit={handleNewTestimonialSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name *"
              value={newTestimonial.name}
              onChange={handleNewTestimonialChange}
              className="w-full rounded-lg px-3 py-2 bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              name="role"
              placeholder="Your role / company"
              value={newTestimonial.role}
              onChange={handleNewTestimonialChange}
              className="w-full rounded-lg px-3 py-2 bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid md:grid-cols-[minmax(0,1fr),auto] gap-4 items-start">
            <textarea
              name="text"
              required
              placeholder="Write a short testimonial about working with me *"
              rows={4}
              value={newTestimonial.text}
              onChange={handleNewTestimonialChange}
              className="w-full rounded-lg px-3 py-2 bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-vertical"
            />
            <div className="flex flex-col gap-2 min-w-[120px]">
              <label className="text-xs text-gray-300">Rating</label>
              <select
                name="rating"
                value={newTestimonial.rating}
                onChange={handleNewTestimonialChange}
                className="rounded-lg px-3 py-2 bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} stars
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </section>
  );
}