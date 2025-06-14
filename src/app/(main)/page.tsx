'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { useRouter } from 'next/navigation';

const stats = [
  { label: "Students Engaged", value: 2500, suffix: "+", color: "bg-red-900" },
  { label: "Volunteer Hours", value: 1000, suffix: "+", color: "bg-red-900" },
  { label: "Topics Covered", value: 15, suffix: "+", color: "bg-red-900" },
];

const StatItem = ({ stat, delay }: { stat: typeof stats[0]; delay: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <motion.div
      ref={ref}
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col justify-center items-center shadow-md ${stat.color}`}
      initial={{ scale: 0 }}
      animate={{ scale: inView ? 1 : 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <span className="text-2xl md:text-3xl text-white font-semibold">
        {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix} />}
      </span>
      <p className="text-xs md:text-sm text-center mt-2 text-gray-100">{stat.label}</p>
    </motion.div>
  );
};

const Home = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const router = useRouter();
  return (
    <div className="text-red-900">
      {/* Hero Section */}
      <motion.section
        className="background h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-center px-6 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <motion.h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Movement For Change Youth Council
          </motion.h1>
          <motion.p
            className="text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Federally registered youth-led non-profit organization advocating for social justice by empowering a community of transformative leaders.
          </motion.p>
          <motion.button
            onClick={() => scrollTo('first-section')}
            className="bg-red-800 text-white py-3 px-6 rounded-md text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        id="first-section"
        className="bg-white py-12 md:py-20 text-center px-6 md:px-12 lg:px-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
          &quot;Young people, when informed and empowered, when they realize that what they do truly makes a difference, can indeed change the world.&quot; — Jane Goodall
        </h2>
      </motion.section>

      {/* Belief Section */}
      <motion.section
        className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Belief</h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              The Movement for Change Youth Council was born from the belief that youth are not just the leaders of tomorrow, they are the leaders of today. In a world where many traditional career paths and opportunities overlook the power of youth voices and their capacity to lead, we set out to do things differently. <br /> <br />MCYC exists to challenge that norm by creating a space where young people are not just included, but empowered to shape the future. Through advocacy, community work, and leadership development, we educate and equip youth with the tools to raise their voices, confront injustice, and drive meaningful change - now and into their careers. 
<br /> <br />
We believe that when youth are trusted with leadership today, they build the courage and vision to transform the world tomorrow.

            </p>
          </motion.div>
          <motion.img
            src="/group.webp"
            alt="MCYC Group Photo"
            className="flex-1 w-full max-w-sm object-cover rounded-lg shadow-md"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="bg-white py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Impact</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} delay={0.5 + index * 0.2} />
          ))}
        </div>
        <motion.button
          onClick={() => router.push('/past-events')}
          className="mt-10 bg-red-800 text-white py-3 px-6 rounded-md text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Our Past Events
        </motion.button>
      </motion.section>

      {/* Sponsors Section */}
      <motion.section
        id="past-events"
        className="bg-gray-100 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-900 mb-6">
          A big thanks to our <a onClick={() => router.push('/sponsors')} className="underline">Sponsors</a>!
        </h3>
        <p className="text-base md:text-lg">
          Check out our social media to stay updated and be part of the change!
        </p>
      </motion.section>
    </div>
  );
};

export default Home;
