"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/_inspofashions?stkn=MXdxOTVlY2R4dWdrZQ==",
    icon: "/insta.jpg",
    description: "Style • Updates • New Arrivals",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917012087161",
    icon: "/whatsapp.jpg",
    description: "Chat with us",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@inspostitch-x4n",
    icon: "/youtube.jpg",
    description: "Behind the scenes",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DgzZttKoC/",
    icon: "/facebook.jpg",
    description: "Our community",
  },
  {
    name: "Shop Collection",
    url: "https://storefrontinspofashion.vercel.app",
    icon: "/website.jpg",
    description: "Explore our nightwear",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      
      {/* Hero Section with Background Image */}
      <div className="relative w-full bg-white pt-8 pb-12 md:pt-16 md:pb-20 px-6 min-h-[500px] md:min-h-[600px]">
        
        {/* Hero Background with Nightwear Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/nightwear-hero.jpg"
            alt="Nightwear lifestyle"
            fill
            className="object-cover md:object-right"
            style={{
              objectPosition: "center center",
            }}
            priority
            quality={85}
          />
          {/* Minimal white overlay for text contrast - 10% opacity */}
          <div className="absolute inset-0 bg-white opacity-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center h-full justify-center">
          
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <Image
              src="/inspo-logo.jpg"
              alt="Inspo Fashions Logo"
              width={200}
              height={140}
              priority
              className="w-auto h-auto max-w-[140px] md:max-w-[200px] object-contain"
            />
          </div>

          {/* Eyebrow Text */}
          <p className="text-xs md:text-sm tracking-widest uppercase font-light mb-4 text-black">
            Women's Nightwear
          </p>

          {/* Main Headline - Serif */}
          <h1 className="text-4xl md:text-6xl font-serif font-normal text-black mb-3 md:mb-4 text-center leading-tight">
            Your Comfort Story
          </h1>

          {/* Tagline */}
          <p className="text-sm md:text-base italic text-black font-light mb-4 md:mb-5 text-center">
            Comfort meets elegance.
          </p>

          {/* Categories */}
          <p className="text-xs md:text-sm tracking-widest uppercase font-light text-black text-center">
            Nighties • Frock Nighties • Everyday Comfort
          </p>
        </div>
      </div>

      {/* Curved Transition - Wave SVG */}
      <svg className="w-full h-auto" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" fill="#FFFFFF" />
      </svg>

      {/* Social Links Section */}
      <div className="w-full bg-white px-6 py-10 md:py-16">
        <div className="max-w-sm mx-auto space-y-3 md:space-y-4">
          {socialLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => link.url && window.open(link.url, "_blank")}
              className="w-full group"
            >
              <div className="border border-black rounded-full px-6 py-4 md:py-5 flex items-center justify-between gap-4 transition-all duration-300 hover:bg-black bg-white">
                
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
                  <div className="w-px h-6 bg-black group-hover:bg-white transition-colors" />

                  {/* Text */}
                  <div className="text-left">
                    <p className="text-sm md:text-base font-semibold text-black group-hover:text-white transition-colors">
                      {link.name}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-wider font-light">
                      {link.description}
                    </p>
                  </div>
                </div>

                {/* Circular Arrow */}
                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-black rounded-full group-hover:bg-white group-hover:border-white transition-all">
                  <span className="text-black group-hover:text-black text-lg">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-black text-white px-6 py-16 md:py-20 mt-auto">
        <div className="max-w-3xl mx-auto">
          
          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 text-center">
            <div className="flex flex-col items-center">
              <p className="text-xl md:text-2xl mb-2 md:mb-4">☁️</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                Soft Fabrics
              </p>
              <p className="text-xs text-gray-400 font-light mt-1">Gentle on you</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl md:text-2xl mb-2 md:mb-4">🌙</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                All Day Comfort
              </p>
              <p className="text-xs text-gray-400 font-light mt-1">Day & Night</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl md:text-2xl mb-2 md:mb-4">💝</p>
              <p className="text-xs md:text-sm font-light uppercase tracking-widest">
                Timeless Styles
              </p>
              <p className="text-xs text-gray-400 font-light mt-1">Made for you</p>
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
