// import { useState, useRef } from "react";
// import { motion, useInView } from "motion/react";
// import Masonry from "react-responsive-masonry";
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { Eye, Play, Camera, Video, Palette, ExternalLink } from "lucide-react";
// import { ProjectLightbox } from "./ProjectLightbox";
// import { FloatingElements } from "./animations/FloatingElements";

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   type: 'design' | 'photo' | 'video';
//   description: string;
//   image: string;
//   tags: string[];
//   client?: string;
//   year: string;
//   link: string;
//   videoUrl?: string;
//   detailedDescription?: string;
//   aspectRatio?: 'portrait' | 'landscape' | 'square';
// }

// export function Portfolio() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const projects: Project[] = [
//     // Graphic Design Projects
//     {
//       id: 1,
//       title: "Modern Brand Identity",
//       category: "Design",
//       type: "design",
//       description: "Complete brand identity design including logo, business cards, and marketing materials.",
//       detailedDescription: "A comprehensive brand identity project that involved research, conceptualization, and execution of a complete visual identity system. The design features modern typography, a sophisticated color palette, and versatile logo applications.",
//       image: "https://images.unsplash.com/photo-1754681920848-d20733e4ef23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc1ODI4Njg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Brand Identity", "Logo Design", "Typography", "Color Theory"],
//       client: "TechFlow Solutions",
//       year: "2024",
//       link: "#",
//       aspectRatio: "portrait"
//     },
//     {
//       id: 2,
//       title: "Wedding Photography",
//       category: "Photography",
//       type: "photo",
//       description: "Romantic wedding photography capturing intimate moments and beautiful details.",
//       detailedDescription: "A dreamy garden wedding shoot that perfectly captured the love and joy of the couple's special day. From the intimate first look to the celebration under the stars, every moment was preserved with artistic vision and technical expertise.",
//       image: "https://images.unsplash.com/photo-1718964312269-9f8942618cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgzNzAyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Wedding Photography", "Portrait", "Event Coverage", "Natural Light"],
//       client: "Emma & James",
//       year: "2024",
//       link: "#",
//       aspectRatio: "landscape"
//     },
//     {
//       id: 3,
//       title: "Corporate Video Production",
//       category: "Videography",
//       type: "video",
//       description: "Professional corporate video showcasing company culture and values.",
//       detailedDescription: "A dynamic corporate video that tells the story of innovation and teamwork. Shot with multiple cameras, professional lighting, and complemented with motion graphics and custom sound design.",
//       image: "https://images.unsplash.com/photo-1639701386739-449a0e789367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzU4MzA2MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Corporate Video", "Production", "Motion Graphics", "Storytelling"],
//       client: "Innovate Corp",
//       year: "2024",
//       link: "#",
//       aspectRatio: "landscape",
//       videoUrl: "#"
//     },
//     {
//       id: 4,
//       title: "Luxury Business Cards",
//       category: "Design",
//       type: "design",
//       description: "Premium business card designs with unique finishes and elegant typography.",
//       detailedDescription: "A series of luxury business cards featuring embossed details, foil stamping, and premium paper stock. Each design reflects the client's professional identity while maintaining sophisticated elegance.",
//       image: "https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMGNhcmQlMjBtb2NrdXB8ZW58MXx8fHwxNzU4MzcwMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Business Cards", "Luxury Design", "Print Design", "Foil Stamping"],
//       client: "Elite Professionals",
//       year: "2024",
//       link: "#",
//       aspectRatio: "square"
//     },
//     {
//       id: 5,
//       title: "Brand Identity Suite",
//       category: "Design",
//       type: "design",
//       description: "Complete visual identity including logos, guidelines, and brand applications.",
//       image: "https://images.unsplash.com/photo-1633533451976-992e226e32d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1ODM2OTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Brand Identity", "Logo Design", "Guidelines", "Marketing"],
//       client: "Creative Agency",
//       year: "2024",
//       link: "#",
//       aspectRatio: "portrait"
//     },
//     {
//       id: 6,
//       title: "Birthday Celebration",
//       category: "Photography",
//       type: "photo",
//       description: "Vibrant birthday party photography capturing joy and memorable moments.",
//       image: "https://images.unsplash.com/photo-1656918566254-957a997dbd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU4Mjg5OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Birthday Photography", "Event", "Candid", "Family"],
//       client: "Johnson Family",
//       year: "2024",
//       link: "#",
//       aspectRatio: "square"
//     },
//     {
//       id: 7,
//       title: "Corporate Brochure",
//       category: "Design",
//       type: "design",
//       description: "Professional tri-fold brochure with compelling layout and imagery.",
//       image: "https://images.unsplash.com/photo-1651164653520-010c766aebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJyb2NodXJlJTIwZGVzaWdufGVufDF8fHx8MTc1ODM3MDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Brochure Design", "Corporate", "Layout", "Marketing"],
//       client: "Real Estate Plus",
//       year: "2024",
//       link: "#",
//       aspectRatio: "landscape"
//     },
//     {
//       id: 8,
//       title: "Event Videography",
//       category: "Videography",
//       type: "video",
//       description: "Dynamic event coverage with cinematic storytelling and professional editing.",
//       image: "https://images.unsplash.com/photo-1730673814799-13e6346a9a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvZ3JhcGh5JTIwZmlsbWluZ3xlbnwxfHx8fDE3NTgzNzAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Event Videography", "Cinematic", "Storytelling", "Multi-camera"],
//       client: "Grand Events",
//       year: "2024",
//       link: "#",
//       aspectRatio: "landscape",
//       videoUrl: "#"
//     },
//     {
//       id: 9,
//       title: "Portrait Session",
//       category: "Photography",
//       type: "photo",
//       description: "Professional studio portraits with dramatic lighting and artistic composition.",
//       image: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1ODMxMDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//       tags: ["Portrait Photography", "Studio", "Professional", "Lighting"],
//       client: "Professional Headshots",
//       year: "2024",
//       link: "#",
//       aspectRatio: "portrait"
//     }
//   ];

//   const categories = ["All", "Design", "Photography", "Videography"];

//   const filteredProjects = selectedCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === selectedCategory);

//   const openLightbox = (project: Project) => {
//     setSelectedProject(project);
//     setIsLightboxOpen(true);
//   };

//   const closeLightbox = () => {
//     setIsLightboxOpen(false);
//     setSelectedProject(null);
//   };

//   const navigateProject = (direction: 'next' | 'prev') => {
//     if (!selectedProject) return;
    
//     const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
//     let newIndex;
    
//     if (direction === 'next') {
//       newIndex = (currentIndex + 1) % filteredProjects.length;
//     } else {
//       newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
//     }
    
//     setSelectedProject(filteredProjects[newIndex]);
//   };

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'design': return <Palette className="w-4 h-4" />;
//       case 'photo': return <Camera className="w-4 h-4" />;
//       case 'video': return <Video className="w-4 h-4" />;
//       default: return <Eye className="w-4 h-4" />;
//     }
//   };

//   const getImageHeight = (aspectRatio?: string) => {
//     switch (aspectRatio) {
//       case 'portrait': return 'h-80';
//       case 'landscape': return 'h-56';
//       case 'square': return 'h-64';
//       default: return 'h-72';
//     }
//   };

//   return (
//     <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden" ref={sectionRef}>
//       <FloatingElements />
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl mb-6">Creative Showcase</h2>
//           <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Discover my diverse portfolio spanning graphic design, photography, and videography - 
//             each project crafted with passion, creativity, and attention to detail.
//           </p>
//         </motion.div>

//         {/* Category Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {categories.map((category, index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
//             >
//               <Button
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105 ${
//                   selectedCategory === category
//                     ? "bg-teal-500 hover:bg-teal-600 text-white shadow-lg"
//                     : "border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950 hover:border-teal-600"
//                 }`}
//               >
//                 {category}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Projects Masonry Grid */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           <Masonry columnsCount={3} gutter="24px" className="masonry-grid">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: 0.6 + (index * 0.1),
//                   ease: "easeOut"
//                 }}
//                 className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-border/50 hover:border-teal-200 dark:hover:border-teal-800"
//                 onClick={() => openLightbox(project)}
//               >
//                 {/* Image Container */}
//                 <div className={`relative overflow-hidden ${getImageHeight(project.aspectRatio)}`}>
//                   <ImageWithFallback
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Type Indicator */}
//                   <div className="absolute top-4 left-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-teal-600 shadow-lg">
//                     {getTypeIcon(project.type)}
//                   </div>

//                   {/* Video Play Overlay */}
//                   {project.type === 'video' && (
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                       <div className="bg-teal-500/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
//                         <Play className="w-8 h-8 text-white fill-white" />
//                       </div>
//                     </div>
//                   )}

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="flex gap-2">
//                         <Button
//                           size="sm"
//                           className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full border border-white/30"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             openLightbox(project);
//                           }}
//                         >
//                           <Eye className="w-4 h-4 mr-1" />
//                           View
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full border border-white/30"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             window.open(project.link, '_blank');
//                           }}
//                         >
//                           <ExternalLink className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-3">
//                   <div className="flex justify-between items-start">
//                     <h3 className="font-medium text-lg group-hover:text-teal-500 transition-colors duration-300 line-clamp-2">
//                       {project.title}
//                     </h3>
//                     <Badge 
//                       variant="secondary" 
//                       className="text-xs ml-2 bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
//                     >
//                       {project.category}
//                     </Badge>
//                   </div>
                  
//                   {project.client && (
//                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                       <span>Client:</span>
//                       <span className="font-medium">{project.client}</span>
//                       <span>•</span>
//                       <span>{project.year}</span>
//                     </div>
//                   )}
                  
//                   <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-1">
//                     {project.tags.slice(0, 3).map((tag, tagIndex) => (
//                       <Badge
//                         key={tagIndex}
//                         variant="outline"
//                         className="text-xs border-teal-200 text-teal-600 dark:border-teal-800 dark:text-teal-400"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                     {project.tags.length > 3 && (
//                       <Badge
//                         variant="outline"
//                         className="text-xs border-teal-200 text-teal-600 dark:border-teal-800 dark:text-teal-400"
//                       >
//                         +{project.tags.length - 3}
//                       </Badge>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </Masonry>
//         </motion.div>

//         {/* Lightbox */}
//         <ProjectLightbox
//           project={selectedProject}
//           isOpen={isLightboxOpen}
//           onClose={closeLightbox}
//           onNext={() => navigateProject('next')}
//           onPrev={() => navigateProject('prev')}
//         />
//       </div>
//     </section>
//   );
// }