export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About us", href: "#" },
      { name: "Newsroom", href: "#" },
      { name: "Investor relations", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" }
    ],
    products: [
      { name: "Ride", href: "#" },
      { name: "Drive", href: "#" },
      { name: "Deliver", href: "#" },
      { name: "Eat", href: "#" },
      { name: "UberRide for Business", href: "#" }
    ],
    global: [
      { name: "Cities", href: "#" },
      { name: "Safety", href: "#" },
      { name: "Requirements", href: "#" },
      { name: "Airports", href: "#" },
      { name: "Hub", href: "#" }
    ],
    support: [
      { name: "Help center", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Cancellation policy", href: "#" },
      { name: "Refunds", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold mb-4">UberRide</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Making transportation accessible, reliable, and safe for everyone, everywhere.
            </p>
            
            {/* App Download Links */}
            <div className="space-y-3">
              <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7743f1e-de99-48f2-b85a-e0bdac46d9e0.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              <br />
              <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/456759c2-f9e6-45fe-b1fa-d5db54d0d501.png"
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Global citizenship</h3>
            <ul className="space-y-2">
              {footerLinks.global.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-2xl hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-sm whitespace-nowrap">Stay updated:</span>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-48"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <div className="text-gray-400 text-xs">
                © 2024 UberRide Technologies Inc. All rights reserved.
              </div>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </div>
            </div>

            {/* Language and Region */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🌍</span>
                <select className="bg-gray-900 text-white border border-gray-700 rounded px-3 py-1 text-xs">
                  <option>English (US)</option>
                  <option>Español</option>
                  <option>Français</option>
                  <option>Deutsch</option>
                </select>
              </div>
              <div className="text-gray-400 text-sm">
                United States
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <div className="text-gray-500 text-xs">
            Questions? Contact us at{" "}
            <a href="mailto:support@uberride.com" className="text-green-400 hover:text-green-300 transition-colors">
              support@uberride.com
            </a>
            {" "}or call{" "}
            <a href="tel:+1-800-UBER-RIDE" className="text-green-400 hover:text-green-300 transition-colors">
              1-800-UBER-RIDE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}