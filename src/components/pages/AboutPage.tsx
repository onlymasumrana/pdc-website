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
import {
  Heart,
  Target,
  ArrowRight,
  Users,
  Award,
  Zap,
  CheckCircle,
  Star,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AuroraBackground } from '../ui/aurora-background';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '4.9/5', label: 'Client Rating' },
    { value: '95%', label: 'Client Retention' },
    { value: '250%', label: 'Average ROI Increase' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description:
        'Your success is our success. We work as an extension of your team.',
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description:
        'We maintain the highest standards in design and development.',
    },
    {
      icon: Zap,
      title: 'Innovation & Speed',
      description:
        'We embrace cutting-edge technologies for faster, better results.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description:
        'Clear communication and honest timelines throughout your project.',
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
      <AuroraBackground className="py-20">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-10">
              <SplitText text="About Our Agency" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We're a team of passionate designers and developers who believe
              great digital experiences can transform businesses. Founded in
              2020, we've helped over 50 companies achieve their goals through
              innovative design and cutting-edge technology.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-gray-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-500 flex items-center justify-center mb-6">
                  <Target className="size-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses with digital solutions that not only
                  look amazing but drive real results. We combine strategic
                  thinking, creative excellence, and technical expertise to help
                  our clients stand out in today's competitive digital
                  landscape.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every project we take on is an opportunity to push boundaries,
                  solve complex problems, and create meaningful experiences that
                  connect brands with their audiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631038506857-6c970dd9ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwdG9nZXRoZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzU2MTYwNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-2xl blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Drives Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every project we
              deliver.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-500 flex items-center justify-center">
                  <value.icon className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDUwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern office workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-500/30 rounded-2xl blur-xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-500 flex items-center justify-center mb-6">
                  <Users className="size-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Team
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We're a diverse team of creative professionals, each bringing
                  unique perspectives and expertise to every project. Our
                  collaborative approach ensures that your vision is brought to
                  life with the perfect balance of creativity and technical
                  excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="min-w-12 h-12 rounded-md border flex items-center justify-center">
                      <span className="text-gray-500 px-3 font-bold text-sm">8+</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        Years of Combined Experience
                      </div>
                      <div className="text-sm text-gray-600">
                        In design and development
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="min-w-12 h-12 rounded-md border flex items-center justify-center">
                      <span className="text-gray-500 px-3 font-bold text-sm">24/7</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        Available Support
                      </div>
                      <div className="text-sm text-gray-600">
                        We're here when you need us
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="min-w-12 h-12 rounded-md border flex items-center justify-center">
                      <span className="text-gray-500 px-3 font-bold text-sm">100%</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">
                        Dedication
                      </div>
                      <div className="text-sm text-gray-600">
                        To your project's success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <blockquote className="text-gray-500 text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
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
