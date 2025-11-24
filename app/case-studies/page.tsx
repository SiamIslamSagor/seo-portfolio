export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my successful SEO campaigns and the results I’ve achieved for clients across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                E-commerce Store SEO
              </h3>
              <p className="text-gray-600 mb-4">
                Increased organic traffic by 300% for an online fashion retailer through comprehensive SEO strategy.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: 6 months</span>
                <span>Traffic: +300%</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Local Business Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Helped a local restaurant chain dominate local search results and increase foot traffic by 150%.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: 4 months</span>
                <span>Foot Traffic: +150%</span>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                SaaS Company Growth
              </h3>
              <p className="text-gray-600 mb-4">
                Boosted organic conversions by 250% for a B2B SaaS platform through targeted content marketing.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Duration: 8 months</span>
                <span>Conversions: +250%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
