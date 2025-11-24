"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedService = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const serviceTitleRef = useRef<HTMLDivElement>(null);
  const serviceContentRef = useRef<HTMLDivElement>(null);
  const whoTitleRef = useRef<HTMLDivElement>(null);
  const clientsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set(
        [serviceTitleRef.current, serviceContentRef.current, whoTitleRef.current, clientsGridRef.current],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Timeline animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(serviceTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          serviceContentRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          whoTitleRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .to(
          clientsGridRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );

      // Stagger animation for service features
      const serviceFeatures = serviceContentRef.current?.querySelectorAll<HTMLDivElement>(
        ".service-feature"
      );
      if (serviceFeatures && serviceFeatures.length > 0) {
        gsap.fromTo(
          serviceFeatures,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: serviceContentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Stagger animation for client types
      const clientTypes = clientsGridRef.current?.querySelectorAll<HTMLDivElement>(
        ".client-type"
      );
      if (clientTypes && clientTypes.length > 0) {
        gsap.fromTo(
          clientTypes,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: clientsGridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceFeatures = [
    {
      title: "SEO & PR execution",
      description: "I use SEO and PR strategies to push down the bad and highlight what builds your authority and credibility.",
      icon: "🔍",
    },
    {
      title: "Long-term monitoring",
      description: "I keep an eye on your online presence regularly—spotting risks early and keeping your image clean and strong.",
      icon: "👁️",
    },
    {
      title: "Full reputation audit",
      description: "I evaluate your entire digital presence to find harmful content, weak points, and chances to strengthen your image.",
      icon: "📊",
    },
  ];

  const clientTypes = [
    {
      title: "Entrepreneurs",
      description: "I help entrepreneurs protect their digital footprint and build a trustworthy online presence that reflects their vision.",
      icon: "🚀",
    },
    {
      title: "CEOs",
      description: "As a personal reputation ally, I support CEOs in managing Google search results and controlling their professional narrative online.",
      icon: "👔",
    },
    {
      title: "Doctors",
      description: "I assist medical professionals in removing misleading reviews and building online trust with patients.",
      icon: "🩺",
    },
    {
      title: "Lawyers",
      description: "I work with legal professionals to maintain a clean reputation across directories, review platforms, and Google results.",
      icon: "⚖️",
    },
    {
      title: "Hi-profile Professionals",
      description: "Whether you're a consultant or expert in your field, I help you showcase authority while suppressing harmful content.",
      icon: "🎯",
    },
    {
      title: "Public Figures",
      description: "I help public figures manage media exposure and maintain a positive image, even after negative press or controversy.",
      icon: "🌟",
    },
    {
      title: "Small Businesses & Startups",
      description: "I support founders and early-stage companies in building credibility from day one by crafting a strong online presence.",
      icon: "💼",
    },
    {
      title: "Victims of Cyberbullying or False Accusations",
      description: "If you're dealing with false claims, fake reviews, or online attacks — I stand by your side to clean it up and reclaim your story.",
      icon: "🛡️",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-theme-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Service Section */}
        <div className="mb-20">
          <div
            ref={serviceTitleRef}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-theme-primary mb-4">
              Featured Service: ORM Expert Strategy Plan
            </h2>
            <p className="text-lg text-theme-secondary max-w-3xl mx-auto">
              My ORM Expert plan is a personalized action roadmap that includes:
            </p>
          </div>

          <div
            ref={serviceContentRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="service-feature bg-theme-background-alt rounded-lg shadow-theme-light p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-theme-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-theme-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who I Work With Section */}
        <div>
          <div
            ref={whoTitleRef}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-theme-primary mb-4">
              Who I Work With (As an Individual ORM Specialist)
            </h2>
          </div>

          <div
            ref={clientsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="client-type bg-theme-background-alt rounded-lg shadow-theme-light p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{client.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-primary mb-2">
                      {client.title}
                    </h3>
                    <p className="text-theme-secondary text-sm leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;