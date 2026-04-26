import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ChevronDown,
  Copy,
  CheckCircle2,
} from 'lucide-react';
import { AuroraBackground } from '../ui/aurora-background';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

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

// Simple FAQ accordion component used on the Contact page
const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: 'Typical project timeline?', a: '4-12 weeks depending on scope' },
    { q: 'Work with startups?', a: 'Yes! We love helping startups grow' },
    { q: 'Support included?', a: '3 months free support with all projects' },
  ];

  return (
    <div className="h-60 overflow-hidden">
      {' '}
      {/* Fixed height container for entire FAQ section */}
      <div className="space-y-2">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b last:border-b-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left">
                <span className="font-medium text-gray-700">{item.q}</span>
                <ChevronDown
                  className={`ml-4 transition-transform ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {/* Answer appears directly under each question */}
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="overflow-hidden">
                <div className="pb-4 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [state, handleSubmit] = useForm('xovnaawz'); // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Custom submit handler that works with Formspree
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submitting
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    if (!nameError && !emailError && !messageError) {
      // Create FormData object for Formspree
      const formDataForSubmission = new FormData();
      formDataForSubmission.append('name', formData.name);
      formDataForSubmission.append('email', formData.email);
      formDataForSubmission.append('company', formData.company);
      formDataForSubmission.append('service', formData.service);
      formDataForSubmission.append('message', formData.message);

      // Submit using Formspree's handleSubmit
      handleSubmit(formDataForSubmission);
    } else {
      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        message: true,
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    validateField(field, value);
  };

  const validateField = (field: string, value: string) => {
    let err = '';
    switch (field) {
      case 'name':
        if (value.trim().length < 2)
          err = 'Please enter your full name (min 2 characters).';
        break;
      case 'email':
        if (!emailRegex.test(value)) err = 'Enter a valid email address.';
        break;
      case 'message': {
        const len = value.trim().length;
        if (len < 20) err = 'Please provide at least 20 characters.';
        else if (len > 500) err = 'Message can be max 500 characters.';
        break;
      }
    }
    setErrors((prev) => ({ ...prev, [field]: err }));
    return err;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof typeof formData]);
  };

  const copyToClipboard = async (text: string, key: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  const messageLength = formData.message.length;
  const isValid =
    formData.name.trim().length >= 2 &&
    emailRegex.test(formData.email) &&
    formData.message.trim().length >= 20 &&
    formData.message.trim().length <= 500 &&
    Object.values(errors).every((e) => !e);

  return (
    <div className="min-h-screen pt-16">
      {/* Header with Aurora Background */}
      <AuroraBackground className="py-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              <SplitText text="Get In Touch" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your
              project and discuss how we can help you achieve your goals. Let's
              create something amazing together.
            </motion.p>
          </div>
        </div>
      </AuroraBackground>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-col gap-20">
            {/* Contact Form */}
            <div className="border rounded-md">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 pb-12">
                  <CardContent className="p-12">
                    {state.succeeded && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
                        aria-live="polite">
                        <CheckCircle2 className="size-5" />
                        <span>
                          Thanks! Your message has been sent. We'll get back
                          within 6 hours.
                        </span>
                      </motion.div>
                    )}
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <Label htmlFor="name" className="text-gray-700">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange('name', e.target.value)
                            }
                            onBlur={() => handleBlur('name')}
                            required
                            aria-invalid={!!(errors.name && touched.name)}
                            className="mt-2 border-gray-300 focus:border-gray-500"
                          />
                          <p
                            className={`mt-1 text-sm ${
                              errors.name && touched.name
                                ? 'text-red-600'
                                : 'text-gray-500'
                            }`}>
                            {errors.name && touched.name
                              ? errors.name
                              : 'Enter at least 2 characters.'}
                          </p>
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange('email', e.target.value)
                            }
                            onBlur={() => handleBlur('email')}
                            required
                            aria-invalid={!!(errors.email && touched.email)}
                            className="mt-2 border-gray-300 focus:border-gray-500"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="mt-1 text-sm text-red-600"
                          />
                          <p
                            className={`mt-1 text-sm ${
                              errors.email && touched.email
                                ? 'text-red-600'
                                : 'text-gray-500'
                            }`}>
                            {errors.email && touched.email
                              ? errors.email
                              : 'We’ll only use this to contact you.'}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <Label htmlFor="company" className="text-gray-700">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange('company', e.target.value)
                            }
                            className="mt-2 border-gray-300 focus:border-gray-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-gray-700">
                            Service Needed
                          </Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              handleInputChange('service', value)
                            }>
                            <SelectTrigger className="mt-2 border-gray-300 focus:border-gray-500">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="branding">
                                Logo & Branding Design
                              </SelectItem>
                              <SelectItem value="uxui">UX/UI Design</SelectItem>
                              <SelectItem value="development">
                                Development
                              </SelectItem>
                              <SelectItem value="multiple">
                                Multiple Services
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <input
                            type="hidden"
                            name="service"
                            value={formData.service}
                          />
                        </div>
                      </div>

                      <div className='pb-4'>
                        <Label htmlFor="message" className="text-gray-700">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange('message', e.target.value)
                          }
                          onBlur={() => handleBlur('message')}
                          required
                          maxLength={500}
                          aria-invalid={!!(errors.message && touched.message)}
                          className="mt-2 min-h-32 border-gray-300 focus:border-gray-500"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="mt-1 text-sm text-red-600"
                        />
                        <div className="mt-1 flex items-center justify-between text-sm">
                          <p
                            className={`${
                              errors.message && touched.message
                                ? 'text-red-600'
                                : 'text-gray-500'
                            }`}>
                            {errors.message && touched.message
                              ? errors.message
                              : 'Share a few details (min 20 characters).'}
                          </p>
                          <span
                            className={`${
                              messageLength > 480
                                ? 'text-amber-600'
                                : 'text-gray-500'
                            }`}>
                            {messageLength}/500
                          </span>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={state.submitting || !isValid}
                        className="w-full bg-[#005b80] hover:bg-[#0c729b] text-lg text-white px-10 py-6 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                        {state.submitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="border rounded-md p-12 ">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 ">
                <div className="">
                  <h2 className="text-2xl font-bold text-gray-700 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-md bg-gray-500">
                          <Mail className="size-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-700">
                            Email
                          </div>
                          <a
                            href="mailto:admin@premiumdesigncompany.com"
                            className="text-gray-600 hover:text-gray-700 underline-offset-4 hover:underline">
                            admin@premiumdesigncompany.com
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(
                            'admin@premiumdesigncompany.com',
                            'email'
                          )
                        }
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                        aria-label="Copy email">
                        {copied === 'email' ? (
                          <CheckCircle2 className="size-4 text-green-600" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-md bg-gray-500">
                          <Phone className="size-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-700">
                            Phone
                          </div>
                          <a
                            href="tel:+46764439468"
                            className="text-gray-600 hover:text-gray-700 underline-offset-4 hover:underline">
                            +46 76 443 94 68
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard('+46 76 443 94 68', 'phone')
                        }
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                        aria-label="Copy phone">
                        {copied === 'phone' ? (
                          <CheckCircle2 className="size-4 text-green-600" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-md bg-gray-500">
                        <Clock className="size-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          Response Time
                        </div>
                        <div className="text-gray-600">Within 6 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  {/* <h3 className="text-lg font-semibold text-gray-700">
                    Quick Actions
                  </h3> */}

                  <div className="flex flex-col  gap-6 pt-2">
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-[#005d81] hover:bg-[#0c729b] text-lg text-white px-6 py-6 cursor-pointer">
                      Book Discovery Call
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full md:w-auto cursor-pointer border-gray-300 text-black hover:text-black hover:bg-gray-50 px-8 text-lg h-12"
                      onClick={() => onNavigate('services')}>
                      View Services
                    </Button>
                  </div>
                </div>

                {/* Quick FAQ removed from here and moved to its own section after contact section */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (accordion) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm rounded-xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Quick FAQ
              </h2>
              <p className="text-gray-600 mb-4">
                Frequently asked questions about our process, timelines and
                support.
              </p>

              {/* Accordion */}
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
