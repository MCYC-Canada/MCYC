// ./src/components/events.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { EVENT_QUERYResult } from "../../../../sanity.types";
import { PortableText } from "next-sanity";

export function Events({ events }: { events: EVENT_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {events.map((event, index) => (

        <li key={index} className="flex py-10 border-line-brown">
            {/* {index%2 == "0"} */}
            {index%2 == 0  && <img src={urlFor(event?.mainImage?.asset?._ref).url()} className="border rounded-lg h-72 w-72 object-cover"></img>}
            <div className="mx-5">
              <h1 className="font-bold text-4xl">{event?.title}</h1>
              <p className="my-3">{new Date(event?.date).toDateString() }</p>
              {/* <p>{event?.description?.children?.text} </p> */}
              <div className="my-7 text-2xl"><PortableText value={event?.description} /></div>
            </div>
            {index%2 != 0  && <img src={urlFor(event?.mainImage?.asset?._ref).url()} className="border rounded-lg h-72 w-72 object-cover"></img>}
        </li>

        
      ))}
    </ul>
  );
}