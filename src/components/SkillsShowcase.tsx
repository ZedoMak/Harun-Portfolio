import { 
  Shirt, 
  Coffee, 
  Megaphone, 
  Gift,
  Package
} from "lucide-react";
import { FadeInUp } from "./animations/ScrollAnimations";

// Adobe Photoshop Logo Component
const PhotoshopLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Ps</span>
  </div>
);

// Adobe Illustrator Logo Component
const IllustratorLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Ai</span>
  </div>
);

// Adobe InDesign Logo Component
const InDesignLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-pink-600 to-pink-800 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Id</span>
  </div>
);

// Figma Logo Component
const FigmaLogo = () => (
  <div className="w-6 h-6 relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 bg-orange-500 rounded-full absolute -top-0.5 left-1"></div>
      <div className="w-3 h-3 bg-purple-500 rounded-full absolute -top-0.5 right-1"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 left-1"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-0 right-1"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
);

// Canva Logo Component
const CanvaLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">C</span>
  </div>
);

// CorelDRAW Logo Component
const CorelDrawLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-800 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Cd</span>
  </div>
);

// After Effects Logo Component
const AfterEffectsLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-purple-700 to-purple-900 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Ae</span>
  </div>
);

export function SkillsShowcase() {
  const skills = [
    { icon: <PhotoshopLogo />, name: "Adobe Photoshop" },
    { icon: <IllustratorLogo />, name: "Adobe Illustrator" },
    { icon: <InDesignLogo />, name: "Adobe InDesign" },
    { icon: <AfterEffectsLogo />, name: "Adobe After Effects" },
    { icon: <FigmaLogo />, name: "Figma" },
    { icon: <CanvaLogo />, name: "Canva" },
    { icon: <CorelDrawLogo />, name: "CorelDRAW" },
    { icon: <Shirt className="w-6 h-6" />, name: "Apparel Design" },
    { icon: <Coffee className="w-6 h-6" />, name: "Product Design" },
    { icon: <Megaphone className="w-6 h-6" />, name: "Marketing Design" },
    { icon: <Gift className="w-6 h-6" />, name: "Event Graphics" },
    { icon: <Package className="w-6 h-6" />, name: "Packaging Design" },
  ];

  return (
    <FadeInUp>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative"
            >
              <div className="w-full aspect-square bg-card hover:bg-teal-500/10 dark:hover:bg-teal-400/20 border border-teal-200/50 dark:border-teal-400/30 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:border-teal-500 dark:hover:border-teal-400 touch-manipulation">
                <div className="text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300 scale-90 sm:scale-100">
                  {skill.icon}
                </div>
              </div>
              
              {/* Tooltip - Hidden on mobile, shown on hover for desktop */}
              <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-background/95 backdrop-blur-sm text-foreground px-3 py-1 rounded-md shadow-lg border border-border text-sm whitespace-nowrap">
                  {skill.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background/95"></div>
                </div>
              </div>
              
              {/* Mobile skill name - visible on mobile devices */}
              <div className="block sm:hidden mt-2 text-center">
                <span className="text-xs text-muted-foreground leading-tight block">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile-friendly description */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional tools and design expertise for creating compelling visual solutions
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}