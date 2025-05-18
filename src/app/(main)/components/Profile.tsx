'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileProps {
  name: string;
  src: string;
  position: string;
}

export default function Profile({ name, src, position }: ProfileProps) {
  return (
    <motion.div
      className="m-5 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72">
        <Image
          src={`/team_photos/${src}`}
          alt={`Portrait of ${name}`}
          fill
          placeholder="blur"
          blurDataURL={`/team_photos_placeholders/${src.replace(/\.(webp|jpg|jpeg|png)$/i, ".avi")}`}
          loading="lazy"
          className="rounded-lg object-cover border shadow-md"
        />
      </div>

      <p className="text-xl sm:text-2xl font-bold mt-3">{name}</p>
      <p className="text-base sm:text-lg text-gray-600">{position}</p>
    </motion.div>
  );
}
