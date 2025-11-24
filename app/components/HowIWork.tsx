"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Understand Your Problem",
    description:
      "We discuss your concerns and goals to grasp the core issues clearly.",
  },
  {
    title: "Audit Your Presence",
    description:
      "I analyze your current online reputation and identify areas to improve.",
  },
  {
    title: "Send Proposal and Project Plan",
    description:
      "You receive a customized plan outlining the steps and strategies.",
  },
  {
    title: "Start Building Positive",
    description:
      "I begin enhancing your online image by promoting positive content.",
  },
];

const HowIWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".step-card");

    elements?.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">How I Work</h2>
        <p className="text-gray-600 text-center mb-12 leading-relaxed">
          I focus on clear communication, understanding your goals, and
          delivering results efficiently. I combine expertise with dedication to
          provide solutions that truly make a difference. Collaboration and
          transparency guide every step of my process.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step-card bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-theme-gradient text-white rounded-full font-bold text-lg mb-4">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
