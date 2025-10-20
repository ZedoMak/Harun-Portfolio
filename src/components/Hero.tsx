import profileImage from '@/assets/images/harunPfp.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from "./animations/ScrollAnimations";

export function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content - Left Side */}
          <FadeInLeft className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Headline */}
            <div className="space-y-6">
              {/* Availability Badge */}
              <FadeInUp options={{ delay: 200 }}>
                <div className="flex justify-center lg:justify-start">
                  <div className="group inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full border border-teal-200 dark:border-teal-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available for freelance work</span>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp options={{ delay: 400 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight">
                  Hello, I'm{" "}
                  <span className="text-teal-500 block lg:inline">Harun Ahmed</span>
                </h1>
              </FadeInUp>
              
              <FadeInUp options={{ delay: 600 }}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl lg:max-w-none">
                  A passionate graphics designer specializing in custom apparel, 
                  promotional materials, and creative designs for mugs, t-shirts, 
                  hoodies, and memorable branding solutions.
                </p>
              </FadeInUp>
            </div>

            {/* CTA Buttons */}
            <FadeInUp options={{ delay: 800 }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                  onClick={scrollToPortfolio}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-6 rounded-full transition-all duration-300 w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Hire Me
                </Button>
              </div>
            </FadeInUp>
          </FadeInLeft>

          {/* Profile Image - Right Side */}
          <FadeInRight className="flex justify-center lg:justify-start order-1 lg:order-2">
            <ScaleIn options={{ delay: 300 }}>
              <div className="relative animate-float-slow">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-2xl">
                  <ImageWithFallback
                    src={profileImage}
                    alt="Harun Ahmed - Professional Graphics Designer Portrait"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </ScaleIn>
          </FadeInRight>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}