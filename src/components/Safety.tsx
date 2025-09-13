import { Card, CardContent } from "@/components/ui/card";

export default function Safety() {
  const safetyFeatures = [
    {
      title: "Background Checks",
      description: "All drivers undergo comprehensive background checks and vehicle inspections before joining our platform.",
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        </div>
      )
    },
    {
      title: "Real-time Tracking",
      description: "Share your trip details with friends and family. They can track your route and estimated arrival time.",
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">📍</span>
          </div>
        </div>
      )
    },
    {
      title: "Emergency Assistance",
      description: "24/7 support with direct connection to emergency services when you need help most.",
      icon: (
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">🚨</span>
          </div>
        </div>
      )
    },
    {
      title: "Two-way Ratings",
      description: "Both riders and drivers rate each other, ensuring accountability and maintaining high service standards.",
      icon: (
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">⭐</span>
          </div>
        </div>
      )
    }
  ];

  const trustStats = [
    { number: "99.9%", label: "Trip completion rate" },
    { number: "4.8★", label: "Average driver rating" },
    { number: "24/7", label: "Customer support" },
    { number: "50M+", label: "Safe rides completed" }
  ];

  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your safety is our priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to creating a safe environment for both riders and drivers with comprehensive safety features and 24/7 support.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Center */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety toolkit in every ride
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">GPS tracking for every trip</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Share trip details with trusted contacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Emergency button with direct 911 access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Insurance coverage on every ride</span>
                </div>
              </div>
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors self-start">
                Learn about safety
              </button>
            </div>
            
            {/* Image Side */}
            <div className="relative h-64 lg:h-full">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b681d51-bd8c-4ac6-80b7-c80367f45244.png"
                alt="Safety features dashboard on smartphone with emergency contacts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Community Standards */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Community standards
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We maintain high standards through our Community Guidelines, which apply to everyone using our platform. 
              Together, we create a respectful and safe experience for all.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="text-black border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Read community guidelines
              </button>
              <button className="text-gray-600 px-6 py-3 rounded-lg font-semibold hover:text-gray-800 transition-colors">
                Report a safety issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}