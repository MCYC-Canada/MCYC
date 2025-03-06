// pages/sponsors/index.js
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Month from '../components/Month';

import Sponsor from '../components/Sponsor';

const Sponsors = () => {
  return (
    <div>
      <div className="text-center content-center">
        <h1 className="p-5 md:p-7 font-bold text-themed-blue text-4xl md:text-6xl bg-neutral-100">
          Featured Sponsors
        </h1>

        <div className="bg-white px-4 md:px-10">
          <Sponsor
            name="Hub Climbing Markham"
            source="sponsor_hub.webp"
            link="https://hubclimbing.com/markham/"
            size="85%"
          />
          <Sponsor
            name="Des Fleurs by Madi"
            source="sponsor_fleur.webp"
            link="https://www.etsy.com/ca/shop/DesFleursByMadi"
            size="85%"
          />
          <Sponsor
            name="Seraph Custom Creations"
            source="sponsor_seraph.webp"
            link="https://www.etsy.com/shop/SeraphCustomCreation"
            size="85%"
          />

          <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-5">
            <div className="lg:border-r-8 lg:border-line-brown lg:pr-5">
              <Sponsor
                name="ENSO Granola"
                source="sponsor_enso.webp"
                link="https://ensoeats.com/"
                size="65%"
              />
            </div>
            <Sponsor
              name="JOMO Studio"
              source="sponsor_jomo.webp"
              link="https://jomostudio.com/"
              size="40%"
            />
          </div>

          <Sponsor
            name="Etee"
            source="sponsor_etee.webp"
            link="https://www.shopetee.com/"
            size="85%"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
