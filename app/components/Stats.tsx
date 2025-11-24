"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsSection() {
  const countersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!countersRef.current) return;

    const items = countersRef.current.querySelectorAll("[data-counter]");

    const ctx = gsap.context(() => {
      items.forEach((item: any) => {
        const finalValue = parseInt(item.getAttribute("data-counter") || "0");
        const suffix = item.getAttribute("data-suffix") || "";

        gsap.fromTo(
          item,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: countersRef.current,
              start: "top 85%",
            },
            onUpdate: function () {
              item.innerText = Math.floor((item as any).innerText) + suffix;
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-theme-accent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-white mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-theme-white text-opacity-80 max-w-2xl mx-auto">
            Real results from real clients across various industries and business sizes.
          </p>
        </div>

        {/* Counter Elements */}
        <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="text-4xl font-bold text-theme-white mb-2"
              data-counter="65"
              data-suffix="+"
            >
              0+
            </div>
            <div className="text-theme-white text-opacity-80">
              Reputation Issues Resolved
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-4xl font-bold text-theme-white mb-2"
              data-counter="98"
              data-suffix="%"
            >
              0%
            </div>
            <div className="text-theme-white text-opacity-80">
              Success Rate in SERP Suppression
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-4xl font-bold text-theme-white mb-2"
              data-counter="60"
              data-suffix="+"
            >
              0+
            </div>
            <div className="text-theme-white text-opacity-80">
              Happy Client&apos;s
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-4xl font-bold text-theme-white mb-2"
              data-counter="7"
              data-suffix="+"
            >
              0+
            </div>
            <div className="text-theme-white text-opacity-80">
              Years of Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
