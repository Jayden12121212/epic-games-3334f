import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LuLoaderCircle } from "react-icons/lu";

const features = [
  { title: "Games", image: "/images/FeaturesImage.webp", link: "/games" },
  {
    title: "Indie Games",
    image: "/images/FeaturesImage.webp",
    link: "/indie-games",
  },
  {
    title: "Mobile Games",
    image: "/images/FeaturesImage.webp",
    link: "/mobile-games",
  },
  {
    title: "Switching to Unreal Engine",
    image: "/images/FeaturesImage.webp",
    link: "/switching",
  },
  {
    title: "Unreal Editor for Fortnite",
    image: "/images/FeaturesImage.webp",
    link: "/uefn",
  },
  { title: "Film & TV", image: "/images/FeaturesImage.webp", link: "/film-tv" },
  {
    title: "Broadcast & Live Events",
    image: "/images/FeaturesImage.webp",
    link: "/broadcast",
  },
  {
    title: "Animation",
    image: "/images/FeaturesImage.webp",
    link: "/animation",
  },
  {
    title: "Architecture",
    image: "/images/FeaturesImage.webp",
    link: "/architecture",
  },
  {
    title: "Automotive",
    image: "/images/FeaturesImage.webp",
    link: "/automotive",
  },
  {
    title: "Simulation",
    image: "/images/FeaturesImage.webp",
    link: "/simulation",
  },
];

const HomeFeaturesSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for 1 second before showing features
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white text-black w-full relative">
      <div className="max-w-7xl mx-auto py-14 px-10 sm:px-20 xl:py-20 xl:px-6">
        {/* Section Header */}
        <div className="w-full flex flex-col justify-center text-center gap-4">
          <h3 className="text-xl font-tighter font-bold">Ships Fully Loaded</h3>
          <p className="opacity-50 text-sm font-light leading-6 max-w-3xl mx-auto">
            Develop games. Produce or animate films. Visualize spaces or
            products. Create next-generation interfaces. Or build immersive
            experiences we haven’t even thought of yet. No matter what style,
            industry, screen size, or project you have in mind, Unreal Engine
            comes standard with everything you need to help you make it real.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full relative">
          {loading && (
            <div className="absolute inset-0 flex items-center bg-white justify-center bg-opacity-50 z-50">
              <LuLoaderCircle className="text-btn-primary text-4xl animate-spin" />
            </div>
          )}
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="w-full flex items-center hover:bg-[#00000005] border border-[#00000010] rounded-lg overflow-hidden transition-transform duration-300 ease-in-out"
            >
              {/* Image */}
              <div className="w-32 h-full relative shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-l-lg transition-all duration-300 group-hover:brightness-110"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 py-7 px-5">
                <h3 className="text-sm mb-2 font-bold font-tighter transition-colors duration-200 ease-in-out group-hover:text-btn-primary">
                  {feature.title}
                </h3>
                <p className="text-xs font-light opacity-50 line-clamp-2">
                  Develop games. Produce or animate films. Visualize spaces or
                  products. Create next-generation interfaces.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
