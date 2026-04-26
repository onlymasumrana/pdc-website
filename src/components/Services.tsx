import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Palette, Laptop, Code, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Palette,
    title: 'Logo & Branding Design',
    description: 'Complete brand identity creation from concept to execution. Logo design, brand guidelines, and visual identity systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography', 'Brand Assets'],
    image: "https://images.unsplash.com/photo-1594926959777-345e30644273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ24lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTYxMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    timeline: '2-4 weeks'
  },
  {
    icon: Laptop,
    title: 'UX/UI Design',
    description: 'User-centered design for websites, mobile apps, and landing pages. From wireframes to high-fidelity prototypes.',
    features: ['User Research', 'Wireframes', 'UI Design', 'Prototypes', 'Design Systems'],
    image: "https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NTYwODA5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    timeline: '3-6 weeks'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack development for web applications, mobile apps, and e-commerce platforms using modern technologies.',
    features: ['Web Development', 'Mobile Apps', 'E-commerce', 'API Integration', 'Performance Optimization'],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MDUxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    timeline: '4-12 weeks'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
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
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to launch, we provide end-to-end digital solutions that drive results and exceed expectations.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-accent/20">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">{service.timeline}</div>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full group">
                      Get Estimate
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI Estimator CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">AI Project Estimator</CardTitle>
              <CardDescription>Get instant timeline & pricing estimates in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Answer a few questions about your project and our AI will provide you with detailed estimates, 
                timelines, and next steps - completely free.
              </p>
              <Button size="lg" className="group">
                Start AI Estimation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}