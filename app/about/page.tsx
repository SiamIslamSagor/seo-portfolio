/* eslint-disable react/no-unescaped-entities */
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import StatsSection from "../components/Stats";
import AboutHero from "../components/AboutHero";

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
        <AboutHero />
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
