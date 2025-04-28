// pages/sponsors/index.js
import React from 'react';


import Sponsor from '../components/Sponsor';

const Sponsors = () => {
  return (
    <div>
      <div className="text-center content-center">
        <h1 className="p-5 md:p-7 font-bold text-themed-blue text-4xl md:text-6xl bg-neutral-100">
          Featured Sponsors
        </h1>

        <div className="bg-white px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
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
          <Sponsor
            name="JOMO Studio"
            source="sponsor_jomo.webp"
            link="https://jomostudio.com/"
            size="65%"
          />
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
