"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set(
        [mainContentRef.current, newsletterRef.current, bottomBarRef.current],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Timeline animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(mainContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          newsletterRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          bottomBarRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );

      // Stagger animation for footer sections
      const footerSections =
        mainContentRef.current?.querySelectorAll<HTMLDivElement>(
          ".footer-section"
        );
      if (footerSections && footerSections.length > 0) {
        gsap.fromTo(
          footerSections,
          { opacity: 0, y: 30, scale: 0.95 },
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
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating animation for background elements
      const floatingElements =
        footerRef.current?.querySelectorAll<HTMLElement>(".floating-element");
      if (floatingElements && floatingElements.length > 0) {
        gsap.to(floatingElements, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.5,
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const footerLinks = {
    services: [
      { name: "Technical ORM", href: "/services/technical-orm" },
      { name: "Local ORM", href: "/services/local-orm" },
      { name: "Content Strategy", href: "/services/content-strategy" },
      { name: "ORM Audit", href: "/services/orm-audit" },
      { name: "Analytics & Reporting", href: "/services/analytics" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    resources: [
      { name: "ORM Guide", href: "/resources/orm-guide" },
      { name: "Free Tools", href: "/resources/tools" },
      { name: "Webinars", href: "/resources/webinars" },
      { name: "E-books", href: "/resources/ebooks" },
      { name: "Templates", href: "/resources/templates" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Email", href: "mailto:contact@example.com", icon: Mail },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-linier-to-br from-theme-primary via-theme-primary-hover to-theme-primary   overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute -top-24 -right-24 w-48 h-48 bg-linier-to-br from-theme-accent-light/12 to-transparent rounded-full blur-2xl"></div>
        <div className="floating-element absolute -bottom-24 -left-24 w-40 h-40 bg-linier-to-tl from-theme-accent/10 to-transparent rounded-full blur-xl"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-linier-to-br from-theme-accent-light/8 to-transparent rounded-full blur-lg"></div>
      </div>

      {/* Main Footer Content */}
      <div
        ref={mainContentRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="footer-section lg:col-span-1">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-linier-to-br from-theme-accent to-theme-accent-hover rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polygon
                      points="12 2 2 7 12 12 22 7 12 2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="2 17 12 22 22 17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="2 12 12 17 22 12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold   bg-clip-text ">
                  ORM Specialist
                </span>
              </Link>
            </div>

            <p className="  leading-relaxed mb-8 text-base">
              Professional ORM services that drive real results. We help
              businesses increase their online visibility, organic traffic, and
              revenue through data-driven ORM strategies.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3     transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3     transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">
                  sumon@ormspecialist.com
                </span>
              </div>
              <div className="flex items-center space-x-3     transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3     transition-colors duration-300 group">
                <div className="w-8 h-8 bg-theme-accent/20 rounded-lg flex items-center justify-center group-hover:bg-theme-accent/30 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="text-sm font-medium">Mon-Fri 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8  ">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="  hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8  ">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="  hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-8  ">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="  hover:text-theme-accent-light transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div ref={bottomBarRef} className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className=" /60 text-sm font-medium">
              © {currentYear} ORM Specialist. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(social => {
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
                    <Icon className="w-5 h-5   group-  transition-colors duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8 text-sm">
              <Link
                href="/privacy"
                className=" /60 hover:text-theme-accent-light transition-colors duration-300 font-medium hover:-translate-y-0.5 transform inline-block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className=" /60 hover:text-theme-accent-light transition-colors duration-300 font-medium hover:-translate-y-0.5 transform inline-block"
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
