import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// React Bits Split Text Animation Component
const SplitText = ({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Users,
  CheckCircle,
  Star,
  Lightbulb,
  Laptop,
  BadgeCheck,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DotGridBackground } from '../ui/dot-grid-background';

// ServiceContentCard component with mouse-following animation
const ServiceContentCard = ({
  service,
  index,
  className = '',
}: {
  service: any;
  index: number;
  className?: string;
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
      className={`group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        rotateX: mousePosition.y * 0.5,
        rotateY: mousePosition.x * 0.5,
      }}
      transition={{
        x: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        y: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        rotateX: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
        rotateY: { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 },
      }}
      style={{ transformStyle: 'preserve-3d' }}>
      <div
        className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          backgroundColor: index % 2 === 0 ? '#E8F8FF' : '#FFF5E2',
        }}>
        <div className="mb-6">
          <service.icon className="size-8 text-gray-600 mb-4" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <div className="text-sm text-gray-500 mb-1">Timeline</div>
            <div className="font-semibold text-gray-900">
              {service.timeline}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">Starting at</div>
            <div className="font-semibold text-gray-900">
              {service.startingPrice}
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="size-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          className="w-full bg-[#18B6F6] hover:bg-[#E6B456] text-gray-900 font-semibold"
          size="lg">
          Get Started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </motion.div>
  );
};

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX & Product Design',
      description:
        'We craft intuitive and visually engaging experiences that turn complex ideas into seamless digital products. From dashboards to mobile apps, our designs are built to delight users and drive conversions.',
      features: [
        'SaaS Dashboard & Web App Design',
        'Landing Pages & Marketing Websites',
        'Mobile App UI (iOS & Android)',
        'Design Systems & Interactive Prototypes',
      ],
      image:
        'https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTYxMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '2-4 weeks',
      startingPrice: '$2,500',
      gradient: 'from-[#E8F8FF] via-[#E8F8FF] to-[#E8F8FF]',
      bgGradient: 'from-pink-50 to-rose-50',
    },
    {
      icon: Laptop,
      title: 'Web Development',
      description:
        'Our team builds scalable, high-performance websites and applications tailored to your business needs. From custom web apps to CMS solutions, we ensure speed, security, and smooth user experience.',
      features: [
        'Modern Web Apps (React, Next.js, MERN)',
        'CMS Development (Webflow, WordPress, Framer)',
        'E-commerce Platforms (Shopify, WooCommerce, Custom)',
        'Performance Optimization & Maintenance',
      ],
      image:
        'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYwODA5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '3-6 weeks',
      startingPrice: '$5,000',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Code,
      title: 'Mobile App Development',
      description:
        'We create powerful mobile applications designed to engage users and scale with your business. Our apps combine sleek UI with robust backend systems for reliability and growth.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Apps (React Native, Flutter)',
        'API Integration & Automations',
        'Scalable Backend Development',
      ],
      image:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDUxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '4-12 weeks',
      startingPrice: '$10,000',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      description:
        'Your brand is more than a logo — it’s the story you tell. We help you stand out with cohesive branding. From visuals to voice, we design identities that connect emotionally with your audience.',
      features: [
        'Logo & Visual Identity Design',
        'Brand Style Guides',
        'Social Media Branding Kits',
        'Marketing Collaterals (Pitch Decks, Ads, Brochures)',
      ],
      image:
        'https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTYxMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '2-4 weeks',
      startingPrice: '$3,000',
      gradient: 'from-[#E8F8FF] via-[#E8F8FF] to-[#E8F8FF]',
      bgGradient: 'from-pink-50 to-rose-50',
    },
    {
      icon: Laptop,
      title: 'No-Code Development',
      description:
        'Build and launch products faster with no-code platforms tailored to your needs. We help startups and enterprises turn ideas into functional apps and websites — without heavy coding.',
      features: [
        'Webflow & Framer Websites',
        'Bubble.io & Glide App Development',
        'Custom No-Code SaaS Platforms',
        'Fast Prototyping & MVP Launches',
      ],
      image:
        'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYwODA5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '3-6 weeks',
      startingPrice: '$4,500',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Code,
      title: 'Advanced Solutions',
      description:
        'Stay ahead of the curve with cutting-edge technology tailored for modern businesses. From AI to Web3, we build smart solutions that future-proof your digital presence.',
      features: [
        'AI-Powered SaaS Tools & Dashboards',
        'Blockchain, NFT & Web3 Development',
        'Custom API Development & Integrations',
        'Smart Automation Systems',
      ],
      image:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDUxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      timeline: '2-8 weeks',
      startingPrice: '$2,000',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
  ];

  // Testimonials (for merged slider + CTA section)
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content:
        'Working with this agency transformed our entire digital presence. The attention to detail and user experience design exceeded our expectations completely.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b372?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Innovation Labs',
      content:
        'The UX/UI design process was exceptional. Our user engagement increased by 40% and the feedback has been overwhelmingly positive from our customers.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Growth Co.',
      content:
        'From branding to web development, they delivered everything on time and beyond our expectations. The results speak for themselves - 3x conversion rate.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We dive deep into your business goals, target audience, and project requirements.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description:
        'Create wireframes, mockups, and detailed project plans tailored to your needs.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description:
        'Build your project using cutting-edge technologies with rigorous testing.',
      color: 'from-pink-500 to-red-500',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        'Deploy your project and provide ongoing support to ensure continued success.',
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header with Dot Grid Background */}
      <DotGridBackground
        className="py-20"
        dotSize={1}
        dotColor="#d1d5db"
        backgroundColor="#f9fafb"
        spacing={20}
        maskGradient={true}>
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <SplitText text="Our Services" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions
              that drive results and exceed expectations. Every project is
              tailored to your unique needs and goals.
            </motion.p>
          </div>
        </div>
      </DotGridBackground>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`py-6`}>
                  <div
                    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-2 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                    {/* Content with Mouse Following Animation */}
                    <ServiceContentCard
                      service={service}
                      index={index}
                      className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                    />

                    {/* Image */}
                    <div
                      className={
                        index % 2 === 1 ? 'lg:col-start-1 h-full' : ''
                      }>
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[576px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures every project is delivered on
              time, on budget, and exceeds expectations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center`}>
                  <span className="text-[#E2E5E6] font-bold text-7xl group-hover:text-[#18B6F6] duration-500">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
              <blockquote className="text-gray-500 text-xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
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
                  <div className="text-base text-gray-600">
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

            <div className="flex flex-col sm:flex-row justify-center gap-6">
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
