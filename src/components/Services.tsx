import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Personal Rides",
      description: "Reliable rides at the tap of a button. Choose from multiple vehicle types that suit your needs and budget.",
      features: ["UberX", "UberXL", "Comfort", "Black"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29ce7a6d-3330-4811-8878-06d2c37d2feb.png",
      alt: "Professional driver in modern sedan car with city background"
    },
    {
      title: "Business Travel",
      description: "Professional rides for business meetings, airport transfers, and corporate events. Expensable and reliable.",
      features: ["Corporate accounts", "Receipts", "Priority support", "Premium vehicles"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1fe99f4c-3457-49e8-b6b2-86e6c503f4bb.png",
      alt: "Business professional in luxury vehicle in urban setting"
    },
    {
      title: "Food Delivery",
      description: "Get your favorite meals delivered fast from local restaurants. Track your order in real-time.",
      features: ["Real-time tracking", "Wide restaurant selection", "Fast delivery", "No delivery fees*"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4dd1f012-b690-46df-a0cb-a759af6cffa9.png",
      alt: "Delivery driver with food bags on scooter in city street"
    },
    {
      title: "Package Delivery",
      description: "Send packages across the city quickly and safely. Perfect for urgent deliveries and gifts.",
      features: ["Same-day delivery", "Package tracking", "Secure handling", "Flexible pickup"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efcbe3c4-3e4e-4749-a6f2-6e8021b9db01.png",
      alt: "Courier delivering package to customer at modern building"
    },
    {
      title: "Shared Rides",
      description: "Share your ride with others heading in the same direction. Save money and reduce your carbon footprint.",
      features: ["Lower cost", "Eco-friendly", "Meet new people", "Optimized routes"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d4f27700-3fae-4286-8dd6-51733d935f65.png",
      alt: "Multiple passengers sharing comfortable ride in friendly atmosphere"
    },
    {
      title: "Airport Transfers",
      description: "Stress-free airport rides with flight tracking, meet & greet service, and spacious vehicles for luggage.",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "Fixed pricing"],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0424ff3-166b-43a1-8d33-8e65d36efdd4.png",
      alt: "Airport transfer vehicle with luggage at modern terminal"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services built for you
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From daily commutes to special occasions, we have the right ride for every moment. 
            Experience convenience, safety, and reliability with every trip.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join millions of users who trust UberRide for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Start riding
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Become a driver
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}