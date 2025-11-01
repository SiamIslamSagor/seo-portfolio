'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Refs for GSAP animations
  const footerRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([mainContentRef.current, newsletterRef.current, bottomBarRef.current], {
        opacity: 0,
        y: 50
      });

      // Animate elements on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(mainContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(newsletterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(bottomBarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");

      // Stagger animation for footer links
      gsap.fromTo(mainContentRef.current?.querySelectorAll('.footer-section'), 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainContentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for background elements
      gsap.to(footerRef.current?.querySelectorAll('.floating-element'), {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const footerLinks = {
    services: [
      { name: 'Technical SEO', href: '/services/technical-seo' },
      { name: 'Local SEO', href: '/services/local-seo' },
      { name: 'Content Strategy', href: '/services/content-strategy' },
      { name: 'SEO Audit', href: '/services/seo-audit' },
      { name: 'Analytics & Reporting', href: '/services/analytics' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blogs' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' }
    ],
    resources: [
      { name: 'SEO Guide', href: '/resources/seo-guide' },
      { name: 'Free Tools', href: '/resources/tools' },
      { name: 'Webinars', href: '/resources/webinars' },
      { name: 'E-books', href: '/resources/ebooks' },
      { name: 'Templates', href: '/resources/templates' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'Email', href: 'mailto:contact@example.com', icon: Mail }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-theme-primary via-theme-primary-hover to-theme-primary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-theme-accent-light/12 to-transparent rounded-full blur-2xl"></div>
        <div className="floating-element absolute -bottom-24 -left-24 w-40 h-40 bg-gradient-to-tl from-theme-accent/10 to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-theme-accent-light/8 to-transparent rounded-full blur-lg"></div>
      </div>

      {/* Main Footer Content */}
      <div ref={mainContentRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="footer-section lg:col-span-1">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-theme-accent to-theme-accent-hover rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="2 17 12 22 22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="2 12 12 17 22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-theme-accent-light bg-clip-text text-transparent">SEO Portfolio</span>
              </Link>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-8 text-base">
              Professional SEO services that drive real results. We help businesses increase their online visibility, 
              organic traffic, and revenue through data-driven SEO strategies.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">contact@seoportfolio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8 text-white">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8 text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8 text-white">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div ref={newsletterRef} className="mt-20 pt-12 border-t border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-theme-accent/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-theme-accent-light" />
              <span className="text-sm font-medium text-theme-accent-light">Newsletter</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-theme-accent-light bg-clip-text text-transparent">
              Stay Updated with SEO Tips
            </h3>
            <p className="text-white/80 mb-10 text-lg leading-relaxed">
              Get the latest SEO insights, tips, and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-theme-accent to-theme-accent-hover text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div ref={bottomBarRef} className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm font-medium">
              © {currentYear} SEO Portfolio. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-theme-accent hover:scale-110 transition-all duration-300 group border border-white/20"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-theme-accent-light transition-colors duration-300 font-medium hover:translate-y-[-2px] transform inline-block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-theme-accent-light transition-colors duration-300 font-medium hover:translate-y-[-2px] transform inline-block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
