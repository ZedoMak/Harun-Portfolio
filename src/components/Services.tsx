import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Palette, 
  Coffee, 
  FileText, 
  Megaphone, 
  Gift,
  ArrowRight 
} from "lucide-react";
import { FadeInUp } from "./animations/ScrollAnimations";
import { useStaggeredAnimation } from "./hooks/useScrollAnimation";

export function Services() {
  const { containerRef, visibleItems } = useStaggeredAnimation(5, { 
    staggerDelay: 150,
    threshold: 0.1 
  });
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'design': return "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white";
      case 'apparel': return "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white";
      case 'products': return "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 group-hover:bg-red-500 group-hover:text-white";
      case 'marketing': return "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white";
      case 'events': return "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 group-hover:bg-pink-500 group-hover:text-white";
      default: return "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white";
    }
  };

  const services = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Product Design & Mugs",
      description: "Creative designs for mugs, promotional products, and branded merchandise. Perfect for businesses, events, or personal gifts with professional quality and attention to detail.",
      features: ["Custom Mugs", "Promotional Items", "Product Graphics", "Merchandise Design"],
      popular: true,
      category: "products"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Advertisement & Marketing",
      description: "Eye-catching banners, flyers, and promotional materials that capture attention and drive results. From social media graphics to large format printing designs.",
      features: ["Advertisement Banners", "Marketing Flyers", "Social Media Graphics", "Promotional Design"],
      popular: true,
      category: "marketing"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Print Design & Branding",
      description: "Complete branding solutions including logo design, brand guidelines, business cards, and corporate identity packages that make your business memorable.",
      features: ["Logo Design", "Brand Identity", "Business Cards", "Corporate Branding"],
      popular: false,
      category: "design"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Event Graphics & Invitations",
      description: "Beautiful designs for weddings, birthdays, and special celebrations. From invitations to signage, creating memorable visual experiences for your special moments.",
      features: ["Wedding Invitations", "Birthday Designs", "Event Signage", "Celebration Graphics"],
      popular: true,
      category: "events"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Graphics Design",
      description: "Specialized graphics solutions for unique projects including illustrations, digital art, and creative visuals tailored to your specific needs and vision.",
      features: ["Custom Illustrations", "Digital Art", "Creative Graphics", "Specialized Designs"],
      popular: false,
      category: "design"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">My Services</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bringing your vision to life through creative graphic design solutions. 
            From promotional products to marketing materials and branding, I deliver designs that make an impact.
          </p>
        </FadeInUp>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={index}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <Card
                  className={`group h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    service.popular
                      ? "ring-2 ring-teal-500/20 bg-gradient-to-br from-teal-50 to-white dark:from-teal-950 dark:to-card"
                      : "hover:ring-2 hover:ring-teal-500/20"
                  }`}
                >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-teal-500 text-white px-3 py-1">
                    Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl transition-all duration-300 ${
                    service.popular 
                      ? "bg-teal-500 text-white" 
                      : getCategoryColor(service.category)
                  }`}>
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xl group-hover:text-teal-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-border/50 mt-6">
                  <button className="flex items-center gap-2 font-medium text-teal-500 hover:text-teal-600 transition-colors duration-300 group/btn">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeInUp options={{ delay: 800 }} className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom or have a unique project in mind?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </FadeInUp>
      </div>
    </section>
  );
}