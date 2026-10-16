"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const socialLinks = [
   {
    name: "WhatsApp",
    url: "https://wa.me/917012087161",
    icon: "/whatsapp.png",
    description: "Chat with us",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DgzZttKoC/",
    icon: "/facebook.png",
    description: "Our community",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_inspofashions?stkn=MXdxOTVlY2R4dWdrZQ==",
    icon: "/instagram.png",
    description: "Updates • New Arrivals",
  },
 
  {
    name: "YouTube",
    url: "https://youtube.com/@inspostitch-x4n",
    icon: "/youtube.png",
    description: "Behind the scenes",
  },
  
  {
    name: "Shop Collection",
    url: "https://storefrontinspofashion.vercel.app",
    icon: "/website.png",
    description: "Explore our nightwear",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      
      {/* Full-Screen Hero Section with Background Image */}
      <div className="relative w-full flex-1 flex flex-col overflow-hidden">
        
        {/* Hero Background with Nightwear Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/nightwear-hero.jpg"
            alt="Nightwear lifestyle"
            fill
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "50% 30%",
            }}
            priority
            quality={95}
          />
          {/* Gradient overlay for better text contrast and visual depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
          {/* Additional side gradient for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-2 md:py-4">
          
          {/* Logo */}
          <div className="mb-2 sm:mb-3 md:mb-4 drop-shadow-lg">
            <Image
              src="/out.png"
              alt="Inspo Fashions Logo"
              width={500}
              height={350}
              priority
              className="w-auto h-auto max-w-[200px] sm:max-w-[240px] md:max-w-[300px] object-contain"
            />
          </div>

          {/* Eyebrow Text */}
          <p className="text-xs sm:text-sm tracking-widest uppercase font-light mb-4 sm:mb-5 text-white drop-shadow-md">
            Women's Nightwear
          </p>

          {/* Main Headline - Serif */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-white mb-4 md:mb-5 text-center leading-tight drop-shadow-lg">
            Your Comfort Story
          </h1>

          {/* Categories */}
          <p className="text-xs sm:text-sm tracking-widest uppercase font-light text-white text-center drop-shadow-md mb-6 md:mb-8">
            Nighties • Frock Nighties • Everyday Comfort
          </p>
        </div>

        {/* Social Links Section - Inside Hero at Bottom */}
        <div className="relative z-10 w-full px-4 sm:px-6 pb-12 md:pb-16">
          <div className="max-w-xs sm:max-w-md mx-auto space-y-3 md:space-y-4">
            {socialLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => link.url && window.open(link.url, "_blank")}
                className={`w-full group transition-all duration-500 ease-out backdrop-blur-sm bg-white/10 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isLoaded ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="border border-white/80 rounded-full px-5 sm:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between gap-4 transition-all duration-300 hover:bg-white/20 hover:border-white">
                  
                  {/* Icon and Text Container */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 md:w-7 md:h-7">
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        width={28}
                        height={28}
                        className="w-full h-full object-contain group-hover:invert transition-all"
                      />
                    </div>

                    {/* Divider */}
                    <div className="w-px h-5 bg-white/60 group-hover:bg-white transition-colors" />

                    {/* Text */}
                    <div className="text-left">
                      <p className="text-sm md:text-base font-semibold text-white group-hover:text-white transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-white/70 group-hover:text-white/90 transition-colors uppercase tracking-wider font-light">
                        {link.description}
                      </p>
                    </div>
                  </div>

                  {/* Circular Arrow */}
                  <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border-2 border-white/80 group-hover:border-white group-hover:bg-white transition-all duration-300">
                    <span className="text-white group-hover:text-black text-lg font-light -mt-0.5">→</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-black text-white px-6 py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-10 text-center">
            <div className="flex flex-col items-center">
              <p className="text-lg md:text-2xl mb-3 md:mb-4">☁️</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                Soft Fabrics
              </p>
              <p className="text-xs text-gray-400 font-light mt-2">Gentle on you</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg md:text-2xl mb-3 md:mb-4">🌙</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                All Day Comfort
              </p>
              <p className="text-xs text-gray-400 font-light mt-2">Day & Night</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg md:text-2xl mb-3 md:mb-4">💝</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                Timeless Styles
              </p>
              <p className="text-xs text-gray-400 font-light mt-2">Made for you</p>
            </div>
          </div>

          {/* Divider and Closing Text */}
          <div className="flex items-center gap-6 justify-center">
            <div className="h-px bg-white flex-grow max-w-[100px]" />
            <p className="text-xs md:text-sm font-light uppercase tracking-widest whitespace-nowrap">
              Made for your quiet moments
            </p>
            <div className="h-px bg-white flex-grow max-w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
