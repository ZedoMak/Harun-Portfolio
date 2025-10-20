import { motion } from "motion/react";
import { 
  Shirt, 
  Coffee, 
  Megaphone, 
  Gift,
  Package
} from "lucide-react";

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
    { icon: <PhotoshopLogo />, name: "Adobe Photoshop", position: { top: 20, left: 20 } },
    { icon: <IllustratorLogo />, name: "Adobe Illustrator", position: { top: 15, left: 35 } },
    { icon: <InDesignLogo />, name: "Adobe InDesign", position: { top: 18, left: 50 } },
    { icon: <AfterEffectsLogo />, name: "Adobe After Effects", position: { top: 22, left: 65 } },
    { icon: <FigmaLogo />, name: "Figma", position: { top: 35, left: 75 } },
    { icon: <CanvaLogo />, name: "Canva", position: { top: 45, left: 80 } },
    { icon: <CorelDrawLogo />, name: "CorelDRAW", position: { top: 60, left: 75 } },
    { icon: <Shirt className="w-6 h-6" />, name: "Apparel Design", position: { top: 70, left: 65 } },
    { icon: <Coffee className="w-6 h-6" />, name: "Product Design", position: { top: 75, left: 50 } },
    { icon: <Megaphone className="w-6 h-6" />, name: "Marketing Design", position: { top: 72, left: 35 } },
    { icon: <Gift className="w-6 h-6" />, name: "Event Graphics", position: { top: 65, left: 20 } },
    { icon: <Package className="w-6 h-6" />, name: "Packaging Design", position: { top: 50, left: 15 } },
  ];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background gradient blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gradient-radial from-teal-500/20 via-teal-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Concentric circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Outer circle */}
        <motion.div
          className="absolute w-[500px] h-[250px] border border-teal-300/30 rounded-full"
          style={{ left: '-250px', top: '-125px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle circle */}
        <motion.div
          className="absolute w-[400px] h-[200px] border border-teal-400/40 rounded-full"
          style={{ left: '-200px', top: '-100px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner circle */}
        <motion.div
          className="absolute w-[300px] h-[150px] border border-teal-500/50 rounded-full"
          style={{ left: '-150px', top: '-75px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-white text-4xl font-bold"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            HA
          </motion.div>
        </motion.div>
      </div>

      {/* Skill icons floating around */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute"
          style={{
            top: `${skill.position.top}%`,
            left: `${skill.position.left}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            y: {
              duration: 2 + (index * 0.2),
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.2,
            zIndex: 10
          }}
        >
          <div className="group relative">
            <div className="w-12 h-12 bg-teal-500/10 dark:bg-teal-400/20 backdrop-blur-sm border border-teal-200/50 dark:border-teal-400/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-teal-500/20 dark:hover:bg-teal-400/30">
              {skill.icon}
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-background/95 backdrop-blur-sm text-foreground px-3 py-1 rounded-md shadow-lg border border-border text-sm whitespace-nowrap">
                {skill.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background/95"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {skills.slice(0, 6).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-px bg-gradient-to-r from-transparent via-teal-300/30 to-transparent origin-bottom"
            style={{
              height: '120px',
              transform: `rotate(${index * 60}deg)`,
              transformOrigin: 'bottom center',
            }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Specializing in{" "}
          <span className="text-teal-500 font-medium">graphics design</span>{" "}
          solutions
        </motion.p>
        <motion.p
          className="text-sm text-muted-foreground mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          From custom apparel to promotional materials and branding
        </motion.p>
      </div>
    </div>
  );
}