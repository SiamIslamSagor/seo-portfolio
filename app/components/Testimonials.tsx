'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    content: "Our organic traffic increased by 300% in just 6 months. The SEO strategies implemented were game-changing for our business growth.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "E-commerce Plus",
    content: "Professional, data-driven approach that delivered measurable results. Our search rankings improved dramatically across all target keywords.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "LocalBiz Solutions",
    content: "The local SEO work transformed our online presence. We're now ranking #1 for all our target local keywords. Highly recommended!",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "VP Marketing",
    company: "GrowthCorp",
    content: "Outstanding service and results. The team's expertise in technical SEO helped us achieve our traffic goals ahead of schedule.",
    rating: 5,
    avatar: "DT"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Digital Manager",
    company: "InnovateLab",
    content: "Comprehensive SEO audit revealed issues we never knew existed. The implementation was smooth and results were immediate.",
    rating: 5,
    avatar: "LW"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, cardRef.current, controlsRef.current, dotsRef.current], {
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
      .to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.4")
      .to(controlsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2")
      .to(dotsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");


      // Pulse animation for rating stars
      const stars = cardRef.current?.querySelectorAll('.star');
      if (stars) {
        gsap.to(stars, {
          scale: 1.1,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          stagger: 0.1,
          ease: "power2.inOut"
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate card transition
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { 
          scale: 0.95, 
          opacity: 0.7,
          rotationY: 10
        },
        { 
          scale: 1, 
          opacity: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    }
  }, [currentIndex]);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-theme-background-alt via-theme-background to-theme-background-alt py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-theme-accent-light/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-linear-to-tr from-theme-accent/8 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-bl from-theme-accent-light/6 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-theme-accent-light bg-opacity-10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-sm font-medium text-theme-accent">Client Testimonials</span>
          </div>
          <h2 ref={titleRef} className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-theme-primary via-theme-accent to-theme-primary bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p ref={subtitleRef} className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our SEO services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div ref={cardRef} className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto overflow-hidden border border-white/20">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-accent-light/5 via-transparent to-theme-accent/5"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-theme-accent-light opacity-20">
              <Quote className="w-20 h-20" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-theme-accent rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-theme-accent-light rounded-full animate-ping"></div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="star w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-theme-primary text-center leading-relaxed mb-10 font-medium">
                <span className="text-4xl text-theme-accent">"</span>
                {testimonials[currentIndex].content}
                <span className="text-4xl text-theme-accent">"</span>
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-20 h-20       bg-theme-gradient  hover:bg-theme-gradient-hover    rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="absolute -inset-1 bg-linear-to-r from-theme-accent to-theme-accent-hover rounded-full opacity-20 animate-pulse"></div>
                </div>
                
                {/* Client Details */}
                <div className="text-center">
                  <h4 className="font-bold text-theme-primary text-xl mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-theme-secondary font-medium">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-neutral-100 backdrop-blur-sm rounded-full hover:shadow-xl flex items-center justify-center hover:bg-theme-accent transition-all duration-300 group z-20 border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-theme-secondary " />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-neutral-100 backdrop-blur-sm rounded-full hover:shadow-xl flex items-center justify-center hover:bg-theme-accent transition-all duration-300 group z-20 border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-theme-secondary " />
          </button>
        </div>

        {/* Dots Indicator */}
        <div ref={dotsRef} className="flex justify-center space-x-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex
                  ? ' bg-theme-gradient  hover:bg-theme-gradient-hover  scale-[1.7] shadow-lg'
                  : ' bg-theme-gradient  hover:bg-theme-gradient-hover hover:scale-110'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
