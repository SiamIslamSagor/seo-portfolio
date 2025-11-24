"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// GSAP plugin registration (only in browser)
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  data?: FAQItemType[];
}
const defaultFAQData: FAQItemType[] = [
  {
    id: 1,
    question: "Removing or Suppressing Negative Search Results",
    answer:
      "I help push down or remove harmful content from search engines so your name shows up in a better light.",
  },
  {
    id: 2,
    question: "Fixing Your Google Search Presence",
    answer:
      "I clean up and optimize how you appear on Google so people see a strong, trustworthy image.",
  },
  {
    id: 3,
    question: "Managing Bad PR or News",
    answer:
      "I handle negative press or unfair news stories to reduce damage and protect your online reputation.",
  },
  {
    id: 4,
    question: "Removing Fake or Unfair Reviews",
    answer:
      "I identify and report fake or damaging reviews that hurt your credibility and aim to get them removed.",
  },
  {
    id: 5,
    question: "Creating and Promoting Positive Online Content",
    answer:
      "I publish content that reflects who you really are—positive, accurate, and aligned with your goals.",
  },
  {
    id: 6,
    question: "Building Trust and Authority with Online Assets",
    answer:
      "I use websites, profiles, and press to build your online authority and make you look more credible.",
  },
];
const FAQ: React.FC<FAQProps> = ({ data = defaultFAQData }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);

  const faqContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Toggle FAQ item
  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // GSAP Section animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Hide initial elements
      gsap.set([faqContainerRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(
        faqContainerRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      ).to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

      // Animate FAQ items stagger
      const faqItems =
        faqContainerRef.current?.querySelectorAll<HTMLDivElement>(".faq-item");
      if (faqItems) {
        gsap.fromTo(
          faqItems,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faqContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate open/close FAQ items
  useEffect(() => {
    const faqItems =
      faqContainerRef.current?.querySelectorAll<HTMLDivElement>(".faq-item");
    if (!faqItems) return;

    faqItems.forEach(item => {
      const id = Number(item.dataset.id);
      const isOpen = openItems.includes(id);
      const answerEl = item.querySelector<HTMLDivElement>(".faq-answer");
      const iconEl = item.querySelector<HTMLDivElement>(".faq-icon");

      if (!answerEl || !iconEl) return;

      if (isOpen) {
        gsap.to(answerEl, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconEl, { rotation: 180, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(answerEl, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconEl, { rotation: 0, duration: 0.3, ease: "power2.out" });
      }
    });
  }, [openItems]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-theme-background via-theme-background-alt to-theme-background py-20 lg:py-24 overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Can I Help You With
          </h2>
          <p className="text-theme-primary text-lg mt-3 max-w-xl mx-auto">
            A complete set of reputation management solutions designed to
            protect and enhance your online presence.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={faqContainerRef} className="space-y-6">
          {data.map(item => {
            const isOpen = openItems.includes(item.id);
            return (
              <div
                key={item.id}
                data-id={item.id}
                className="faq-item bg-white/80 backdrop-blur-sm rounded-2xl border-b overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] "
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-linear-to-r hover:from-theme-accent-light/5 hover:to-theme-accent/5 transition-all duration-300  cursor-pointer!"
                  aria-expanded={isOpen}
                  type="button"
                >
                  <h3 className="text-lg font-semibold text-theme-primary pr-6">
                    {item.question}
                  </h3>

                  <div className="faq-icon w-10 h-10 bg-linear-to-br from-theme-accent to-theme-accent-hover rounded-full flex items-center justify-center shadow-lg">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5  " />
                    ) : (
                      <ChevronDown className="w-5 h-5  " />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div className="faq-answer overflow-hidden h-0 opacity-0">
                  <div className="px-8 pb-6">
                    <div className="border-t border-theme-border-light pt-6">
                      <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="bg-linear-to-r from-theme-accent-light/10 to-theme-accent/10 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-theme-accent mr-2" />
              <span className="text-theme-accent font-semibold">
                Need More?
              </span>
            </div>

            <p className="text-theme-secondary mb-6 text-lg">
              Still have questions? I&apos;m here to help!
            </p>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-theme-accent to-theme-accent-hover   rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
