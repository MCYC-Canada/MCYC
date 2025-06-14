// pages/sponsors/index.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Profile from '../components/Profile';
import Preloader from '../components/Preloader';

interface Member {
  src: string;
  name: string;
  position: string;
}

interface TeamSectionProps {
  title: string;
  members: Member[];
  bg?: string;
}

const TeamSection = ({ title, members, bg = 'white' }: TeamSectionProps) => (
  <div className={`bg-${bg} m-0`}>
    <h2 className="text-4xl font-bold text-center pt-10 pb-5 text-line-brown">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 place-items-center">
      {members.map((member, index) => (
        <Profile key={`${member.name}-${index}`} {...member} />
      ))}
    </div>
  </div>
);

const Team: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div>
      {/* Hero image with smooth fade-in */}
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src="/bg.webp"
          alt="Team background"
          fill
          priority
          onLoadingComplete={() => setImageLoaded(true)}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="bg-white h-32 w-full flex justify-center items-center text-lg text-center px-4">
        <p>Meet the individuals working behind the organization.</p>
      </div>

      <TeamSection
        title="Management Team"
        members={[
          { src: 'Management/cropped_victoria_zhang.webp', name: 'Victoria Zhang', position: 'President' },
          { src: 'Management/cropped_mahrosh_zafar.webp', name: 'Mahrosh Zafar', position: 'Executive Director' },
        ]}
        bg="white"
      />

      <TeamSection
        title="Ambassadors Team"
        members={[
          { src: 'Ambassadors/cropped_nanki_bains.webp', name: 'Nanki Bains', position: 'Director of Ambassadors' },
          { src: 'Ambassadors/cropped_alyssa_t.webp', name: 'Alyssa Tsang', position: 'Ambassador' },
          { src: 'Ambassadors/cropped_jessica_zhang.webp', name: 'Jessica Zhang', position: 'Ambassador' },
          { src: 'Ambassadors/cropped_jhanvi_patel.webp', name: 'Jhanvi Patel', position: 'Ambassador' },
          { src: 'Ambassadors/cropped_leanne_wong.webp', name: 'Leanne Wong', position: 'Ambassador' },
          { src: 'Ambassadors/cropped_maggie_wu.webp', name: 'Margaret Wu', position: 'Ambassador' },
          { src: 'Ambassadors/cropped_serena.webp', name: 'Serena Sum', position: 'Ambassador' },
        ]}
      />

      <TeamSection
        title="Community Engagement Team"
        members={[
          { src: 'Community Engagement/cropped_riya_brar.webp', name: 'Riya Brar', position: 'Director of Community Engagement' },
          { src: 'Community Engagement/cropped_zahra_shahid.webp', name: 'Zahra Shahid', position: 'Community Engagement Associate' },
        ]}
        bg="gray-white"
      />

      <TeamSection
        title="Events Team"
        members={[
          { src: 'Events/cropped_archisha_Kishore.webp', name: 'Archisha Kishore', position: 'Events Director' },
          { src: 'Events/cropped_nabiha_tariq.webp', name: 'Nabiha Tariq', position: 'Events Director' },
          { src: 'Events/cropped_alexa_sriranjan.webp', name: 'Alexa Sriranjan', position: 'Events Coordinator' },
          { src: 'Events/cropped_daniel_to.webp', name: 'Daniel To', position: 'Events Coordinator' },
          { src: 'Events/cropped_evelin_chang.webp', name: 'Evelin Chang', position: 'Event Coordinator' },
          { src: 'Events/cropped_harshini_kengeswaran.webp', name: 'Harshini Kengeswaran', position: 'Event Coordinator' },
          { src: 'Events/cropped_hiya_shah.webp', name: 'Hiya Shah', position: 'Events Coordinator' },
          { src: 'Events/cropped_lynaamamrya.webp', name: 'Lyna amamrya', position: 'Events Coordinator' },
          { src: 'Events/cropped_nithishaa_packiareginauld.webp', name: 'Nithishaa Packiareginauld', position: 'Events Coordinator' },
          { src: 'Events/cropped_saamanthy_naveendrathas.webp', name: 'Saamanthy Naveendrathas', position: 'Events Coordinator' },
          { src: 'Events/cropped_steven.webp', name: 'Steven Zhu', position: 'Events Coordinator' },
        ]}
      />

      <TeamSection
        title="Finance Team"
        members={[
          { src: 'Finance/cropped_chantal_li.webp', name: 'Chantal Li', position: 'Director of Finance' },
          { src: 'Finance/cropped_logan_mak.webp', name: 'Logan Mak', position: 'Finance Associate' },
          { src: 'Finance/cropped_manasvi_t.webp', name: 'Manasvi Tirukachi', position: 'Finance Associate' },
          { src: 'Finance/cropped_sreeja_banerjee.webp', name: 'Sreeja Banerjee', position: 'Finance Associate' },
        ]}
        bg="gray-white"
      />

      <TeamSection
        title="Marketing Team"
        members={[
          { src: 'Marketing/cropped_akishai_sabaratnasarma.webp', name: 'Akishai Sabaratnasarma', position: 'Director of Marketing' },
          { src: 'placeholder.webp', name: 'Julia Joseph', position: 'Director of Marketing' },
          { src: 'placeholder.webp', name: 'Johnson Jin', position: 'Marketing Associate' },
        ]}
      />

      <TeamSection
        title="Media Team"
        members={[
          { src: 'Media/cropped_cecilia_vong.webp', name: 'Cecilia Vong', position: 'Director of Media' },
          { src: 'Media/cropped_tarlan_kamalian.webp', name: 'Tarlan Kamalian', position: 'Director of Media' },
          { src: 'Media/cropped_harkirat.webp', name: 'Harkirat Jabbal', position: 'Director of Media' },
          { src: 'Media/cropped_ellie_liu.webp', name: 'Ellie Liu', position: 'Graphic Designer' },
          { src: 'Media/cropped_gabriella_tai.webp', name: 'Gabriella Tai', position: 'Graphic Designer' },
          { src: 'Media/cropped_carissa_kong.webp', name: 'Carissa Kong', position: 'Writer' },
          { src: 'Media/cropped_nurzahan.webp', name: 'Nurzahan Chowdhury', position: 'Writer' },
          { src: 'Media/cropped_anum_sheikh.webp', name: 'Anum Sheikh', position: 'Editor' },
        ]}
        bg="gray-white"
      />

      <TeamSection
        title="Outreach Team"
        members={[
          { src: 'Outreach/cropped_naseem_parpia.webp', name: 'Naseem Parpia', position: 'Outreach Director' },
          { src: 'Outreach/cropped_carolyn_shi.webp', name: 'Carolyn Shi', position: 'Outreach Coordinator' },
          { src: 'Outreach/cropped_cheryl_chiu.webp', name: 'Cheryl Chiu', position: 'Outreach Coordinator' },
          { src: 'Outreach/cropped_eshal_siddiqi.webp', name: 'Eshal Siddiqi', position: 'Outreach Coordinator' },
        ]}
      />

      <TeamSection
        title="Web Dev Team"
        members={[
          { src: 'Web Dev/cropped_grace_zhang.webp', name: 'Grace Zhang', position: 'Director of Web Development' },
          { src: 'Web Dev/cropped_amrita_rajaram.webp', name: 'Amrita Rajaram', position: 'Web Designer' },
          { src: 'placeholder.webp', name: 'Anoch Jeyakanthan', position: 'Web Developer' },
        ]}
        bg="gray-white"
      />
    </div>
  );
};

export default Team;
