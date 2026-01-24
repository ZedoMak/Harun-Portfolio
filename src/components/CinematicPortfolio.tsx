import { useState } from 'react';
import { motion } from 'motion/react';
import { InfiniteScrollGallery, type GalleryItem } from './InfiniteScrollGallery';
import { ProjectLightbox } from './ProjectLightbox';
import { FloatingElements } from './animations/FloatingElements';
import { FadeInUp } from './animations/ScrollAnimations';
// ... existing imports ...
import infoTechTshirt from '@/assets/images/info-tech-tshirt.jpg';
import abdiBrandCollection from '@/assets/images/abdi-brand-fashion-collectio.jpg';
import abdiBrandShoppingBag from '@/assets/images/abdi-brand-shopping-bag.jpg';
import hrDesignMugs from '@/assets/images/hr-design-mugs.jpg';

import amezingMenu from '@/assets/images/amezing-restaurant-menu.jpg';
import drinksMenu from '@/assets/images/drinks-menu.jpg';
import summerCoffeeMenu from '@/assets/images/summer-coffee-menu.jpg';
import obaaCoffeeShop from '@/assets/images/obaa-coffee-shop.jpg';

import aliyyiBarberBanner from '@/assets/images/aliyyi-barber-shop-banner.jpg';
import infoTechGraphicsClass from '@/assets/images/info-tech-graphics-class.jpg';
import manduCollectionPoster from '@/assets/images/mandu-collection-poster.jpg';
import newShoesCollection from '@/assets/images/new-shoes-collection.jpg';
import happyCoffee from '@/assets/images/happy-coffee.jpg';
import abdiBrandPromotional from '@/assets/images/abdi-brand-promotional.jpg';

import abdiBrandLogo from '@/assets/images/abdi-brand-fashion-logo.jpg';
import abdiAdvertLogo from '@/assets/images/abdi-advert-logo.jpg';
import hrDesignLogo from '@/assets/images/hr-design-logo.jpg';
import baleArsiLogo from '@/assets/images/ale-arsi-agri-logo.jpg';
import summerCoffeeLogo from '@/assets/images/summer-coffee-logo.jpg';
import hrDesignToteBag from '@/assets/images/hr-design-tote-bag.jpg';

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
      title: "INFO-TECH T-Shirt Design",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Professional t-shirt design for a computer training institution.",
      detailedDescription:
        "Custom t-shirt design featuring INFO-TECH branding with clear, readable typography suitable for staff and students.",
      image: infoTechTshirt,
      tags: ["T-Shirt Design", "Apparel Graphics", "Institutional Branding"],
      client: "INFO-TECH Computer Training",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 2,
      title: "ABDI BRAND Fashion Collection",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Fashion collection banner showing shoes, clothes and accessories.",
      detailedDescription:
        "Promotional layout for ABDI BRAND Fashion, combining multiple product shots into one cohesive composition.",
      image: abdiBrandCollection,
      tags: ["Fashion Design", "Banner", "Social Media"],
      client: "ABDI BRAND Fashion",
      year: "2024",
      link: "#",
      aspectRatio: "landscape",
    },
    {
      id: 3,
      title: "Sports Jersey Design",
      category: "Clothing Graphics",
      type: "clothing",
      description: "Professional sports jersey design with team branding.",
      detailedDescription:
        "Custom jersey layout designed to work on athletic fabric, with clear numbers and sponsor areas.",
      image:
        "https://images.unsplash.com/photo-1736485956195-9cb4d5d997dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      tags: ["Sports Jersey", "Team Branding"],
      client: "City Sports League",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 4,
      title: "HR.DESIGN Branded Mugs",
      category: "Product Graphics",
      type: "packaging",
      description: "Corporate mugs with HR.DESIGN logo for branding and giveaways.",
      detailedDescription:
        "Clean mug design that applies the HR.DESIGN mark on a bold, colored surface for maximum visibility.",
      image: hrDesignMugs,
      tags: ["Mug Design", "Merchandise", "Branding"],
      client: "HR.DESIGN",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },

    // Menu Design Section
    {
      id: 5,
      title: "Amezing Restaurant Menu",
      category: "Menu Design",
      type: "menu",
      description: "Full food menu with burgers, sandwiches and pizza.",
      detailedDescription:
        "Restaurant menu layout balancing appetizing food photos, prices, and clear typographic hierarchy.",
      image: amezingMenu,
      tags: ["Restaurant Menu", "Print Design"],
      client: "Amezing Restaurant",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 6,
      title: "Drinks Menu",
      category: "Menu Design",
      type: "menu",
      description: "Colorful drinks and water menu with illustrated beverages.",
      detailedDescription:
        "Vertical drink list organized by category, using bright colors and cocktail illustrations.",
      image: drinksMenu,
      tags: ["Drinks Menu", "Bar Menu"],
      client: "Cafe / Restaurant",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 7,
      title: "Summer Coffee Menu Poster",
      category: "Menu Design",
      type: "menu",
      description: "Coffee-themed poster and menu for a cafe brand.",
      detailedDescription:
        "Poster-style menu featuring branded takeaway cups, coffee beans and decorative illustrations.",
      image: summerCoffeeMenu,
      tags: ["Coffee Menu", "Cafe Branding"],
      client: "Summer Coffee",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 8,
      title: "OBAA Coffee Shop Menu",
      category: "Menu Design",
      type: "menu",
      description: "Menu and packaging mockup for a coffee shop.",
      detailedDescription:
        "Horizontal layout combining coffee cup, bag packaging and brand elements with ordering information.",
      image: obaaCoffeeShop,
      tags: ["Coffee Shop", "Menu & Packaging"],
      client: "OBAA Coffee Shop",
      year: "2024",
      link: "#",
      aspectRatio: "landscape",
    },

    // Advertisement & Marketing Section
    {
      id: 9,
      title: "ALIYYI Barber Shop Banner",
      category: "Advertisement",
      type: "advertising",
      description: "Wide banner showcasing barber services and phone numbers.",
      detailedDescription:
        "Multi-image service strip with bold title and call-to-action for barbershop promotion.",
      image: aliyyiBarberBanner,
      tags: ["Banner", "Barber Shop", "Outdoor Ad"],
      client: "ALIYYI Barber Shop",
      year: "2024",
      link: "#",
      aspectRatio: "landscape",
    },
    {
      id: 10,
      title: "INFO-TECH Graphics Class Poster",
      category: "Advertisement",
      type: "advertising",
      description: "Course promotion poster for graphics design training.",
      detailedDescription:
        "Poster listing course modules (logo, card, banner, etc.) with instructor image and software icons.",
      image: infoTechGraphicsClass,
      tags: ["Course Poster", "Education", "Social Media"],
      client: "INFO-TECH Computer",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 11,
      title: "Mandu Collection Poster",
      category: "Advertisement",
      type: "advertising",
      description: "Fashion promotion featuring sandals, bags and clothing.",
      detailedDescription:
        "Red themed fashion poster with multiple product frames arranged in a dynamic collage.",
      image: manduCollectionPoster,
      tags: ["Fashion Poster", "Collection Launch"],
      client: "Mandu Collection",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 12,
      title: "New Shoes Collection Ad",
      category: "Advertisement",
      type: "advertising",
      description: "High-impact shoe ad with 30% off badge.",
      detailedDescription:
        "Vertical social media creative featuring a single hero sneaker with bold typography and discount highlight.",
      image: newShoesCollection,
      tags: ["Shoes", "Social Media Ad"],
      client: "Fashion Brand",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 13,
      title: "Happy Coffee Social Post",
      category: "Advertisement",
      type: "advertising",
      description: "Coffee social media artwork with bean background.",
      detailedDescription:
        "Square-format artwork combining top-view coffee cup, bean pattern and playful typography.",
      image: happyCoffee,
      tags: ["Coffee", "Social Media", "Digital"],
      client: "Happy Coffee",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 14,
      title: "ABDI BRAND Promotional Layout",
      category: "Advertisement",
      type: "advertising",
      description: "Full promotional layout for ABDI BRAND Fashion store.",
      detailedDescription:
        "Composite design showing perfume, belts, watches and clothing alongside logo and contact details.",
      image: abdiBrandPromotional,
      tags: ["Retail Promotion", "Fashion", "Flyer"],
      client: "ABDI BRAND Fashion",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },

    // Branding & Identity Section
    {
      id: 15,
      title: "ABDI BRAND Fashion Logo",
      category: "Branding",
      type: "branding",
      description: "Primary logo for a fashion brand.",
      detailedDescription:
        "Monogram-style logo with golden gradient and ornamental details used across fashion materials.",
      image: abdiBrandLogo,
      tags: ["Logo", "Fashion", "Brand Identity"],
      client: "ABDI BRAND Fashion",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 16,
      title: "ABDI ADVERT Logo",
      category: "Branding",
      type: "branding",
      description: "Logo for an advertising and media company.",
      detailedDescription:
        "Letter A combined with a microphone symbol, designed with 3D golden style for strong presence.",
      image: abdiAdvertLogo,
      tags: ["Logo", "Media", "Advertising"],
      client: "ABDI ADVERT",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 17,
      title: "HR.DESIGN Logo",
      category: "Branding",
      type: "branding",
      description: "Minimal logo for a design studio.",
      detailedDescription:
        "Pen-nib based mark representing creativity and design, used on signage, mugs and tote bags.",
      image: hrDesignLogo,
      tags: ["Logo", "Studio", "Branding"],
      client: "HR.DESIGN",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 18,
      title: "BALE & ARSI Agri Input Supplier Logo",
      category: "Branding",
      type: "branding",
      description: "Agricultural company logo with plant and gear motif.",
      detailedDescription:
        "Circular logo merging crop fields, leaves and gear teeth to communicate both farming and technology.",
      image: baleArsiLogo,
      tags: ["Logo", "Agriculture"],
      client: "BALE & ARSI Agri Inputs Supplier",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
    {
      id: 19,
      title: "Summer Coffee Logo",
      category: "Branding",
      type: "branding",
      description: "Round black and white logo for a coffee shop.",
      detailedDescription:
        "Badge-style logo with cup, beans and slogan ‘Good Coffee Good Mood’, suitable for stamps and packaging.",
      image: summerCoffeeLogo,
      tags: ["Logo", "Coffee Shop"],
      client: "Summer Coffee",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },

    // Packaging & Product Graphics
    {
      id: 20,
      title: "ABDI BRAND Shopping Bag",
      category: "Packaging",
      type: "packaging",
      description: "Shopping bag mockup featuring AbdI Brand Fashion logo.",
      detailedDescription:
        "Minimal white bag with gold logo and handle, showing how the identity works on physical packaging.",
      image: abdiBrandShoppingBag,
      tags: ["Packaging", "Shopping Bag", "Retail"],
      client: "ABDI BRAND Fashion",
      year: "2024",
      link: "#",
      aspectRatio: "portrait",
    },
    {
      id: 21,
      title: "HR.DESIGN Tote Bag",
      category: "Packaging",
      type: "packaging",
      description: "Branded tote bag with HR.DESIGN logo.",
      detailedDescription:
        "Clean mockup of a brown tote bag featuring the HR.DESIGN mark in black for a strong, simple look.",
      image: hrDesignToteBag,
      // if you prefer, rename the import to hrDesignToteBag at the top
      tags: ["Packaging", "Tote Bag", "Merch"],
      client: "HR.DESIGN",
      year: "2024",
      link: "#",
      aspectRatio: "square",
    },
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