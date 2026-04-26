import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Heart,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const footerLinks = {
  Services: [
    { name: "UI/UX & Product Design", page: "services" },
    { name: "Web Development", page: "services" },
    { name: "Mobile App Development", page: "services" },
    { name: "Branding & Identity", page: "services" },
    { name: "No-Code Development", page: "services" },
    { name: "Advanced Solutions", page: "services" },
  ],
  Company: [
    { name: "About Us", page: "about" },
    { name: "Portfolio", page: "portfolio" },
    { name: "Case Studies", page: "portfolio" },
    { name: "Process", page: "about" },
    { name: "Careers", page: "contact" },
  ],
  Resources: [
    { name: "Blog", page: "home" },
    { name: "Design System", page: "home" },
    { name: "Style Guide", page: "home" },
    { name: "Templates", page: "home" },
    { name: "Tools", page: "home" },
  ],
  Support: [
    { name: "Contact Us", page: "contact" },
    { name: "FAQ", page: "contact" },
    { name: "Book a Call", page: "contact" },
    { name: "Project Portal", page: "home" },
    { name: "Support Center", page: "home" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern with Brand Colors */}
      <div className="absolute inset-0">
        {/* Light brand color overlay */}
        <div className="absolute inset-0 bg-[#E8F8FF] opacity-[0.02]"></div>
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2318B6F6' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#18B6F6]/50 to-transparent"></div>

      {/* Main Footer */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo with glow effect */}
                <div className="relative">
                  <img
                    src="/images/footer-logo.png"
                    alt="Premium Design Company"
                    className="w-64 h-auto filter brightness-110"
                  />
                  <div className="absolute -inset-2 bg-[#18B6F6]/15 blur-xl rounded-lg opacity-60"></div>
                </div>

                <p className="text-gray-300 leading-relaxed text-base max-w-sm">
                  Crafting digital experiences at the intersection of design, technology, and strategy. 
                  We don't just build products—we create solutions that drive business growth.
                </p>

                {/* Contact Info with enhanced styling */}
                <div className="space-y-4">
                  <a
                    href="mailto:admin@premiumdesigncompany.com"
                    aria-label="Send email to admin@premiumdesigncompany.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-[#18B6F6] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-[#E8F8FF]/10 group-hover:bg-[#18B6F6]/25 transition-all duration-300">
                      <Mail className="size-4" />
                    </div>
                    <span className="text-sm">admin@premiumdesigncompany.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-2 rounded-lg bg-[#E8F8FF]/10">
                      <Phone className="size-4" />
                    </div>
                    <span className="text-sm">+46 76 443 94 68</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-2 rounded-lg bg-[#E8F8FF]/10">
                      <MapPin className="size-4" />
                    </div>
                    <span className="text-sm">Gothenburg, Sweden</span>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="flex gap-3 pt-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-3 rounded-xl bg-[#E8F8FF]/10 hover:bg-[#18B6F6]/25 text-gray-400 hover:text-[#18B6F6] border border-[#E8F8FF]/20 hover:border-[#18B6F6]/60 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-[#18B6F6]/30"
                      >
                        <social.icon className="size-4" />
                        <span className="sr-only">{social.name}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links with enhanced styling */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="relative">
                  <h4 className="font-bold text-white mb-2 text-lg tracking-wide">
                    {category}
                  </h4>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#18B6F6] via-[#E8F8FF]/50 to-transparent rounded-full"></div>
                </div>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => onNavigate(link.page)}
                        className="text-gray-400 hover:text-white transition-all duration-300 text-left group flex items-center gap-3 cursor-pointer hover:translate-x-1"
                      >
                        <span className="w-1.5 h-1.5 bg-[#18B6F6] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                        <span className="text-sm">{link.name}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#18B6F6]/30 to-transparent h-px"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8F8FF]/20 to-transparent h-px blur-sm"></div>
        <Separator className="bg-[#E8F8FF]/10" />
      </div>

      {/* Bottom Footer with enhanced design */}
      <div className="relative py-8 bg-black/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[#E8F8FF]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-gray-400"
            >
              <Heart className="size-4 text-[#18B6F6] fill-current" />
              <span className="text-sm">© 2025 Premium Design Company. Crafted with passion.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm text-gray-400 hover:text-[#18B6F6] transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#18B6F6] to-[#E8F8FF]/80 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
