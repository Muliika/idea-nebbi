"use client";
import React from "react";
import Image from "next/image";

const Volunteer = () => {
  return (
    <div className="">
      <div className="relative bg-black">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src="/cta.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-white">....</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white">
              {/* I&apos;m always here to help */}
              Work with us / Donate
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Partner with IDEA to make a difference! Whether through volunteering, collaborating,
              or donating, your contribution empowers communities and fosters sustainable
              development. Join us in creating a brighter, more equitable future for all. Donate
              today and be part of the change!
            </p>
            <div className="mt-8">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                  <span>
                    <a href="/contact">View Details</a>
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              {/* <a
                href="#"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact me
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
