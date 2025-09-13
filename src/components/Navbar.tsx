"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-black">
              UberRide
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How it works
              </a>
              <a href="#safety" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Safety
              </a>
              <a href="#download" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Download
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Sign in
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a
                href="#services"
                className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#safety"
                className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Safety
              </a>
              <a
                href="#download"
                className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="text-gray-700 hover:text-black justify-start">
                    Sign in
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 justify-start">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}