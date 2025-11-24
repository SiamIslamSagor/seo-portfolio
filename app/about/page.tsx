/* eslint-disable react/no-unescaped-entities */
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import StatsSection from "../components/Stats";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero section animations
      const heroElements = heroRef.current?.querySelectorAll(".hero-animate");
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      // About section animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(aboutRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Skills section animations
      const skillsTl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      skillsTl.to(skillsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate skill bars
      const skillBars = skillsRef.current?.querySelectorAll(".skill-bar");
      if (skillBars && skillBars.length > 0) {
        gsap.fromTo(
          skillBars,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Stats section animations
      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      statsTl.to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate stat numbers
      const statNumbers = statsRef.current?.querySelectorAll(".stat-number");
      if (statNumbers && statNumbers.length > 0) {
        statNumbers.forEach(stat => {
          const finalValue = parseInt(stat.textContent || "0");
          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: finalValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "SEO", percentage: 100, icon: "🔍" },
    { name: "Negative Keyword Suppress", percentage: 100, icon: "🚫" },
    { name: "Google Knowledge Panel", percentage: 100, icon: "📊" },
    { name: "PR Distribution", percentage: 100, icon: "📢" },
  ];

  return (
    <div className="min-h-screen bg-theme-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-theme-accent/10 to-theme-accent-light/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hero-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-6 leading-tight">
                SEO & ORM
                <span className="block text-theme-accent">Specialist</span>
              </h1>
              <p className="text-lg md:text-xl text-theme-secondary mb-8 leading-relaxed">
                Hi, I'm Sumon — a dedicated Online Reputation Management (ORM)
                specialist helping individuals, professionals, and businesses
                take control of how they're seen online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Free Meeting</Link>
                </Button>
                {/* <Button variant="outline" size="lg">
                  View My Work
                </Button> */}
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-theme-secondary hover:text-theme-accent transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-theme-secondary hover:text-theme-accent transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-theme-secondary hover:text-theme-accent transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-animate">
              <div className="relative">
                <div className="absolute inset-0 bg-theme-gradient rounded-3xl transform rotate-3"></div>
                <div className="relative bg-theme-background rounded-3xl p-8 shadow-theme-medium">
                  <div className="aspect-square bg-linear-to-br from-theme-accent-light/20 to-theme-accent/10 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 opacity-0 translate-y-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              About Me
            </h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Whether it's unfair reviews, negative articles, outdated search
              results, or misleading content damaging your image — I'm here to
              clean it up, push it down, or replace it with what truly reflects
              your value.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="py-20 bg-theme-background-alt opacity-0 translate-y-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              Expertise
            </h2>
            <p className="text-xl text-theme-secondary">
              Mastering the art of online reputation management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-theme-background rounded-2xl p-6 shadow-theme-light hover:shadow-theme-medium transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-theme-primary mb-2">
                      {skill.name}
                    </h3>
                    <div className="flex items-center">
                      <div className="flex-1 bg-theme-background-muted rounded-full h-3 overflow-hidden">
                        <div
                          className="skill-bar bg-theme-gradient h-3 rounded-full"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <span className="ml-4 text-sm font-medium text-theme-accent">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 bg-theme-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
            Ready to Transform Your Online Reputation?
          </h2>
          <p className="text-xl text-theme-secondary mb-8">
            Let's discuss how I can help you achieve your ORM goals and build a
            positive digital presence.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
