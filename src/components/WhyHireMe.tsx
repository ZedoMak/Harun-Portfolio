import profileImage from '@/assets/images/harunPfp.png';
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function WhyHireMe() {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed"
    },
    {
      number: "50+",
      label: "Happy Clients"
    },
    {
      number: "2+",
      label: "Years Experience"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Decorative Circles */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Decorative circles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute inset-[10px] border border-teal-200 rounded-full opacity-20"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute inset-[25px] border border-teal-300 rounded-full opacity-30"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute inset-[40px] border border-teal-400 rounded-full opacity-40"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                <div className="absolute inset-[55px] border border-teal-500 rounded-full opacity-50"></div>
              </div>
              
              {/* Main image */}
              <div 
                className="absolute inset-[70px] rounded-full bg-cover bg-top bg-no-repeat shadow-2xl transform scale-110"
                style={{ 
                  backgroundImage: `url('${profileImage}')`,
                  backgroundPosition: 'center top'
                }}
              />
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 animate-float">
                <Card className="p-3 bg-white/90 backdrop-blur-sm border-teal-200">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                </Card>
              </div>
              <div className="absolute bottom-16 left-8 animate-float" style={{ animationDelay: '1s' }}>
                <Card className="p-4 bg-white/90 backdrop-blur-sm border-teal-200">
                  <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                </Card>
              </div>
              <div className="absolute top-1/3 left-0 animate-float" style={{ animationDelay: '2s' }}>
                <Card className="p-2 bg-white/90 backdrop-blur-sm border-teal-200">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                </Card>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl">
                Why{" "}
                <span className="text-teal-500">Hire me</span>?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                With a passion for creative excellence and years of experience in graphic design, 
                I bring your vision to life through custom apparel designs, promotional materials, and memorable branding solutions that make your business stand out.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-semibold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hire me
              </Button>
            </div>

            {/* Additional highlights */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <Card className="p-4 bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800">
                <div className="space-y-2">
                  <div className="text-teal-600 dark:text-teal-400 font-medium">
                    ✨ Creative Excellence
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Award-winning designs that stand out
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800">
                <div className="space-y-2">
                  <div className="text-teal-600 dark:text-teal-400 font-medium">
                    ⚡ Fast Delivery
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Quick turnaround without compromise
                  </p>
                </div>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}