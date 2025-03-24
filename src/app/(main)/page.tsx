"use client"
// pages/index.js
import React from 'react';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Button from './components/Button';
import Month from './components/Month';

const Home = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  return (
    <div>

      {/* <Navbar /> */}

      <div className="background h-screen bg-cover bg-no-repeat">

        <header className="text-center p-5 pt-40 text-xl md:pt-60 md:text-2xl lg:text-left lg:p-20 lg:pt-40">
          <h1 className="font-semibold mb-4 text-white text-5xl md:text-6xl lg:text-8xl">Movement For Change Youth Council</h1>

          <p className="text-white p-5 lg:w-2/3 md:text-lg lg:text-xl">
            MCYC is an organization that has been dedicated to educating youth on social justice issues that impact North Americans since 2021.
          </p>

          <button onClick={() => scrolltoHash('first-section')} className="p-4 w-1/2 md:w-1/3 lg:w-1/5 m-5 bg-red-900 text-white">Learn More</button>
        </header>

      </div>

      <main id="first-section" className="py-10 md:py-20 px-5 md:px-20 lg:px-60 text-red-900 text-center bg-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Advocating for social justice by educating, empowering, and inspiring a community of transformative leaders.
        </h2>
      </main>

      <span className="block h-px mx-0 my-5 p-0 border-t-[#ccc] border-0 border-t border-solid"></span>

      {/* <Month link="https://blog.short.io/content/images/2018/01/short.cm-logo-1024x1024.png" /> */}

      <main className='p-5 md:p-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center text-center'>

        <img className='w-full md:w-1/2 lg:w-1/3 h-auto m-5' src="kids.webp" alt="Kids" />

        <div className='p-5 mx-0 md:mx-10 w-full md:w-2/3 text-red-900'>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-5">Opportunities for Students by Students</h2>
          <div className='p-2 md:p-5 text-lg md:text-xl lg:text-2xl'>
            <p>Become a part of the MCYC team and earn volunteer hours, while contributing to a cause that you believe in.</p>
          </div>
        </div>

      </main>

      {/* <Footer /> */}

    </div>
  );
};

export default Home;
