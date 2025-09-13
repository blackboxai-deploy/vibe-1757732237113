export default function AppPromotion() {
  const appFeatures = [
    {
      title: "Easy Booking",
      description: "Book rides with just a few taps. Set your pickup location and destination in seconds."
    },
    {
      title: "Real-time Updates",
      description: "Get live updates on your driver's location and estimated arrival time."
    },
    {
      title: "Multiple Payment Options",
      description: "Pay with credit cards, digital wallets, or cash. Your choice, your convenience."
    },
    {
      title: "Trip History",
      description: "Access all your previous rides, receipts, and trip details in one place."
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our round-the-clock customer support team."
    },
    {
      title: "Ride Scheduling",
      description: "Schedule rides up to 30 days in advance for important appointments."
    }
  ];

  return (
    <section id="download" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main App Promotion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get the app that gets you there
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Download the UberRide app for the fastest, most convenient way to request rides, 
              track your driver, and manage your account on the go.
            </p>
            
            {/* Download Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">10M+</div>
                <div className="text-gray-400 text-sm">App downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">4.8★</div>
                <div className="text-gray-400 text-sm">App store rating</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Download on App Store"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85fea4d9-99ea-420d-90ea-fa3fbeb0aaf6.png"
                  alt="Download on the App Store"
                  className="h-14 rounded-lg"
                />
              </a>
              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Get it on Google Play"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e84612ae-b3b9-40ec-937e-c4152442c08f.png"
                  alt="Get it on Google Play"
                  className="h-14 rounded-lg"
                />
              </a>
            </div>

            {/* QR Code */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="bg-white p-3 rounded-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb316e50-e15d-407b-866f-03738480488c.png"
                  alt="QR code for app download"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <div className="text-sm text-gray-300">Scan to download</div>
                <div className="text-xs text-gray-400">Compatible with iOS & Android</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative z-10 max-w-sm mx-auto">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cee5e603-ed70-4074-8934-13864ab71efb.png"
                alt="Smartphone showing UberRide app interface with booking screen"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-full h-full bg-green-500 rounded-3xl opacity-20 z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-400 rounded-full opacity-30 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 z-0"></div>
          </div>
        </div>

        {/* App Features Grid */}
        <div className="border-t border-gray-800 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need in one app
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover all the features that make UberRide the preferred choice for millions of users worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join the ride revolution
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              More than just transportation - join a community that's changing how the world moves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                Download now
              </button>
              <button className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-lg font-bold hover:bg-green-300 hover:text-green-900 transition-colors text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by users in over 70 countries</p>
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">🌍</div>
            <div className="text-2xl font-bold">🚗</div>
            <div className="text-2xl font-bold">⭐</div>
            <div className="text-2xl font-bold">📱</div>
            <div className="text-2xl font-bold">🔒</div>
          </div>
        </div>
      </div>
    </section>
  );
}