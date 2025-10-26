export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              SEO Specialist & Digital Marketing Expert
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h2>
              <p className="text-gray-600 mb-4">
                With over 5 years of experience in SEO and digital marketing, I've helped dozens of businesses 
                increase their online visibility and drive sustainable organic growth. My passion lies in 
                understanding search algorithms and creating strategies that deliver real results.
              </p>
              <p className="text-gray-600">
                I specialize in technical SEO, content optimization, and data-driven marketing strategies 
                that help businesses rank higher and convert better in search results.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Technical SEO</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Site speed optimization</li>
                    <li>• Mobile-first indexing</li>
                    <li>• Schema markup</li>
                    <li>• Core Web Vitals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Content Strategy</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Keyword research</li>
                    <li>• Content optimization</li>
                    <li>• Link building</li>
                    <li>• Local SEO</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
                  <div className="text-gray-600">Average Traffic Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
