'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react';

const TypewriterHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Professional SEO Services That Drive Real Results",
    "Increase Your Online Visibility & Rankings",
    "Boost Organic Traffic & Generate More Leads",
    "Data-Driven SEO Strategies That Work"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    // Add some randomness to make it feel more natural
    const getRandomDelay = (baseDelay: number) => {
      return baseDelay + Math.random() * 50;
    };
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? getRandomDelay(30) : getRandomDelay(80)); // Random delays for natural feel

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentTextIndex, texts]);

  return (
    <section className="bg-theme-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6 ">
              {/* Typewriter Heading */}
              <div className="space-y-2">
                {/* Fixed height container to prevent layout shifts */}
                <div className="h-20 sm:h-24 lg:h-28 flex items-center">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-primary leading-tight">
                    <span className="block typewriter-text">
                      {displayText}
                     <span 
                       className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-theme-accent ml-1 typewriter-cursor"
                     ></span>
                    </span>
                  </h1>
                </div>
                
                <h2 className="text-lg sm:text-xl text-theme-accent font-semibold">
                  Increase leads and sales with customized SEO
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg text-theme-secondary leading-relaxed max-w-2xl">
                Transform your online presence with our professional SEO and Local SEO services. 
                We help businesses achieve higher search rankings, increased organic traffic, and 
                measurable ROI through data-driven strategies and expert optimization techniques.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-theme-gradient text-theme-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-theme-gradient-hover transform hover:-translate-y-1 transition-all duration-300 shadow-theme-gradient hover:shadow-theme-gradient-hover text-center"
                >
                  Get Free SEO Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-theme-accent text-theme-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-theme-accent hover:text-theme-white transition-all duration-300 text-center"
                >
                  View Our Results
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <span className="text-theme-secondary font-medium">Follow us:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-theme-background-alt rounded-full flex items-center justify-center hover:bg-theme-accent hover:text-theme-white transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-theme-secondary group-hover:text-theme-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-theme-background-alt rounded-full flex items-center justify-center hover:bg-theme-accent hover:text-theme-white transition-all duration-300 group"
                  >
                    <Twitter className="w-5 h-5 text-theme-secondary group-hover:text-theme-white" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-theme-background-alt rounded-full flex items-center justify-center hover:bg-theme-accent hover:text-theme-white transition-all duration-300 group"
                  >
                    <Github className="w-5 h-5 text-theme-secondary group-hover:text-theme-white" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="w-10 h-10 bg-theme-background-alt rounded-full flex items-center justify-center hover:bg-theme-accent hover:text-theme-white transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-theme-secondary group-hover:text-theme-white" />
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-theme-border-light">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-theme-secondary text-sm">50+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-theme-secondary text-sm">95% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-theme-secondary text-sm">5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-theme-gradient rounded-2xl p-8 shadow-2xl">
                <div className="bg-theme-background rounded-xl p-6 space-y-6">
                  {/* SEO Metrics Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-theme-background-alt rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-theme-accent">300%</div>
                      <div className="text-sm text-theme-secondary">Traffic Increase</div>
                    </div>
                    <div className="bg-theme-background-alt rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-theme-accent">#1</div>
                      <div className="text-sm text-theme-secondary">Google Ranking</div>
                    </div>
                    <div className="bg-theme-background-alt rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-theme-accent">150%</div>
                      <div className="text-sm text-theme-secondary">Lead Growth</div>
                    </div>
                    <div className="bg-theme-background-alt rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-theme-accent">24/7</div>
                      <div className="text-sm text-theme-secondary">Monitoring</div>
                    </div>
                  </div>

                  {/* Chart Visualization */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-theme-primary">Organic Traffic Growth</h3>
                    <div className="space-y-2">
                      {[85, 92, 78, 95, 88, 96].map((height, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-xs text-theme-secondary w-8">Q{index + 1}</span>
                          <div className="flex-1 bg-theme-background-alt rounded-full h-2">
                            <div 
                              className="bg-theme-gradient rounded-full h-2 transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${height}%`,
                                animationDelay: `${index * 200}ms`
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-theme-secondary w-8">{height}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-theme-accent rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-theme-accent-light rounded-full animate-pulse"></div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-theme-gradient opacity-10 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypewriterHero;
