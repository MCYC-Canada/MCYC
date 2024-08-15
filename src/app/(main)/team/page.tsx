// pages/sponsors/index.js
import React from 'react';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Button from '../components/Button';
// import Month from '../components/Month';

// import Sponsor from '../components/Sponsor'
import Profile from '../components/Profile'

const Team = () => {

  return (
    <div>
        <img src="bg.png" className="border rounded-none h-96 w-full object-cover"/>
        <div className='bg-white h-32 w-full content-center text-center text-lg m-0'>
          <p>Meet the individuals working behind the organization.</p>
        </div>

        {/* Management Team */}
        <div className="bg-gray-white m-0">
          <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Management Team</h2>
          <div className="grid grid-cols-3 gap-0 p-5 place-items-center">
              {/* <div></div> */}
              <Profile src="management\victoria_zhang.JPG" name="Victoria Z." position="President"/>
              <Profile src="management\becky_chan.jpg" name="Becky C." position="Vice President"/>
              <Profile src="management\mahrosh_zafar.jpg" name="Mahrosh Z." position="Executive Director"/>
              {/* <div></div> */}
          </div>
        </div>

        {/* Media Team */}
        <div className="bg-white m-0">
          <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Media Team</h2>
          <div className="grid grid-cols-3 gap-0 p-5 place-items-center">
              
          </div>
        </div>

        {/* Website Development Team */}
        <div className="bg-gray-white m-0">
          <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Website Development Team</h2>
          <div className="grid grid-cols-3 gap-0 p-5 place-items-center">
              <Profile src="webdev\aarushi.jpg" name="Aarushi B." position="Web. Development Director"/>
              <Profile src="webdev\arya.jpg" name="Arya H." position="Web. Coding Developer"/>
              <Profile src="webdev\navya.jpg" name="Navya K." position="Web. Design Developer"/>
              <Profile src="webdev\grace.jpg" name="Grace Z." position="Web. Coding Developer"/>
          </div>
        </div>

        {/* Outreach Team */}
        <div className="bg-white m-0">
          <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Outreach Team</h2>
          <div className="grid grid-cols-3 gap-0 p-5 place-items-center">
              <Profile src="outreach\isabella.jpg" name="Isabella Z." position="Outreach Team Director"/>
              <Profile src="outreach\naseem.jpg" name="Naseem P." position="Outreach Team Director"/>

          </div>
        </div>

        {/* Events Team*/}
        <div className="bg-gray-white m-0">
          <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Events Team</h2>
          <div className="grid grid-cols-3 gap-0 p-5 place-items-center">
              <Profile src="event\nabiha.jpg" name="Nabiha T." position="Events Team Director"/>
              <Profile src="event\archisha.jpg" name="Archisha K." position="Events Team Director"/>
          </div>
        </div>

    </div>
  );
};

export default Team;
