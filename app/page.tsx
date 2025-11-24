import Link from "next/link";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowIWork from "./components/HowIWork";
import Testimonials from "./components/Testimonials";
import TypewriterHero from "./components/TypewriterHero";
import StatsSection from "./components/Stats";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-background-alt">
      {/* Hero Section */}
      <TypewriterHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section — Client Required Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-primary mb-4">
              What Is ORM & Why It Matters
            </h2>
            <p className="text-lg text-theme-secondary max-w-4xl mx-auto">
              Online Reputation Management (ORM) is the process of actively
              monitoring and shaping how your brand appears online—from search
              results to social reviews. In today’s digital world, your
              reputation is your first impression. A strong ORM strategy builds
              trust, enhances visibility, and safeguards your credibility.
            </p>
          </div>

          {/* Bottom Section — 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Monitor & Track Reputation
              </h3>
              <p className="text-theme-secondary">
                Stay aware of what appears about you online through real-time
                monitoring of search results, reviews, and brand mentions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Protect Your Online Identity
              </h3>
              <p className="text-theme-secondary">
                Identify negative or misleading content early and take strategic
                actions to safeguard your digital identity and reputation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-2">
                Build Trust & Credibility
              </h3>
              <p className="text-theme-secondary">
                Strengthen positive online assets and ensure people see the most
                accurate and trustworthy version of your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <StatsSection />
      {/* <section className="bg-theme-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-theme-white text-opacity-80 max-w-2xl mx-auto">
              Real results from real clients across various industries and
              business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                65+
              </div>
              <div className="text-theme-white text-opacity-80">
                Reputation Issues Resolved
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                98%
              </div>
              <div className="text-theme-white text-opacity-80">
                Success Rate in SERP Suppression
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">
                60+
              </div>
              <div className="text-theme-white text-opacity-80">
                Happy Client&apos;s
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">7+</div>
              <div className="text-theme-white text-opacity-80">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <FAQ />
      <HowIWork />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-theme-primary mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-theme-secondary mb-8">
            Let’s discuss how I can help you achieve your SEO goals and drive
            sustainable organic growth.
          </p>
          <Link
            href="/contact"
            className="bg-theme-accent text-theme-white px-8 py-3 rounded-lg font-medium hover:bg-theme-accent-hover transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
