/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import FAQ from "./components/FAQ";
import FeaturedService from "./components/FeaturedService";
import Footer from "./components/Footer";
import HowIWork from "./components/HowIWork";
import Testimonials from "./components/Testimonials";
import TypewriterHero from "./components/TypewriterHero";
import StatsSection from "./components/Stats";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Contact from "./contact/page";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import AboutHero from "./components/AboutHero";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const ormSectionRef = useRef<HTMLElement>(null);
  const ormTitleRef = useRef<HTMLDivElement>(null);
  const ormCardsRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  const ctaContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // ORM Section animations
      if (ormSectionRef.current) {
        // Initial setup - hide elements
        gsap.set([ormTitleRef.current, ormCardsRef.current], {
          opacity: 0,
          y: 50,
        });

        // Timeline animation on scroll
        const ormTl = gsap.timeline({
          scrollTrigger: {
            trigger: ormSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        ormTl
          .to(ormTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            ormCardsRef.current,
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.4"
          );

        // Stagger animation for ORM cards
        const ormCards =
          ormCardsRef.current?.querySelectorAll<HTMLDivElement>(".orm-card");
        if (ormCards && ormCards.length > 0) {
          gsap.fromTo(
            ormCards,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ormCardsRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // CTA Section animations
      if (ctaSectionRef.current) {
        // Initial setup - hide elements
        gsap.set(ctaContentRef.current, {
          opacity: 0,
          y: 50,
        });

        // Timeline animation on scroll
        gsap.to(ctaContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-theme-background-alt">
      {/* Hero Section */}
      <TypewriterHero />

      <section ref={ormSectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section — Client Required Content */}
          <div ref={ormTitleRef} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-primary mb-4">
              What Is ORM & Why It Matters
            </h2>
            <p className="text-lg text-theme-secondary max-w-4xl mx-auto">
              Online Reputation Management (ORM) is the process of actively
              monitoring and shaping how your brand appears online—from search
              results to social reviews. In today’s digital world, your
              reputation is your first impression. A strong ORM strategy builds
              trust, enhances visibility, and safeguards your credibility.
            </p>
          </div>

          {/* Bottom Section — 3 Column Grid */}
          <div
            ref={ormCardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <div className="orm-card bg-theme-background rounded-lg shadow-theme-light p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Monitor & Track Reputation
              </h3>
              <p className="text-theme-secondary">
                Stay aware of what appears about you online through real-time
                monitoring of search results, reviews, and brand mentions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="orm-card bg-theme-background rounded-lg shadow-theme-light p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Protect Your Online Identity
              </h3>
              <p className="text-theme-secondary">
                Identify negative or misleading content early and take strategic
                actions to safeguard your digital identity and reputation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="orm-card bg-theme-background rounded-lg shadow-theme-light p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Build Trust & Credibility
              </h3>
              <p className="text-theme-secondary">
                Strengthen positive online assets and ensure people see the most
                accurate and trustworthy version of your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <StatsSection />
      {/* <section className="bg-theme-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-theme-white text-opacity-80 max-w-2xl mx-auto">
              Real results from real clients across various industries and
              business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                65+
              </div>
              <div className="text-theme-white text-opacity-80">
                Reputation Issues Resolved
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                98%
              </div>
              <div className="text-theme-white text-opacity-80">
                Success Rate in SERP Suppression
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                60+
              </div>
              <div className="text-theme-white text-opacity-80">
                Happy Client&apos;s
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">7+</div>
              <div className="text-theme-white text-opacity-80">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <FAQ />
      <HowIWork />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Work With Me Section */}
      <WhyWorkWithMe />

      <AboutHero />

      {/* Featured Service Section */}
      <FeaturedService />

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-20">
        <div
          ref={ctaContentRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-theme-primary mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-theme-secondary mb-8">
            Let's discuss how I can help you achieve your SEO goals and drive
            sustainable organic growth.
          </p>

          <Link
            href="/contact"
            className="bg-theme-gradient text-theme-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-theme-gradient-hover transform hover:-translate-y-1 transition-all duration-300 shadow-theme-gradient hover:shadow-theme-gradient-hover text-center"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
