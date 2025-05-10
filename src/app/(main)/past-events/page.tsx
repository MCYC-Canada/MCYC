// pages/index.js
import React from 'react';

import { Events } from "../components/Events";
import { sanityFetch } from "../../../sanity/client";
import { EVENT_QUERY } from "../../../sanity/lib/queries";
import { EVENT_QUERYResult } from "../../../../sanity.types";

export default async function Past_Events () {
  const events = await sanityFetch<EVENT_QUERYResult>({
    query: EVENT_QUERY,
  });

  return (
    <div>
      {/* Hero section */}
      <div className="background_event h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-6 md:space-y-12 mb-10 px-4 text-center">
        <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">
          Our Events
        </h1>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl">
          Take a look at some of MCYC&apos;s work over the past few years
        </h2>
      </div>
      
      {/* Events Component */}
      <div className="px-4 md:px-10">
        <Events events={events} />
      </div>
    </div>
  );
};
