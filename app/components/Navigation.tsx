"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import StaggeredMenu from "./StaggeredMenu";

const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About Me" },
  ];

  // Convert nav items for StaggeredMenu (include contact for mobile)
  const staggeredMenuItems = [
    ...navItems.map(item => ({
      label: item.label,
      link: item.href,
      ariaLabel: `Navigate to ${item.label}`,
    })),
    {
      label: "Contact Me",
      link: "/contact",
      ariaLabel: "Navigate to Contact Me",
    },
  ];

  const socialItems = [
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Prevent body scroll when menu is open
    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Handle nav link click
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");

      if (isMobileMenuOpen && navMenu && hamburger) {
        if (!navMenu.contains(target) && !hamburger.contains(target)) {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = "";
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polygon
                points="12 2 2 7 12 12 22 7 12 2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="2 17 12 22 22 17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="2 12 12 17 22 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="logo-text">ORM Specialist</span>
          </Link>

          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      pathname === item.href ? "active" : ""
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Link href="/contact" className="nav-btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - StaggeredMenu */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <StaggeredMenu
          position="right"
          colors={["var(--accent-light)", "var(--accent-hover)"]}
          items={staggeredMenuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/next.svg"
          menuButtonColor="var(--primary-light)"
          openMenuButtonColor="var(--primary-hover)"
          accentColor="var(--accent-light)"
          changeMenuColorOnOpen={true}
          isFixed={true}
          onMenuOpen={() => {
            // Optional: Add any logic when menu opens
          }}
          onMenuClose={() => {
            // Optional: Add any logic when menu closes
          }}
        />
      </div>
    </>
  );
};

export default Navigation;
