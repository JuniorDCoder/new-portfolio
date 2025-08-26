import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dcodertechie@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20 c-space" id="about">
      <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">

        {/* Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Foryoung Junior Ngu</p>
              <p className="grid-subtext">
                I’m a passionate Full Stack Developer, Blockchain Innovator, and IoT Builder. 
                With 3+ years of hands-on experience, I specialize in building modern web & mobile apps, 
                decentralized applications (dApps), and smart IoT systems. My work blends creativity, 
                technical expertise, and problem-solving to deliver scalable solutions for real-world impact.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My core technologies include:
                <ul className="ml-4 list-disc">
                  <li><strong>Languages:</strong> JavaScript (ES6+), PHP, Python, Solidity, HTML, CSS, SQL</li>
                  <li><strong>Frontend:</strong> Vue.js, Nuxt.js, React, React Native, Expo, Tailwind CSS</li>
                  <li><strong>Backend:</strong> Node.js, Express, Laravel, Firebase Functions</li>
                  <li><strong>Databases:</strong> MySQL, Firebase, Firestore, Supabase, SQLite</li>
                  <li><strong>Blockchain:</strong> Solidity, Hardhat, Ethers.js, Web3.js, ERC-721/20 NFTs</li>
                  <li><strong>IoT & Embedded:</strong> Arduino, ESP32, Raspberry Pi, Sensors & Actuators</li>
                  <li><strong>Cloud & Tools:</strong> AWS, Git/GitHub, Docker, Vercel, Netlify, Agile/Scrum</li>
                  <li><strong>Others:</strong> REST & GraphQL APIs, Third-party integrations, AI & Voice Assistants</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 6.0, lng: 10.0, text: 'Bamenda, Cameroon', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Global Collaboration</p>
              <p className="grid-subtext">
                I’m based in Bamenda, Cameroon, but I collaborate globally on web, blockchain, and IoT projects. 
                Flexible with time zones, I thrive in remote-first environments and enjoy building solutions that 
                scale across borders.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Passion & Projects */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Projects & Passion</p>
              <p className="grid-subtext">
                Coding is more than a career—it’s my passion. I’ve built <strong>AsapChop</strong> (food delivery platform), 
                <strong> Oppfunding</strong> (crowdfunding platform), <strong>AI Interviewer</strong> (voice-based interview assistant), 
                <strong>JobCall</strong> (AI job coach for visually impaired users), and IoT systems like 
                <strong> smart pipe leakage detection</strong> and <strong>digital hearing aids with live translation</strong>. 
                Each project reflects my drive to innovate and solve real problems using tech.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-center grid-subtext">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="font-medium text-white lg:text-2xl md:text-xl text-gray_gradient">dcodertechie@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
