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
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AuroraBackground } from '../ui/aurora-background';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const projects = [
    {
      title: 'TechFlow Analytics Dashboard',
      category: 'SaaS Platform',
      description:
        'Complete redesign and development of a modern analytics dashboard that increased user engagement by 65%.',
      image:
        'https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDY4NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UI/UX Design', 'React', 'Data Visualization'],
      results: '65% increase in engagement',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'FitTrack Wellness App',
      category: 'Mobile Application',
      description:
        'End-to-end design and development of a comprehensive fitness tracking mobile app with AI-powered recommendations.',
      image:
        'https://images.unsplash.com/photo-1580983561252-463dca6ad904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwc2NyZWVuc3xlbnwxfHx8fDE3NTYxNjAzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Mobile Design', 'iOS/Android', 'Health Tech'],
      results: '150k+ active users',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'EcoMarket E-commerce',
      category: 'E-commerce Website',
      description:
        'Full-scale e-commerce platform development for sustainable products marketplace with advanced features.',
      image:
        'https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc1NjE2MDM3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['E-commerce', 'Shopify Plus', 'Performance'],
      results: '200% conversion increase',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Zenith Brand Identity',
      category: 'Branding Design',
      description:
        'Complete rebrand for luxury wellness company including logo, guidelines, and marketing materials.',
      image:
        'https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MXx8fHwxNzU2MTU5ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Brand Strategy', 'Logo Design', 'Guidelines'],
      results: '300% brand recognition boost',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description:
        'Secure financial dashboard with real-time data visualization and comprehensive reporting features.',
      image:
        'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYwODA5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Fintech', 'Security', 'Analytics'],
      results: '40% faster task completion',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'StartupOS Platform',
      category: 'SaaS Development',
      description:
        'Complete business management platform for startups with project management and team collaboration tools.',
      image:
        'https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTYxMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['SaaS', 'Team Collaboration', 'Project Management'],
      results: '500+ companies using',
      gradient: 'from-orange-500 to-red-500',
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

  return (
    <div className="min-h-screen pt-16">
      {/* Header with Aurora Background */}
      <AuroraBackground className="py-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              <SplitText text="Our Portfolio" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results for real clients. Explore our featured work and see
              how we've helped businesses transform their digital presence and
              achieve their goals.
            </motion.p>
          </div>
        </div>
      </AuroraBackground>

      {/* Featured Works */}
      <section className="relative py-20 bg-gray-50 group overflow-hidden grid grid-cols-1 md:grid-cols-2 justify-between px-6 mx-auto gap-8">
        {featuredWorks.map((work, index) => (
          <div
            key={`work-${index}`}
            className=" w-[44vw] mx-auto py-6 duration-200 cursor-pointer">
            <div className="relative">
              <img
                src={work.image}
                alt={work.title}
                className="rounded-lg shadow-sm border w-full object-cover h-auto"
              />
              <p className="absolute top-4 left-4 z-10 bg-white shadow rounded-full pt-1.5 pb-1 px-3">
                {work.client}
              </p>
            </div>
            <h2 className="text-3xl mt-4 self-start">{work.title}</h2>
          </div>
        ))}
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
