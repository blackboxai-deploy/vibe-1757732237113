"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("");

  const handleBookRide = () => {
    // Simulate booking logic
    if (pickup && destination && rideType) {
      alert(`Booking ${rideType} from ${pickup} to ${destination}`);
    } else {
      alert("Please fill in all fields to book your ride");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0421fa06-1006-47ed-8a09-09a788e108d3.png"
          alt="Modern urban cityscape with busy streets and skyscrapers at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Go anywhere with
            <span className="text-green-400 block">UberRide</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Request a ride, hop in, and go. Your reliable driver will pick you up in minutes.
          </p>

          {/* Booking Interface */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Book your ride now</h2>
            
            <div className="space-y-4">
              {/* Pickup Location */}
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Pickup location
                </label>
                <Input
                  id="pickup"
                  type="text"
                  placeholder="Enter pickup address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Where to?
                </label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-12 text-base"
                />
              </div>

              {/* Ride Type */}
              <div>
                <label htmlFor="ride-type" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Ride type
                </label>
                <Select value={rideType} onValueChange={setRideType}>
                  <SelectTrigger className="w-full h-12 text-base">
                    <SelectValue placeholder="Choose your ride" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uberx">UberX - Affordable rides</SelectItem>
                    <SelectItem value="uberxl">UberXL - Extra space</SelectItem>
                    <SelectItem value="comfort">Comfort - Premium rides</SelectItem>
                    <SelectItem value="black">Black - Luxury experience</SelectItem>
                    <SelectItem value="pool">Pool - Share and save</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Book Ride Button */}
              <Button 
                onClick={handleBookRide}
                className="w-full h-12 bg-black text-white hover:bg-gray-800 text-lg font-semibold mt-6"
              >
                Book Ride Now
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>🚗 Average pickup time: 3-5 minutes</p>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-white text-lg font-medium mb-4 sm:mb-0">
              Get the app:
            </div>
            <div className="flex space-x-4">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c339f1d-9ca2-4aeb-b3f4-3272968c754a.png"
                alt="Download on App Store"
                className="h-12 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b192667b-38b1-4c77-82d6-697f66f77fc1.png"
                alt="Get it on Google Play"
                className="h-12 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}