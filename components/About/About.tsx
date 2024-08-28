import React from "react";

const About = () => {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Deploy faster
              </h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About us
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Innovative Development and Empowerment Agency (IDEA) is dedicated to fostering
                sustainable development in Nebbi and beyond. We focus on four key areas: Climate
                Justice, Health, Youth Livelihood, and Civic Accountability, working collaboratively
                with communities to create impactful change. Through strategic programs and
                partnerships, IDEA empowers individuals and groups to address social, economic, and
                environmental challenges, building a brighter and more equitable future for all.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/about.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
