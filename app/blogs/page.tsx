export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SEO Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest SEO trends, strategies, and insights from the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">December 15, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                The Future of SEO: AI and Machine Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how artificial intelligence is reshaping search engine optimization and what it means for your strategy.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">December 10, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Core Web Vitals: A Complete Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to optimize your website's Core Web Vitals to improve user experience and search rankings.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </a>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">December 5, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local SEO Strategies for 2025
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the most effective local SEO tactics to help your business dominate local search results.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
