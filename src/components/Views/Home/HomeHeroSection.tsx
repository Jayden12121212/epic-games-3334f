import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <div className="w-full block relative">
      <div className="max-w-7xl mx-auto py-14 px-10 sm:px-20 xl:py-20 xl:px-6 flex xl:flex-row flex-col items-center justify-center gap-12">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center gap-y-5 relative">
            <Image
              src="/icons/Logo.svg"
              alt="UE Logo"
              width={140}
              height={30}
            />

            <div className="w-full h-full flex flex-col justify-center gap-y-5">
              <h1 className="text-2xl lg:text-3xl font-tighter font-bold">
                Unreal Engine
                <br />
                Powering Next-Gen Creativity
              </h1>

              <p className="font-light opacity-50 leading-6">
                Powering the world&apos;s most immersive experiences, Unreal
                Engine gives creators the freedom to bring their visions to life
                with unparalleled realism, dynamic lighting, and
                industry-leading performance. Whether you&apos;re crafting
                next-gen games, photorealistic films, or interactive 3D
                environments, Unreal Engine provides the tools to push the
                boundaries of creativity.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-items-start gap-2 mt-10">
                <Link
                  type="button"
                  href="/download"
                  className="bg-btn-primary hover:bg-btn-primary-hover py-3 px-5 font-bold text-xs text-bg-default rounded-lg flex items-center justify-center text-center transition-all ease-in-out duration-200 cursor-pointer"
                >
                  <span>Download</span>
                </Link>

                <Link
                  type="button"
                  href="/download"
                  className="border-2 border-bg-press hover:bg-bg-disabled py-3 px-5 font-bold text-xs text-text-primary rounded-lg flex items-center justify-center text-center transition-all ease-in-out duration-200 cursor-pointer"
                >
                  <span>Learn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden xl:shadow-2xl xl:inset-shadow-bg-disabled relative">
          <Image
            src="/images/HeroImage.webp"
            alt="Hero Image"
            className="rounded-lg"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
