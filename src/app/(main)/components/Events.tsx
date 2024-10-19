// ./src/components/events.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { EVENT_QUERYResult } from "../../../../sanity.types";
import { PortableText } from "next-sanity";

export function Events({ events }: { events: EVENT_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {events.map((event, index) => (
        <li
          key={index}
          className={`flex flex-col lg:flex-row items-center py-10 border-line-brown ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <img
            src={urlFor(event?.mainImage?.asset?._ref || "").url()}
            className="border rounded-lg h-64 w-full object-cover lg:h-72 lg:w-72 mb-5 lg:mb-0"
          />
          
          {/* Text content */}
          <div className="lg:mx-5 w-full text-center lg:text-left">
            <h1 className="font-bold text-2xl md:text-4xl">{event?.title}</h1>
            <p className="my-3">{new Date(event.date || "").toDateString()}</p>
            <div className="my-7 text-lg md:text-2xl">
              {event?.description ? <PortableText value={event?.description || ""} /> : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
