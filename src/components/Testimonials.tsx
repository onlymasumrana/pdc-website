import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "Working with this agency transformed our entire digital presence. The AI estimation tool gave us clarity on timeline and budget from day one, and the final product exceeded our expectations.",
    rating: 5,
    projectType: "Full Brand & Website Development",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, FinanceApp",
    company: "FinanceApp",
    content:
      "The UX/UI design process was exceptional. They took complex financial workflows and made them intuitive and beautiful. Our user engagement increased by 40% after launch.",
    rating: 5,
    projectType: "Mobile App Design",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, EcoCommerce",
    company: "EcoCommerce",
    content:
      "From initial consultation to final delivery, the process was seamless. The team understood our vision and brought it to life with incredible attention to detail.",
    rating: 5,
    projectType: "E-commerce Platform",
  },
  {
    name: "David Park",
    role: "Marketing Director, SaaSCorp",
    company: "SaaSCorp",
    content:
      "The branding work they did for us was outstanding. Our brand recognition increased by 300% and helped us secure Series A funding. Highly recommended!",
    rating: 5,
    projectType: "Brand Identity & Marketing",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Design, CreativeLab",
    company: "CreativeLab",
    content:
      "Professional, creative, and technically excellent. They delivered a complex web application on time and within budget. The AI estimation tool was surprisingly accurate.",
    rating: 5,
    projectType: "Web Application Development",
  },
  {
    name: "James Wilson",
    role: "Startup Founder, InnovateCo",
    company: "InnovateCo",
    content:
      "As a startup, we needed a partner who understood our constraints and vision. They delivered exceptional work that helped us launch successfully and attract investors.",
    rating: 5,
    projectType: "MVP Design & Development",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-accent/20">
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
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Project Type */}
                  <div className="text-xs text-primary font-medium mb-4 bg-primary/10 px-2 py-1 rounded-full inline-block">
                    {testimonial.projectType}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/30 text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                4.9/5
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-2">6h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
