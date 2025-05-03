// ./src/components/events.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { EVENT_QUERYResult } from "../../../../sanity.types";
import { PortableText } from "next-sanity";

export function Events({ events }: { events: EVENT_QUERYResult }) {
  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image with overlay */}
          <div className="relative group aspect-[1/1] w-full">
            <img
              src={urlFor(event?.mainImage?.asset?._ref || "").url()}
              className="w-full h-full object-cover"
            />

            {event?.description && (
              <div className="absolute inset-0 bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center text-sm md:text-base">
                <PortableText value={event?.description || ""} />
              </div>
            )}
          </div>

          {/* Text content stays always visible */}
          <div className="p-4 text-center">
            <h1 className="font-bold text-xl md:text-2xl">{event?.title}</h1>
            <p className="text-sm text-gray-600 mt-2">{new Date(event.date || "").toDateString()}</p>
          </div>
        </div>
      ))}
    </div>



  );
}
