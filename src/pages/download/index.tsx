import React from "react";
import Link from "next/link";
import Image from "next/image";

const Download = () => {
  return (
    <div className="w-full block relative">
      <div className="max-w-7xl mx-auto py-14 px-10 sm:px-20 xl:py-20 xl:px-6 flex xl:flex-row flex-col items-center justify-center gap-12">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col justify-center gap-y-5 relative">
            <Image
              src="/icons/Logo.svg"
              alt="UE Logo"
              width={140}
              height={20}
            />

            <div className="w-full h-full flex flex-col justify-center gap-y-5">
              <h1 className="text-2xl lg:text-3xl font-tighter font-bold">
                Download Unreal Engine
                <br />
                Create Without Limits
              </h1>

              <p className="font-light opacity-50 leading-6">
                Build breathtaking worlds, craft immersive experiences, and
                bring your ideas to life with the most powerful real-time 3D
                creation tool. Download Unreal Engine today and unleash your
                creativity.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-items-start gap-2 mt-10">
                <Link
                  type="button"
                  href="/"
                  className="bg-btn-primary hover:bg-btn-primary-hover py-3 px-5 font-bold text-xs text-bg-default rounded-lg flex items-center justify-center text-center transition-all ease-in-out duration-200 cursor-pointer"
                >
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden xl:shadow-2xl xl:inset-shadow-bg-disabled relative">
          <Image
            src="/images/DownloadImage.webp"
            alt="Download Image"
            className="rounded-lg"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
