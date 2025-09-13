export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a ride",
      description: "Open the app and enter your destination. Choose from multiple ride options that suit your needs and budget.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c10ae114-0d6a-46d2-98ca-c7a4b20da7da.png",
      alt: "Person using smartphone app to request ride with modern interface"
    },
    {
      number: "02", 
      title: "Get matched",
      description: "We'll connect you with a nearby driver. See their profile, vehicle details, and track their arrival in real-time.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be6ca7d3-2174-4f87-afb2-5b8ac3c54fc5.png",
      alt: "Driver profile and vehicle matching screen with professional photo"
    },
    {
      number: "03",
      title: "Enjoy your ride",
      description: "Your driver will arrive at the pickup location. Relax and enjoy a safe, comfortable ride to your destination.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5108aa3-2670-4342-9042-b52f3e8651c9.png",
      alt: "Comfortable car interior with passenger enjoying safe ride"
    },
    {
      number: "04",
      title: "Rate and pay",
      description: "After your trip, rate your driver and pay seamlessly through the app. No cash needed, everything is automatic.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cdedbd04-e018-4251-8786-7623e9fdef9a.png",
      alt: "Payment and rating screen showing 5 star review completion"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How UberRide works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting a ride has never been easier. Follow these simple steps and you'll be on your way in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block bg-green-100 text-green-600 text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {step.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
                
                {/* Additional CTA for first step */}
                {index === 0 && (
                  <div className="mt-8">
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Download the app
                    </button>
                  </div>
                )}
              </div>

              {/* Step Image */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  {/* Decorative element */}
                  <div className="absolute -z-10 top-4 left-4 w-full h-full bg-green-200 rounded-2xl opacity-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline (Mobile/Desktop Alternative View) */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline Steps */}
            <div className="relative z-10 flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-green-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-center max-w-xs">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      {step.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to experience the difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join millions of riders who choose UberRide for safe, reliable, and convenient transportation every day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Get your first ride
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}