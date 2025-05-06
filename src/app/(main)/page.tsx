'use client';
import React from 'react';
import { motion } from 'framer-motion';


const MotionMain = motion.main;
const MotionImg = motion.img;
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionButton = motion.button;


const Home = () => {
  const scrolltoHash = (element_id: string) => {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <div>

      {/* <Navbar /> */}

      <MotionDiv
        className="background h-screen bg-cover bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <header className="text-center p-5 pt-40 text-xl md:pt-60 md:text-2xl lg:text-left lg:p-20 lg:pt-40">
          <MotionH1
            className="font-semibold mb-4 text-white text-5xl md:text-6xl lg:text-8xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Movement For Change Youth Council
          </MotionH1>

          <MotionH2
            className="text-white p-5 lg:w-2/3 md:text-lg lg:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            MCYC is an organization that has been dedicated to educating youth on social justice issues that impact North Americans since 2021.
          </MotionH2>

          <MotionButton
            onClick={() => scrolltoHash('first-section')}
            className="p-4 w-1/2 md:w-1/3 lg:w-1/5 m-5 bg-red-900 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Learn More
          </MotionButton>
        </header>
      </MotionDiv>

      <MotionMain
        id="first-section"
        className="py-10 md:py-20 px-5 md:px-20 lg:px-60 text-red-900 text-center bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Advocating for social justice by educating, empowering, and inspiring a community of transformative leaders.
        </h2>
        </MotionMain>


      <span className="block h-px mx-0 my-5 p-0 border-t-[#ccc] border-0 border-t border-solid"></span>

      <MotionMain
        className='p-5 md:p-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MotionImg
          className='w-full md:w-1/2 lg:w-1/3 h-auto m-5'
          src="kids.webp"
          alt="Kids"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <MotionDiv
          className='p-5 mx-0 md:mx-10 w-full md:w-2/3 text-red-900'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-5">Opportunities for Students by Students</h2>
          <div className='p-2 md:p-5 text-lg md:text-xl lg:text-2xl'>
            <p>Become a part of the MCYC team and earn volunteer hours, while contributing to a cause that you believe in.</p>
          </div>
        </MotionDiv>
      </MotionMain>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
