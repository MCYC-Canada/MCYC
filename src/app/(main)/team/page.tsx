// pages/sponsors/index.tsx
import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Button from '../components/Button';
// import Month from '../components/Month';

// import Sponsor from '../components/Sponsor'
import Profile from '../components/Profile';

const Team: React.FC = () => {
  return (
    <div>
      <img src="bg.webp" className="border rounded-none h-96 w-full object-cover" />
      <div className="bg-white h-32 w-full flex justify-center items-center text-lg m-0 text-center">
        <p>Meet the individuals working behind the organization.</p>
      </div>

      {/* Management Team */}
      <div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Management Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Management/cropped_victoria_zhang.webp" name="Victoria Zhang" position="President" />
          <Profile src="Management/cropped_beck_beck.webp" name="Becky Chen" position="Vice President" />
          <Profile src="Management/cropped_mahrosh_zafar.webp" name="Mahrosh Zafar" position="Executive Director" />
        </div>
      </div>

      {/* Ambassadors Team */}
      <div className="bg-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Ambassadors Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Ambassadors/cropped_nanki_bains.webp" name="Nanki Bains" position="Director of Ambassadors" />
          <Profile src="Ambassadors/cropped_alyssa_t.webp" name="Alyssa Tsang" position="Ambassador" />
          <Profile src="Ambassadors/cropped_jessica_zhang.webp" name="Jessica Zhang" position="Ambassador" />
          <Profile src="Ambassadors/cropped_jhanvi_patel.webp" name="Jhanvi Patel" position="Ambassador" />
          <Profile src="Ambassadors/cropped_leanne_wong.webp" name="Leanne Wong" position="Ambassador" />
          <Profile src="Ambassadors/cropped_maggie_wu.webp" name="Margaret Wu" position="Ambassador" />
          <Profile src="Ambassadors/cropped_serena.webp" name="Serena Sum" position="Ambassador" />
        </div>
      </div>

      {/* Community Engagement Team */}
      <div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Community Engagement Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Community Engagement/cropped_riya_brar.webp" name="Riya Brar" position="Director of Community Engagement" />
          <Profile src="Community Engagement/cropped_zahra_shahid.webp" name="Zahra Shahid" position="Community Engagement Associate" />
        </div>
      </div>

      {/* Events Team */}
      <div className="bg-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Events Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Events/cropped_archisha_Kishore.webp" name="Archisha Kishore" position="Events Director" />
          <Profile src="Events/cropped_nabiha_tariq.webp" name="Nabiha Tariq" position="Events Director" />

          <Profile src="Events/cropped_alexa_sriranjan.webp" name="Alexa Sriranjan" position="Events Coordinator" />
          <Profile src="Events/cropped_daniel_to.webp" name="Daniel To" position="Events Coordinator" />
          <Profile src="Events/cropped_evelin_chang.webp" name="Evelin Chang" position="Event Coordinator" />
          <Profile src="Events/cropped_harshini_kengeswaran.webp" name="Harshini Kengeswaran" position="Event Coordinator" />
          <Profile src="Events/cropped_hiya_shah.webp" name="Hiya Shah" position="Events Coordinator" />
          <Profile src="Events/cropped_lynaamamrya.webp" name="Lyna amamrya" position="Events Coordinator" />
          <Profile src="Events/cropped_nithishaa_packiareginauld.webp" name="Nithishaa Packiareginauld" position="Events Coordinator" />
          <Profile src="Events/cropped_saamanthy_naveendrathas.webp" name="Saamanthy Naveendrathas" position="Events Coordinator" />
          <Profile src="Events/cropped_steven.webp" name="Steven Zhu" position="Events Coordinator" />
        </div>
      </div>

      {/* Finance Team */}
      <div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Finance Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Finance/cropped_chantal_li.webp" name="Chantal Li" position="Director of Finance" />
          <Profile src="Finance/cropped_logan_mak.webp" name="Logan Mak" position="Finance Associate" />
          <Profile src="Finance/cropped_manasvi_t.webp" name="Manasvi Tirukachi" position="Finance Associate" />
          <Profile src="Finance/cropped_sreeja_banerjee.webp" name="Sreeja Banerjee" position="Finance Associate" />
        </div>
      </div>

      {/* Marketing Team */}
      <div className="bg-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Marketing Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Marketing/cropped_akishai_sabaratnasarma.webp" name="Akishai Sabaratnasarma" position="Director of Marketing" />
          <Profile src="placeholder.webp" name="Julia Joseph" position="Director of Marketing" />
          <Profile src="placeholder.webp" name="Johnson Jin" position="Marketing Associate" />
        </div>
      </div>

      {/* Media Team */}
      <div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Media Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Media/cropped_cecilia_vong.webp" name="Cecilia Vong" position="Director of Media" />
          <Profile src="Media/cropped_tarlan_kamalian.webp" name="Tarlan Kamalian" position="Director of Media" />
          <Profile src="Media/cropped_harkirat.webp" name="Harkirat Jabbal" position="Director of Media" />

          <Profile src="Media/cropped_ellie_liu.webp" name="Ellie Liu" position="Graphic Designer" />
          <Profile src="Media/cropped_gabriella_tai.webp" name="Gabriella Tai" position="Graphic Designer" />
          <Profile src="Media/cropped_carissa_kong.webp" name="Carissa Kong" position="Writer" />
          <Profile src="Media/cropped_nurzahan.webp" name="Nurzahan Chowdhury" position="Writer" />
          <Profile src="Media/cropped_anum_sheikh.webp" name="Anum Sheikh" position="Editor" />
        </div>
      </div>

      {/* Outreach Team */}
      <div className="bg-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Outreach Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Outreach/cropped_naseem_parpia.webp" name="Naseem Parpia" position="Outreach Director" />
          <Profile src="Outreach/cropped_carolyn_shi.webp" name="Carolyn Shi" position="Outreach Coordinator" />
          <Profile src="Outreach/cropped_cheryl_chiu.webp" name="Cheryl Chiu" position="Outreach Coordinator" />
          <Profile src="Outreach/cropped_eshal_siddiqi.webp" name="Eshal Siddiqi" position="Outreach Coordinator" />
        </div>
      </div>

      {/* Web Dev Team */}
      <div className="bg-gray-white m-0">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">Web Dev Team</h2>
        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
          <Profile src="Web Dev/cropped_grace_zhang.webp" name="Grace Zhang" position="Director of Web Development" />
          <Profile src="Web Dev/cropped_amrita_rajaram.webp" name="Amrita Rajaram" position="Web Designer" />
          <Profile src="placeholder.webp" name="Anoch Jeyakanthan" position="Web Developer" />
        </div>
      </div>
    </div>
  );
};

export default Team;
