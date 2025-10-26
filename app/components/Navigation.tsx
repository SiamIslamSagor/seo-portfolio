'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StaggeredMenu from './StaggeredMenu';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/about', label: 'About Me' },
    { href: '/contact', label: 'Contact Me' },
  ];

  // Convert nav items for StaggeredMenu
  const staggeredMenuItems = navItems.map(item => ({
    label: item.label,
    link: item.href,
    ariaLabel: `Navigate to ${item.label}`
  }));

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50 transition-all duration-300 hover:shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative group"
              >
                <span className="relative z-10">SEO Portfolio</span>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group nav-link ${
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {/* Active link background */}
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/25 animate-pulse-slow"></div>
                  )}
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Text content */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Bottom border for active state */}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                  
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-8 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <StaggeredMenu
          position="right"
          colors={['#3B82F6', '#1E40AF']}
          items={staggeredMenuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/next.svg"
          menuButtonColor="#374151"
          openMenuButtonColor="#1F2937"
          accentColor="#3B82F6"
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
