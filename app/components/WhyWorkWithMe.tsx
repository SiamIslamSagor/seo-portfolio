"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyWorkWithMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, itemsRef.current], {
        opacity: 0,
        y: 50,
      });

      // Timeline animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }).to(
        itemsRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // Stagger animation for benefit items
      const benefitItems = itemsRef.current?.querySelectorAll<HTMLDivElement>(
        ".benefit-item"
      );
      if (benefitItems && benefitItems.length > 0) {
        gsap.fromTo(
          benefitItems,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: "1-on-1 Expert Attention",
      description: "You're not just another client in a big agency. I personally manage your case from start to finish.",
      icon: "👤",
    },
    {
      title: "Customized Reputation Plans",
      description: "Your problem is unique. I tailor every strategy around your situation and goals.",
      icon: "🎯",
    },
    {
      title: "Proven Results in the USA",
      description: "From CEOs to small business owners, I've helped clients across the U.S. rebuild their digital image.",
      icon: "🇺🇸",
    },
    {
      title: "Clean Up Search Results",
      description: "I help suppress negative content and boost positive assets so the right information shows first.",
      icon: "🔍",
    },
    {
      title: "Boost Positive Presence",
      description: "Through strategic content creation, SEO, and media placements, I help you look as good as you are.",
      icon: "📈",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-theme-background-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl font-bold text-theme-primary mb-4"
          >
            Why Work with Me?
          </h2>
        </div>

        <div
          ref={itemsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item bg-theme-background rounded-lg shadow-theme-light p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-theme-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;