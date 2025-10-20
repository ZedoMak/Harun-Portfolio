import { useState } from 'react';
import { motion } from 'motion/react';
import { InfiniteScrollGallery, type GalleryItem } from './InfiniteScrollGallery';
import { ProjectLightbox } from './ProjectLightbox';
import { FloatingElements } from './animations/FloatingElements';
import { FadeInUp } from './animations/ScrollAnimations';

interface Project {
  id: number;
  title: string;
  category: string;
  type: 'clothing' | 'menu' | 'advertising' | 'branding' | 'packaging';
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
  link: string;
  detailedDescription?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export function CinematicPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const projects: Project[] = [
    // Clothing Graphics Section
    {
      id: 1,
      title: "Custom T-Shirt Design",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Eye-catching t-shirt graphics that blend creativity with modern aesthetics.",
      detailedDescription: "Custom t-shirt designs featuring bold graphics, typography, and illustrations. Each design is crafted to be print-ready with consideration for fabric type, color schemes, and target audience preferences.",
      image: "https://images.unsplash.com/photo-1618677603544-51162346e165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1ODk2NTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["T-Shirt Design", "Apparel Graphics", "Screen Printing", "Fashion"],
      client: "Urban Style Co.",
      year: "2024",
      link: "#",
      aspectRatio: "square"
    },
    {
      id: 2,
      title: "Premium Hoodie Graphics",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Sophisticated hoodie designs for lifestyle and streetwear brands.",
      detailedDescription: "High-quality hoodie graphics that combine contemporary design trends with brand identity. Features include embroidered logos, printed graphics, and color-coordinated designs perfect for modern streetwear.",
      image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBkZXNpZ24lMjBhcHBhcmVsfGVufDF8fHx8MTc1ODk2Njg0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Hoodie Design", "Streetwear", "Embroidery", "Urban Fashion"],
      client: "Street Culture Brand",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },
    {
      id: 3,
      title: "Sports Jersey Design",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Professional sports jersey designs with team branding and player customization.",
      detailedDescription: "Complete sports jersey design system including team logos, number styling, sponsor placements, and color variations. Designed for performance wear with consideration for fabric stretch and durability.",
      image: "https://images.unsplash.com/photo-1736485956195-9cb4d5d997dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBqZXJzZXklMjBkZXNpZ258ZW58MXx8fHwxNzU4OTY1Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sports Jersey", "Team Branding", "Athletic Wear", "Custom Numbers"],
      client: "City Sports League",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },
    {
      id: 4,
      title: "Custom Mug Designs",
      category: "Product Graphics",
      type: "packaging",
      description: "Personalized mug graphics for gifts, corporate branding, and special occasions.",
      detailedDescription: "Creative mug designs ranging from corporate branding to personalized gifts. Each design considers print limitations, durability, and visual impact when displayed or in use.",
      image: "https://images.unsplash.com/photo-1614833193447-427b75eee2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWclMjBkZXNpZ24lMjBwcmludGluZ3xlbnwxfHx8fDE3NTg5NjY4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mug Design", "Product Graphics", "Corporate Gifts", "Personalization"],
      client: "Coffee Culture Co.",
      year: "2024",
      link: "#",
      aspectRatio: "square"
    },

    // Menu Design Section
    {
      id: 5,
      title: "Restaurant Menu Design",
      category: "Menu Design",
      type: "menu",
      description: "Elegant restaurant menu layouts that enhance dining experience and brand identity.",
      detailedDescription: "Comprehensive menu design that balances visual appeal with functionality. Includes careful typography hierarchy, appetizing food photography, and organized layout that guides customer choices while reflecting restaurant ambiance.",
      image: "https://images.unsplash.com/photo-1575394331472-128c15dd26c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWVudSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg5NjY4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Restaurant Menu", "Food Photography", "Typography", "Layout Design"],
      client: "Fine Dining Restaurant",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },
    {
      id: 6,
      title: "Cafe Menu Layout",
      category: "Menu Design",
      type: "menu",
      description: "Modern cafe menu design with focus on beverages and light food options.",
      detailedDescription: "Trendy cafe menu featuring specialty coffee drinks, pastries, and light meals. Design incorporates warm colors, inviting typography, and clear price visibility to create a welcoming atmosphere.",
      image: "https://images.unsplash.com/photo-1684595011788-d7ac732cd6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbWVudSUyMGxheW91dHxlbnwxfHx8fDE3NTg5NjY4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Cafe Menu", "Coffee Shop", "Beverage Design", "Modern Layout"],
      client: "Artisan Coffee House",
      year: "2024",
      link: "#",
      aspectRatio: "landscape"
    },

    // Advertisement & Marketing Section
    {
      id: 7,
      title: "Digital Advertisement Banner",
      category: "Advertisement",
      type: "advertising",
      description: "High-impact digital banners for social media and web advertising campaigns.",
      detailedDescription: "Dynamic advertisement banners designed for digital platforms including Facebook, Instagram, Google Ads, and website banners. Features compelling visuals, clear call-to-action, and brand-consistent messaging.",
      image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2VtZW50JTIwYmFubmVyJTIwZGVzaWdufGVufDF8fHx8MTc1ODk2Njg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Digital Banners", "Social Media Ads", "Web Marketing", "Campaign Design"],
      client: "Digital Marketing Agency",
      year: "2024",
      link: "#",
      aspectRatio: "landscape"
    },
    {
      id: 8,
      title: "Wedding Invitation & Flyer",
      category: "Advertisement",
      type: "advertising",
      description: "Elegant wedding invitations and promotional flyers for special events.",
      detailedDescription: "Beautiful wedding invitation suites and event flyers that capture the romance and significance of special occasions. Includes save-the-dates, ceremony cards, and reception details with cohesive design elements.",
      image: "https://images.unsplash.com/photo-1633051567046-844064059c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmx5ZXIlMjBkZXNpZ258ZW58MXx8fHwxNzU4OTY2ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wedding Invitations", "Event Flyers", "Elegant Design", "Print Materials"],
      client: "Wedding Planners Elite",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },
    {
      id: 9,
      title: "Birthday Celebration Invites",
      category: "Advertisement",
      type: "advertising",
      description: "Fun and vibrant birthday invitation designs for all ages and themes.",
      detailedDescription: "Creative birthday invitation designs ranging from children's parties to milestone celebrations. Each design captures the joy and excitement of the occasion with personalized elements and party themes.",
      image: "https://images.unsplash.com/photo-1739909198159-a834175bd911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGludml0YXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzU4OTY2ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Birthday Invitations", "Party Design", "Celebration Graphics", "Custom Themes"],
      client: "Party Perfect Events",
      year: "2024",
      link: "#",
      aspectRatio: "square"
    },
    {
      id: 10,
      title: "Promotional Poster Design",
      category: "Advertisement",
      type: "advertising",
      description: "Eye-catching posters for events, products, and brand promotions.",
      detailedDescription: "Dynamic poster designs that grab attention and communicate key messages effectively. Perfect for concerts, product launches, sales events, and brand awareness campaigns with bold visuals and clear messaging.",
      image: "https://images.unsplash.com/photo-1621974714993-465ae51a4483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjBncmFwaGljfGVufDF8fHx8MTc1ODk2Njg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Poster Design", "Event Promotion", "Brand Marketing", "Visual Communication"],
      client: "Event Marketing Co.",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },

    // Branding & Identity Section
    {
      id: 11,
      title: "Brand Logo Design",
      category: "Branding",
      type: "branding",
      description: "Memorable logo designs that capture brand essence and market positioning.",
      detailedDescription: "Complete logo design process from concept to final execution. Includes brand research, competitor analysis, multiple concept explorations, and final logo applications across various media formats.",
      image: "https://images.unsplash.com/photo-1757283491661-deaef4a1c438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzU4OTY2ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Logo Design", "Brand Identity", "Corporate Branding", "Visual Identity"],
      client: "Tech Startup Inc.",
      year: "2024",
      link: "#",
      aspectRatio: "square"
    },
    {
      id: 12,
      title: "Business Card Design",
      category: "Branding",
      type: "branding",
      description: "Professional business cards that make lasting first impressions.",
      detailedDescription: "Sophisticated business card designs that reflect professionalism and brand identity. Includes various finish options, typography treatments, and layout variations to suit different business needs.",
      image: "https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODczNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Business Cards", "Professional Design", "Corporate Identity", "Print Design"],
      client: "Professional Services",
      year: "2024",
      link: "#",
      aspectRatio: "landscape"
    },
    {
      id: 13,
      title: "Social Media Graphics",
      category: "Branding",
      type: "branding",
      description: "Cohesive social media designs that strengthen brand presence across platforms.",
      detailedDescription: "Complete social media design package including post templates, story designs, cover photos, and profile graphics. Ensures consistent brand messaging across Facebook, Instagram, Twitter, and LinkedIn.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NTg4NzMwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Social Media", "Digital Marketing", "Brand Consistency", "Content Design"],
      client: "Social Media Agency",
      year: "2024",
      link: "#",
      aspectRatio: "square"
    },

    // Packaging & Product Graphics
    {
      id: 14,
      title: "Product Packaging Design",
      category: "Packaging",
      type: "packaging",
      description: "Innovative packaging designs that protect products and attract customers.",
      detailedDescription: "Complete packaging design solutions from concept to production-ready files. Includes structural design, graphics application, material considerations, and sustainability factors for retail success.",
      image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1ODk2Njg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Packaging Design", "Product Graphics", "Retail Design", "Brand Application"],
      client: "Consumer Goods Co.",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    },
    {
      id: 15,
      title: "Product Packaging Design",
      category: "Packaging",
      type: "packaging",
      description: "Innovative packaging designs that protect products and attract customers.",
      detailedDescription: "Complete packaging design solutions from concept to production-ready files. Includes structural design, graphics application, material considerations, and sustainability factors for retail success.",
      image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc1ODk2Njg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Packaging Design", "Product Graphics", "Retail Design", "Brand Application"],
      client: "Consumer Goods Co.",
      year: "2024",
      link: "#",
      aspectRatio: "portrait"
    }
  ];

  // Filter projects by category
  const clothingProjects = projects.filter(p => p.category === "Clothing Graphics");
  const menuProjects = projects.filter(p => p.category === "Menu Design");
  const advertisementProjects = projects.filter(p => p.category === "Advertisement");
  const brandingProjects = projects.filter(p => p.category === "Branding");
  const packagingProjects = projects.filter(p => p.category === "Packaging");

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProject(null);
  };

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    }
    
    setSelectedProject(projects[newIndex]);
  };

  return (
    <section id="portfolio" className="relative bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl md:text-6xl mb-6">Graphics Design Portfolio</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my comprehensive graphics design portfolio featuring clothing graphics, menu designs, 
              advertisement materials, branding solutions, and innovative packaging designs. Every project 
              crafted with creativity, precision, and market appeal.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Clothing Graphics Portfolio - Infinite Horizontal Scroll Left */}
      <InfiniteScrollGallery
        title="Clothing Graphics"
        subtitle="Custom apparel designs for t-shirts, hoodies, jerseys, and fashion brands that make a statement."
        items={clothingProjects}
        direction="left"
        speed="medium"
        onItemClick={(item: GalleryItem) => openLightbox(item as unknown as Project)}
      />

      {/* Menu Design Portfolio - Infinite Horizontal Scroll Right */}
      <InfiniteScrollGallery
        title="Menu Design"
        subtitle="Restaurant and cafe menu layouts that enhance dining experiences and showcase culinary offerings."
        items={menuProjects}
        direction="right"
        speed="slow"
        onItemClick={(item: GalleryItem) => openLightbox(item as unknown as Project)}
      />

      {/* Advertisement Portfolio - Infinite Horizontal Scroll Left */}
      <InfiniteScrollGallery
        title="Advertisement & Marketing"
        subtitle="Banners, flyers, invitations, and promotional materials that capture attention and drive results."
        items={advertisementProjects}
        direction="left"
        speed="fast"
        onItemClick={(item: GalleryItem) => openLightbox(item as unknown as Project)}
      />

      {/* Branding Portfolio - Infinite Horizontal Scroll Right */}
      <InfiniteScrollGallery
        title="Branding & Identity"
        subtitle="Logo designs, business cards, and social media graphics that build strong brand presence."
        items={brandingProjects}
        direction="right"
        speed="medium"
        onItemClick={(item: GalleryItem) => openLightbox(item as unknown as Project)}
      />

      {/* Packaging Portfolio - Infinite Horizontal Scroll Left */}
      <InfiniteScrollGallery
        title="Packaging & Products"
        subtitle="Innovative packaging designs and product graphics that stand out on shelves and connect with consumers."
        items={packagingProjects}
        direction="left"
        speed="slow"
        onItemClick={(item: GalleryItem) => openLightbox(item as unknown as Project)}
      />

      {/* Call to Action */}
      <div className="relative z-10 py-20 px-6">
        <FadeInUp className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl mb-6">
            Ready to elevate your brand with stunning graphics?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next graphics design project. From clothing designs and menu layouts 
            to advertisement campaigns and brand identity, I'll bring your vision to life with creativity and precision.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </FadeInUp>
      </div>

      {/* Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={() => navigateProject('next')}
        onPrev={() => navigateProject('prev')}
      />
    </section>
  );
}