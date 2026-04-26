import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Clock, Zap, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

// React Bits Prism Background Component
const PrismBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="prism1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
          </linearGradient>
          <linearGradient id="prism2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.1)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
          <linearGradient id="prism3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>

        {/* Animated Prism Shapes */}
        <motion.polygon
          points="200,100 400,50 350,250 150,300"
          fill="url(#prism1)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.polygon
          points="800,150 1000,100 950,350 750,400"
          fill="url(#prism2)"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.2, 0.9],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.polygon
          points="100,500 300,450 250,650 50,700"
          fill="url(#prism3)"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [0.7, 1.0, 0.7],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        <motion.polygon
          points="900,500 1100,450 1050,650 850,700"
          fill="url(#prism1)"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.6, 1.1, 0.6],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.polygon
          points="500,200 700,150 650,400 450,450"
          fill="url(#prism2)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1.0, 0.8],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </svg>
    </div>
  );
};

// Add the shimmer animation CSS
const shimmerCSS = `
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
`;

// React Bits Shiny Text Component
const ShinyText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />
      <span
        className={`inline-block bg-clip-text text-transparent animate-shimmer ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(110deg, #000000 45%, #ffffff 55%, #000000)",
          backgroundSize: "200% 100%",
        }}
      >
        {text}
      </span>
    </>
  );
};

// Typewriter Animation Component with Shiny Text Support
const TypewriterText = ({
  text,
  delay = 100,
  shinyWords = [],
}: {
  text: string;
  delay?: number;
  shinyWords?: string[];
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, delay, text, isComplete]);

  const renderTextWithShiny = (text: string) => {
    if (!isComplete) return text;

    // Simple approach: check if text contains any shiny words
    for (const word of shinyWords) {
      if (text.includes(word)) {
        const parts = text.split(word);
        const result: (string | JSX.Element)[] = [];

        parts.forEach((part, index) => {
          if (index > 0) {
            result.push(<ShinyText key={index} text={word} />);
          }
          if (part) {
            result.push(part);
          }
        });

        return result;
      }
    }

    return text;
  };

  return (
    <span className="inline-block text-gray-800 leading-tight">
      {renderTextWithShiny(displayText)}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Palette,
  Laptop,
  Code,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { JSX } from "react/jsx-runtime";

interface HomePageProps {
  onNavigate: (page: string) => void;
}


// Custom hook for counter animation
const useCounter = (
  end: number,
  duration: number = 2000,
  suffix: string = ""
) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Start animation 1 second after component mounts
    const startTimer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true);
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, 1000); // 1 second delay

    return () => clearTimeout(startTimer);
  }, [end, duration, hasAnimated]);

  return { count: count + suffix };
};

// ServiceCard component with mouse-following animation
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay,
  onNavigate,
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number; 
  onNavigate: (page: string) => void;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        x: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        y: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        rotateX: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        rotateY: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
      }}
      viewport={{ once: true }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotateX: mousePosition.y * 0.5,
        rotateY: mousePosition.x * 0.5,
      }}
      style={{ transformStyle: 'preserve-3d' }}>
      <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 p-16">
        <CardContent className="p-0 flex flex-col h-full flex-grow justify-between">
          {/* Icon */}
          <div className="">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-gray-700 group-hover:text-gray-900">
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-medium text-gray-900 mt-8">{title}</h3>

          {/* Description */}
          <p className="text-gray-500 text-xl leading-relaxed mt-4 mb-6 flex-grow">
            {description}
          </p>

          {/* Learn More Button */}
          <button
            className="mt-auto pt-4 flex items-center text-gray-900 font-medium text-lg tracking-wide hover:text-gray-700 transition-colors group"
            onClick={() => onNavigate('services')}>
            LEARN MORE
            <ArrowRight className="ml-2 duration-300 w-6 h-6 transition-transform group-hover:translate-x-2" />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Counter hooks for stats
  const projectsCounter = useCounter(500, 2000, "+");
  const satisfactionCounter = useCounter(98, 2000, "%");
  const responseCounter = useCounter(6, 1500, "h");
  const roiCounter = useCounter(5, 1500, "x");

  const navItems = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "Portfolio", page: "portfolio" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Palette,
      title: "UI/UX & Product Design",
      description:
        "We craft intuitive and visually engaging experiences that turn complex ideas into seamless digital products. From dashboards to mobile apps, our designs are built to delight users and drive conversions.",
      features: [
        "SaaS Dashboard & Web App Design",
        "Landing Pages & Marketing Websites",
        "Mobile App UI (iOS & Android)",
        "Design Systems & Interactive Prototypes",
      ],
    },
    {
      icon: Laptop,
      title: "Web Development",
      description:
        "Our team builds scalable, high-performance websites and applications tailored to your business needs. From custom web apps to CMS solutions, we ensure speed, security, and smooth user experience.",
      features: [
        "Modern Web Apps (React, Next.js, MERN)",
        "CMS Development (Webflow, WordPress, Framer)",
        "E-commerce Platforms (Shopify, WooCommerce, Custom)",
        "Performance Optimization & Maintenance",
      ],
    },
    {
      icon: Code,
      title: "Mobile App Development",
      description:
        "We create powerful mobile applications designed to engage users and scale with your business. Our apps combine sleek UI with robust backend systems for reliability and growth.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Apps (React Native, Flutter)",
        "API Integration & Automations",
        "Scalable Backend Development",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "Your brand is more than a logo — it’s the story you tell. We help you stand out with cohesive branding. From visuals to voice, we design identities that connect emotionally with your audience.",
      features: [
        "Logo & Visual Identity Design",
        "Brand Style Guides",
        "Social Media Branding Kits",
        "Marketing Collaterals (Pitch Decks, Ads, Brochures)",
      ],
    },
    {
      icon: Laptop,
      title: "No-Code Development",
      description:
        "Build and launch products faster with no-code platforms tailored to your needs. We help startups and enterprises turn ideas into functional apps and websites — without heavy coding.",
      features: [
        "Webflow & Framer Websites",
        "Bubble.io & Glide App Development",
        "Custom No-Code SaaS Platforms",
        "Fast Prototyping & MVP Launches",
      ],
    },
    {
      icon: Code,
      title: "Advanced Solutions",
      description:
        "Stay ahead of the curve with cutting-edge technology tailored for modern businesses. From AI to Web3, we build smart solutions that future-proof your digital presence.",
      features: [
        "AI-Powered SaaS Tools & Dashboards",
        "Blockchain, NFT & Web3 Development",
        "Custom API Development & Integrations",
        "Smart Automation Systems",
      ],
    },
  ];

  const featuredWorks = [
    {
      title: 'Design for Home Maintenance',
      category: 'SaaS Platform',
      client: 'UXArt',
      description:
        'Complete redesign and development of a modern analytics dashboard that increased user engagement by 65% and reduced task completion time by 40%. Built with React and advanced data visualization libraries for seamless user experience.',
      image:
        'https://cdn.dribbble.com/userupload/41913542/file/original-c734d4e89746d93af4cabc97d34d92b6.png?resize=800x600',
      tags: [],
    },
    {
      title: 'Garden Care',
      category: 'Mobile Application',
      client: 'Wellness Corp',
      description:
        'End-to-end design and development of a comprehensive fitness tracking mobile app with personalized workout plans and nutrition guidance. Features AI-powered recommendations and social community features.',
      image:
        'https://cdn.dribbble.com/userupload/20932886/file/original-0b44a0764b41cd4d50d7e2c1fc441b42.png?resize=800x600&vertical=center',
      tags: ['Mobile Design', 'iOS/Android', 'Health Tech'],
    },
    {
      title: 'Hotel Website',
      category: 'E-commerce Website',
      client: 'Hotel Seagull',
      description:
        'Full-scale e-commerce platform development for sustainable products marketplace. Implemented advanced search, personalized recommendations, and seamless checkout experience resulting in significant conversion improvements.',
      image:
        'https://cdn.dribbble.com/userupload/22174128/file/original-61dc2ec0d7c432d042ed141a1d85f241.png?resize=752x&vertical=center',
      tags: ['E-commerce', 'Shopify Plus', 'Performance'],
    },
    {
      title: 'Men Fashion House',
      category: 'SaaS Platform',
      client: 'TechFlow Inc.',
      description:
        'Complete redesign and development of a modern analytics dashboard that increased user engagement by 65% and reduced task completion time by 40%. Built with React and advanced data visualization libraries for seamless user experience.',
      image:
        'https://cdn.dribbble.com/userupload/41897420/file/original-9aaa809c1843b888d4de0df02aac8958.png?resize=800x600',
      tags: ['UI/UX Design', 'React Development', 'Data Visualization'],
    },
    {
      title: 'Spice Website',
      category: 'Mobile Application',
      client: 'Wellness Corp',
      description:
        'End-to-end design and development of a comprehensive fitness tracking mobile app with personalized workout plans and nutrition guidance. Features AI-powered recommendations and social community features.',
      image:
        'https://cdn.dribbble.com/userupload/41829981/file/original-423130f5f5496c709daddabce55a45a4.png?resize=800x600',
      tags: ['Mobile Design', 'iOS/Android', 'Health Tech'],
    },
    {
      title: 'SpaceX Redesign',
      category: 'E-commerce Website',
      client: 'EcoMarket Ltd',
      description:
        'Full-scale e-commerce platform development for sustainable products marketplace. Implemented advanced search, personalized recommendations, and seamless checkout experience resulting in significant conversion improvements.',
      image:
        'https://cdn.dribbble.com/userupload/41834278/file/original-5b53f5c042adc5eb6965d8b8d8e61168.png?resize=800x600',
      tags: ['E-commerce', 'Shopify Plus', 'Performance'],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content:
        "Working with this agency transformed our entire digital presence. The attention to detail and user experience design exceeded our expectations completely.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      content:
        "The UX/UI design process was exceptional. Our user engagement increased by 40% and the feedback has been overwhelmingly positive from our customers.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Growth Co.",
      content:
        "From branding to web development, they delivered everything on time and beyond our expectations. The results speak for themselves - 3x conversion rate.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isSliderPaused, featuredWorks.length]);

  // Auto-rotate single testimonial slider
  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredWorks.length) % featuredWorks.length
    );
  };

  // Mouse tracking for service cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="">
      {/* Hero Section with Integrated Navbar and AI Background */}
      <section className="relative  md:pt-20 lg:pt-2 flex flex-col overflow-hidden">
        {/* Prism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-orange-50/40">
          <PrismBackground />
        </div>

        {/* Integrated Navbar */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
          <div className=" mx-auto px-4 py-4 sm:px-6 lg:px-10 lg:pr-16">
            <div className="flex justify-between items-center h-18">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleNavClick('home')}>
                <img
                  src="/images/header-logo.png"
                  alt="logo"
                  className="w-80"
                />
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className=" flex items-baseline space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => handleNavClick(item.page)}
                      className={`cursor-pointer px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
                        item.page === 'home'
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}>
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:block">
                <Button
                  size="lg"
                  className="bg-[#005d81] hover:bg-[#0c729b] text-lg text-white px-6 py-6 cursor-pointer"
                  onClick={() => handleNavClick('contact')}>
                  Start Project
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X className="size-7" />
                  ) : (
                    <Menu className="size-7" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.page)}
                      className={`cursor-pointer block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                        item.page === 'home'
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}>
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-[#18B6F6] hover:bg-[#E6B456] text-gray-900 px-6 h-12 cursor-pointer"
                      onClick={() => handleNavClick('contact')}>
                      Start Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative pt-32 z-10 flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-700 mb-6 pt-12 leading-snug min-h-[4rem]">
                <TypewriterText
                  text="Build Accessible Brands with AI + Creativity"
                  delay={80}
                  shinyWords={['AI + Creativity']}
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We create websites, apps, and brands that work beautifully for
                everyone. Accessible, inclusive, and powered by AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-[#005b80] hover:bg-[#0c729b] text-lg text-white px-10 py-6 cursor-pointer"
                  onClick={() => onNavigate('contact')}>
                  Start Your Project
                  {/* <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" /> */}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer border-gray-300 text-black hover:text-black hover:bg-gray-50 px-8 text-lg h-12"
                  onClick={() => onNavigate('portfolio')}>
                  View Our Work
                </Button>
              </motion.div>

              {/* Company Logo Slider */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                //
                className="pt-24 pb-24">
                <div className="relative overflow-hidden">
                  <div className="flex animate-scroll">
                    {/* First set of logos */}
                    {Array.from({ length: 10 }, (_, index) => (
                      <div
                        key={`logo-${index}`}
                        className="flex-shrink-0 flex mx-8 gap-12">
                        <img
                          src="/images/wandr.png"
                          alt={`wandr.city`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/impact.png"
                          alt={`impact`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/kodekloud.png"
                          alt={`kodekloud`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/smatrmail.png"
                          alt={`smatrmail`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/adfd.png"
                          alt={`adfd`}
                          className="h-12 w-auto"
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {Array.from({ length: 10 }, (_, index) => (
                      <div
                        key={`logo-${index}`}
                        className="flex-shrink-0 flex mx-8 gap-12">
                        <img
                          src="/images/wandr.png"
                          alt={`wandr.city`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/impact.png"
                          alt={`impact`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/kodekloud.png"
                          alt={`kodekloud`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/smatrmail.png"
                          alt={`smatrmail`}
                          className="h-12 w-auto"
                        />
                        <img
                          src="/images/adfd.png"
                          alt={`adfd`}
                          className="h-12 w-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="relative pb-20 pt-10 bg-gray-50 overflow-hidden grid grid-cols-1 md:grid-cols-2 justify-between px-6 mx-auto gap-8">
        {featuredWorks.map((work, index) => (
          <div
            key={`work-${index}`}
            className=" w-[44vw] mx-auto py-6 duration-200 cursor-pointer">
            <div className="relative">
              <div className="bg-white p-8 rounded-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="rounded-lg shadow border w-full object-cover h-auto"
                />
              </div>
              <p className="absolute top-12 left-12 z-10 bg-white shadow rounded-full pt-1.5 pb-1 px-3">
                {work.client}
              </p>
            </div>
            <h2 className="text-3xl mt-4 self-start">{work.title}</h2>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <h1 className="mx-16 text-3xl py-6 text-center mb-12 uppercase border-b">
          Services we offer
        </h1>
        <div className=" mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
            {/* Service 1 - UI/UX & Product Design */}
            <ServiceCard
              delay={0.1}
              icon={<Palette className="w-12 h-12 " />}
              title="UI/UX & Product Design"
              description="We craft intuitive and visually engaging experiences that turn complex ideas into seamless digital products. From dashboards to mobile apps, our designs are built to delight users and drive conversions."
              onNavigate={onNavigate}
            />

            {/* Service 2 - Web Development */}
            <ServiceCard
              delay={0.2}
              icon={<Laptop className="w-12 h-12" />}
              title="Web Development"
              description="Our team builds scalable, high-performance websites and applications tailored to your business needs. From custom web apps to CMS solutions, we ensure speed, security, and smooth user experience."
              onNavigate={onNavigate}
            />

            {/* Service 3 - Mobile App Development */}
            <ServiceCard
              delay={0.3}
              icon={<Code className="w-12 h-12" />}
              title="Mobile App Development"
              description="We create powerful mobile applications designed to engage users and scale with your business. Our apps combine sleek UI with robust backend systems for reliability and growth."
              onNavigate={onNavigate}
            />

            {/* Service 4 - Branding & Identity */}
            <ServiceCard
              delay={0.4}
              icon={<Palette className="w-12 h-12" />}
              title="Branding & Identity"
              description="Your brand is more than a logo — it's the story you tell. We help you stand out with cohesive branding. From visuals to voice, we design identities that connect emotionally with your audience."
              onNavigate={onNavigate}
            />

            {/* Service 5 - No-Code Development */}
            <ServiceCard
              delay={0.5}
              icon={<Laptop className="w-12 h-12" />}
              title="No-Code Development"
              description="Build and launch products faster with no-code platforms tailored to your needs. We help startups and enterprises turn ideas into functional apps and websites — without heavy coding."
              onNavigate={onNavigate}
            />

            {/* Service 6 - Advanced Solutions */}
            <ServiceCard
              delay={0.6}
              icon={<Code className="w-12 h-12" />}
              title="Advanced Solutions"
              description="Stay ahead of the curve with cutting-edge technology tailored for modern businesses. From AI to Web3, we build smart solutions that future-proof your digital presence."
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </section>
        {/* Enhanced Stats */}
      <section className="py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8  max-w-4xl mx-auto">
          <div className="text-center group">
            {/* <div className="flex items-center justify-center mb-3">
                    <Trophy className="size-8 text-gray-400" />
                  </div> */}
            <div className="text-5xl font-bold text-gray-900 mb-1">
              {projectsCounter.count}
            </div>
            <div className="text-xl text-gray-600 font-medium">
              Inclusive Projects
            </div>
          </div>
          <div className="text-center group">
            {/* <div className="flex items-center justify-center mb-3">
                    <Users className="size-8 text-gray-400" />
                  </div> */}
            <div className="text-5xl font-bold text-gray-900 mb-1">
              {satisfactionCounter.count}
            </div>
            <div className="text-xl text-gray-600 font-medium">
              User Satisfaction
            </div>
          </div>
          <div className="text-center group">
            {/* <div className="flex items-center justify-center mb-3">
                    <Clock className="size-8 text-gray-400" />
                  </div> */}
            <div className="text-5xl font-bold text-gray-900 mb-1">
              {responseCounter.count}
            </div>
            <div className="text-xl text-gray-600 font-medium">
              Response Time
            </div>
          </div>
          <div className="text-center group">
            {/* <div className="flex items-center justify-center mb-3">
                    <Zap className="size-8 text-gray-400" />
                  </div> */}
            <div className="text-5xl font-bold text-gray-900 mb-1">
              {roiCounter.count}
            </div>
            <div className="text-xl text-gray-600 font-medium">ROI Average</div>
          </div>
        </motion.div>
      </section>
      {/* Merged Single-Testimonial Slider + CTA Section */}
      <section className="py-20 bg-[#E8F8FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial Slider (single rotating quote) - Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 mb-12 max-w-4xl mx-auto shadow-lg border bg-[#fafaff] rounded-md">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-center">
              {/* Stars centered */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-yellow-400 fill-current"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-500 text-xl mb-8 max-w-4xl mx-auto leading-loose">
                "{testimonials[testimonialIndex].content}"
              </blockquote>

              {/* User info centered */}
              <div className="flex items-center justify-center gap-4 mb-6">
                {/* <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                  <ImageWithFallback
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[testimonialIndex].name}
                  </div>
                  <div className="mt-2 text-base text-gray-600">
                    {testimonials[testimonialIndex].role},{' '}
                    {testimonials[testimonialIndex].company}
                  </div>
                </div>
              </div>

              {/* Dots centered */}
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === testimonialIndex
                        ? 'bg-[#18B6F6] w-8'
                        : 'bg-gray-300 w-2'
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center py-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with our expert team. From initial
              concept to final launch, we're here to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button
                size="lg"
                className="bg-[#005d81] hover:bg-[#0c729b] text-lg text-white px-6 py-6 cursor-pointer"
                onClick={() => onNavigate('contact')}>
                Start Your Project
                {/* <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" /> */}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:text-black hover:bg-gray-50 px-8 text-lg h-12"
                onClick={() => onNavigate('portfolio')}>
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
