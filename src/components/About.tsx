import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Creative Director',
    experience: '8+ years',
    specialties: ['Brand Strategy', 'Visual Identity', 'Creative Direction'],
    bio: 'Leading creative vision with expertise in brand development and strategic design thinking.'
  },
  {
    name: 'Sarah Chen',
    role: 'UX/UI Designer',
    experience: '6+ years',
    specialties: ['User Research', 'Interaction Design', 'Design Systems'],
    bio: 'Passionate about creating intuitive experiences through user-centered design methodology.'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Full-Stack Developer',
    experience: '7+ years',
    specialties: ['React/Next.js', 'Node.js', 'Cloud Architecture'],
    bio: 'Building scalable, performant web applications with modern technologies and best practices.'
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    experience: '5+ years',
    specialties: ['Agile', 'Client Relations', 'Quality Assurance'],
    bio: 'Ensuring projects run smoothly and exceed client expectations through effective communication.'
  }
];

const values = [
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your success is our success. We work as an extension of your team, understanding your goals and challenges deeply.'
  },
  {
    icon: Award,
    title: 'Excellence in Craft',
    description: 'We maintain the highest standards in design and development, constantly learning and improving our skills.'
  },
  {
    icon: Clock,
    title: 'Transparent Process',
    description: 'Clear communication, regular updates, and honest timelines. You always know where your project stands.'
  },
  {
    icon: CheckCircle,
    title: 'Results-Driven',
    description: 'Every design decision and line of code serves a purpose - to help you achieve your business objectives.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/20">
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
            About Our Agency
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We're a team of passionate designers and developers who believe great digital experiences 
            can transform businesses. Founded in 2020, we've helped over 50 companies achieve their goals.
          </motion.p>
        </div>

        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower businesses with digital solutions that not only look amazing but drive real results. 
                We combine strategic thinking, creative excellence, and technical expertise to help our clients 
                stand out in today's competitive digital landscape.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-foreground mb-12"
          >
            Why Choose Us
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <value.icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-foreground mb-12"
          >
            Meet Our Team
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    {/* Avatar Placeholder */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                      <span className="text-xl font-semibold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <div className="text-sm text-primary font-medium">{member.role}</div>
                    <Badge variant="outline" className="w-fit mx-auto mt-2">{member.experience}</Badge>
                  </CardHeader>
                  <CardContent className="px-4 pb-6">
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">3 years</div>
              <div className="text-sm text-muted-foreground">In Business</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}