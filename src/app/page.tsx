// pages/index.js
import React from 'react';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Button from './components/Button';
import Month from './components/Month';

const Home = () => {

  return (
    <div>

      {/* <Navbar /> */}

      <div className="background h-screen bg-cover bg-no-repeat">

        <header className="text-center p-5 pt-40 text-xl md:pt-60 md:text-2xl lg:text-left lg:p-20 lg:pt-40">
          <h1 className="font-semibold mb-4 text-white text-6xl md:text-8xl">Introducing MCYC</h1>

          <p className="text-white p-5 lg:w-2/3">
            Main Characters Youth Council (MCYC) is an organization has been dedicated to educating youth on social justice issues that impact North Americans since 2021.        </p>
          <Button style="p-4 text-center w-1/5 m-5" link='/' name="Learn More" />
        </header>

      </div>
      <main className="py-20 px-60 text-red-900 text-center bg-white">
        <h2 className="text-4xl font-semibold mb-4">Advocating for social justice & mental health
          where others won’t.</h2>
        <p className="mx-20 text-xl">
          MCYC provides opportunities for students get involved and help foster change in their communities through establish initiatives and events.
        </p>
      </main>
      <span className="block h-px mx-0 my-[1em] p-0 border-t-[#ccc] border-0 border-t border-solid"></span>
      <Month link="https://blog.short.io/content/images/2018/01/short.cm-logo-1024x1024.png" />

      <main className='p-10 flex justify-between items-center text-center'>

        <img className='w-1/2 h-1/4 flex  m-5' src="kids.png" />
        <div className='p-5 mx-10 w-2/3  text-red-900'>
          <h2 className="text-5xl font-bold pb-5">Opportunities for Students by Students</h2>
          <div className='p-5 text-2xl flex'>
            <p>Become a part of the MCYC team and earn volunteer hours, while contributing to a cause that you believe in.</p>
            <div className='md:flex'>
            </div>

          </div>

        </div>

      </main>
      {/* <Footer /> */}

    </div>
  );
};

export default Home;
