"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Testimonials = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const el = videoRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1.5 }, // Start zoomed in
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 60%", // begins early when element is entering
            end: "bottom-=200 bottom",
            // finishes when video is fully visible
            scrub: true,
            markers: false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-linear-to-br from-theme-background-alt via-theme-background to-theme-background-alt py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-theme-accent-light/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-linear-to-tr from-theme-accent/8 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-linear-to-bl from-theme-accent-light/6 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-theme-accent-light bg-opacity-10 rounded-full px-4 py-2 mb-2">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold bg-linear-to-r from-theme-primary via-theme-accent to-theme-primary bg-clip-text mb-4">
            What's my client saying
          </h2>
          <p className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our SEO services.
          </p>
        </div>

        {/* Video Testimonial */}
        <div
          ref={videoRef}
          className="relative mb-16 max-w-4xl mx-auto will-change-transform"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:p-8 overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-linear-to-br from-theme-accent-light/5 via-transparent to-theme-accent/5"></div>

            <div className="relative z-10 w-full h-0 pb-[56.25%]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/S4H_W9_o3eo?si=CjQSmJ_JtG4-oXXH"
                  title="YouTube video player"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="absolute top-4 left-4 w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-theme-accent-light rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
