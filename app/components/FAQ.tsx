'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy, and results typically start showing within 3-6 months. However, some improvements like technical fixes can show immediate benefits. We provide monthly reports to track progress and ensure you're on the right path to achieving your goals."
  },
  {
    id: 2,
    question: "What's included in your SEO audit?",
    answer: "Our comprehensive SEO audit covers technical SEO, on-page optimization, content analysis, backlink profile, site speed, mobile-friendliness, Core Web Vitals, keyword research, competitor analysis, and local SEO factors. You'll receive a detailed report with actionable recommendations."
  },
  {
    id: 3,
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with startups, small businesses, mid-size companies, and large enterprises. Our SEO strategies are tailored to your specific business size, industry, and goals. Whether you're a local business or an e-commerce giant, we have solutions for you."
  },
  {
    id: 4,
    question: "How do you measure SEO success?",
    answer: "We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, click-through rates, bounce rate, page load speed, and ROI. We provide detailed monthly reports with clear metrics and insights into your SEO performance."
  },
  {
    id: 5,
    question: "What's the difference between SEO and paid advertising?",
    answer: "SEO focuses on improving your organic search rankings through optimization, while paid advertising (PPC) involves paying for ad placement. SEO provides long-term, sustainable results, while PPC gives immediate visibility but stops when you stop paying. We often recommend a combination of both strategies."
  },
  {
    id: 6,
    question: "Do you provide content creation services?",
    answer: "Yes! We offer content strategy, keyword research, content planning, and can connect you with professional content writers. Our content is optimized for both users and search engines, helping you rank higher and engage your audience effectively."
  },
  {
    id: 7,
    question: "How much do your SEO services cost?",
    answer: "Our pricing varies based on your business size, industry, and specific needs. We offer flexible packages starting from basic audits to comprehensive SEO management. Contact us for a free consultation and customized quote that fits your budget and goals."
  },
  {
    id: 8,
    question: "Can you help with local SEO?",
    answer: "Absolutely! Local SEO is one of our specialties. We help local businesses improve their Google My Business listings, local citations, reviews, and local search rankings. Our local SEO strategies have helped many businesses dominate their local markets."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const faqItemsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, faqItemsRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });

      // Animate elements on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(faqItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");

      // Stagger animation for FAQ items
      gsap.fromTo(faqItemsRef.current?.querySelectorAll('.faq-item'), 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqItemsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate FAQ item opening/closing
  useEffect(() => {
    faqItemsRef.current?.querySelectorAll('.faq-item').forEach((item, index) => {
      const isOpen = openItems.includes(index + 1);
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      
      if (answer && icon) {
        if (isOpen) {
          gsap.to(answer, {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(icon, {
            rotation: 180,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(answer, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(icon, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });
  }, [openItems]);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-theme-background via-theme-background-alt to-theme-background py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-theme-accent-light/8 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -right-16 w-28 h-28 bg-gradient-to-tl from-theme-accent/6 to-transparent rounded-full blur-lg"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-bl from-theme-accent-light/5 to-transparent rounded-full blur-md"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-theme-accent-light bg-opacity-10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-theme-accent" />
            <span className="text-sm font-medium text-theme-accent">FAQ</span>
          </div>
          <h2 ref={titleRef} className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-theme-primary via-theme-accent to-theme-primary bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p ref={subtitleRef} className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Here are the most common questions about our SEO services.
          </p>
        </div>

        {/* FAQ Items */}
        <div ref={faqItemsRef} className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="faq-item bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-theme-accent-light/5 hover:to-theme-accent/5 transition-all duration-300 group"
                aria-expanded={openItems.includes(item.id)}
              >
                <h3 className="text-lg font-semibold text-theme-primary pr-6 group-hover:text-theme-accent transition-colors duration-300">
                  {item.question}
                </h3>
                <div className="shrink-0">
                  <div className="faq-icon w-10 h-10 bg-gradient-to-br from-theme-accent to-theme-accent-hover rounded-full flex items-center justify-center shadow-lg">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className="faq-answer overflow-hidden">
                <div className="px-8 pb-6">
                  <div className="border-t border-theme-border-light pt-6">
                    <p className="text-theme-secondary leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="bg-gradient-to-r from-theme-accent-light/10 to-theme-accent/10 rounded-2xl p-8 border border-theme-accent-light/20">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-theme-accent mr-2" />
              <span className="text-theme-accent font-semibold">Need More Help?</span>
            </div>
            <p className="text-theme-secondary mb-6 text-lg">
              Still have questions? We're here to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-theme-accent to-theme-accent-hover text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
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
