import Link from "next/link";
import TypewriterHero from "./components/TypewriterHero";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-background-alt">
      {/* Hero Section */}
      <TypewriterHero />

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-theme-primary mb-4">
              What I Do
            </h2>
            <p className="text-lg text-theme-secondary max-w-2xl mx-auto">
              Comprehensive SEO services designed to boost your online presence and drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Technical SEO
              </h3>
              <p className="text-theme-secondary">
                Site speed optimization, mobile-first indexing, Core Web Vitals, and technical audits to ensure your website performs at its best.
              </p>
            </div>

            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Content Strategy
              </h3>
              <p className="text-theme-secondary">
                Keyword research, content optimization, and strategic content planning to attract and engage your target audience.
              </p>
            </div>

            <div className="bg-theme-background rounded-lg shadow-theme-light p-8 text-center">
              <div className="w-16 h-16 bg-theme-accent-light bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-theme-secondary">
                Detailed performance tracking, custom reporting, and data-driven insights to measure and optimize your SEO success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">300%</div>
              <div className="text-theme-white text-opacity-80">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">50+</div>
              <div className="text-theme-white text-opacity-80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">95%</div>
              <div className="text-theme-white text-opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-theme-white mb-2">5+</div>
              <div className="text-theme-white text-opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-theme-primary mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-theme-secondary mb-8">
            Let's discuss how I can help you achieve your SEO goals and drive sustainable organic growth.
          </p>
          <Link
            href="/contact"
            className="bg-theme-accent text-theme-white px-8 py-3 rounded-lg font-medium hover:bg-theme-accent-hover transition-colors duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
