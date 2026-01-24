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

// Adobe Premiere Pro Logo Component
const PremiereLogo = () => (
  <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-sm flex items-center justify-center shadow-sm">
    <span className="text-white text-xs font-bold">Pr</span>
  </div>
);

export function SkillsShowcase() {
  const skills = [
    { icon: <PhotoshopLogo />, name: "Adobe Photoshop" },
    { icon: <IllustratorLogo />, name: "Adobe Illustrator" },
    { icon: <InDesignLogo />, name: "Adobe InDesign" },
    { icon: <AfterEffectsLogo />, name: "Adobe After Effects" },
    { icon: <PremiereLogo />, name: "Adobe Premiere Pro" },
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center"
            >
              {/* Logo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation">
                <div className="text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>
              
              {/* Skill name */}
              <div className="mt-2 text-center">
                <span className="text-xs sm:text-sm text-muted-foreground leading-tight block group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Description */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional tools and design expertise for creating compelling visual solutions
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}