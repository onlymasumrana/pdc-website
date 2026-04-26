import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Development',
    description: 'Complete e-commerce solution with custom admin panel, payment integration, and mobile app.',
    image: "https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYwODA5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    results: {
      metric1: '300% increase in sales',
      metric2: '50% faster loading',
      metric3: '4.8/5 user rating'
    },
    challenge: 'The client needed a modern, fast e-commerce platform that could handle high traffic and provide excellent user experience.',
    solution: 'We built a custom React-based solution with optimized performance, intuitive UX, and comprehensive admin features.'
  },
  {
    title: 'FinTech Mobile App',
    category: 'UX/UI Design',
    description: 'Mobile banking app design with focus on security, accessibility, and seamless user experience.',
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDUxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ['Figma', 'User Research', 'Prototyping', 'Design System'],
    results: {
      metric1: '40% increase in user engagement',
      metric2: '25% faster task completion',
      metric3: '95% user satisfaction'
    },
    challenge: 'Create a banking app that feels secure yet approachable, balancing complex functionality with simple UX.',
    solution: 'Through extensive user research and iterative design, we created an intuitive interface that simplifies complex financial tasks.'
  },
  {
    title: 'Tech Startup Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity for AI-powered SaaS startup, including logo, guidelines, and marketing materials.',
    image: "https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTYxMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ['Brand Strategy', 'Logo Design', 'Guidelines', 'Marketing Materials'],
    results: {
      metric1: '$2M Series A raised',
      metric2: '500% brand recognition increase',
      metric3: '80% faster hiring'
    },
    challenge: 'Position a new AI startup in a crowded market with a distinctive, trustworthy brand identity.',
    solution: 'We developed a modern, tech-forward identity that balances innovation with reliability, appealing to both consumers and investors.'
  },
  {
    title: 'Healthcare Platform Redesign',
    category: 'UX/UI Design',
    description: 'Patient portal redesign focusing on accessibility, ease of use, and telehealth integration.',
    image: "https://images.unsplash.com/photo-1743004873139-5bc0e3d937d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjAwODU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ['Healthcare', 'Accessibility', 'Telehealth', 'HIPAA Compliance'],
    results: {
      metric1: '60% increase in patient engagement',
      metric2: '35% reduction in support calls',
      metric3: '99.9% accessibility score'
    },
    challenge: 'Redesign a complex healthcare platform to be accessible for all users while maintaining HIPAA compliance.',
    solution: 'We created an inclusive design system with clear navigation, optimized for various abilities and technical literacy levels.'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real results for real clients. See how we've helped businesses transform their digital presence.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-accent/20">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover  transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-accent/30 rounded-lg mb-6">
                    <div className="text-center">
                      <div className="font-semibold text-sm text-foreground">{project.results.metric1}</div>
                    </div>
                    <div className="text-center border-x border-border">
                      <div className="font-semibold text-sm text-foreground">{project.results.metric2}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-sm text-foreground">{project.results.metric3}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group">
                    View Case Study
                    <ExternalLink className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}