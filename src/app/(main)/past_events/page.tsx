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
      <div className="background_event h-screen bg-cover bg-no-repeat justify-center text-center place-content-center space-y-12 mb-10">
        <h1 className="text-white text-9xl font-bold">Our Events</h1>
        <p className="text-white text-3xl">Take a look at some of  MCYC&apos;s work over the past few years</p>
      </div>
      <Events events={events} />;
    </div>
  );
};

// export default Past_Events;
