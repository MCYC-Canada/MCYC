// pages/sponsors/index.js
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Month from '../components/Month';

import Sponsor from '../components/Sponsor'

const Sponsors = () => {

  return (
    <div>
        
        <div className="text-center content-center" >
          <h1 className='p-7 font-bold text-themed-blue text-6xl bg-neutral-100 '>Featured Sponsors</h1>

          <div className="bg-white">
              <Sponsor name="Des Fleurs by Madi" source="sponsor_fleur.png" link="https://www.etsy.com/ca/shop/DesFleursByMadi" size="85%" />
              <Sponsor name="Seraph Custom Creations" source="sponsor_seraph.png" link="https://www.etsy.com/shop/SeraphCustomCreation" size="85%" />
              <div className="flex justify-center items-center">
                <div className="border-r-8 border-line-brown">
                  <Sponsor name="ENSO Granola" source="sponsor_enso.png" link="https://ensoeats.com/" size="65%"/>
                </div>
                <Sponsor name="JOMO Studio" source="sponsor_jomo.png" link="https://jomostudio.com/" size="20%"/>
              </div>
              <Sponsor name="Etee" source="sponsor_etee.png" link="https://www.shopetee.com/" size="85%" />

              {/* <img src="sponsor_fleur.png" width="85%" className="pt-10 mx-auto block" />
              <p className='py-10 font-bold text-themed-blue text-5xl block mx-auto'><a href="https://www.etsy.com/ca/shop/DesFleursByMadi">Des Fleurs by Madi</a></p> */}

              
              
              
          </div>
        </div>
    </div>
  );
};

export default Sponsors;
