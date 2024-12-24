import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('me@foryongjunior.site');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="my-20 c-space" id="about">
      <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Foryoung Junior Ngu</p>
              <p className="grid-subtext">
                I am a fullstack developer with 3 years of hands-on experience in building dynamic and user-friendly web and mobile applications. My expertise spans across both frontend and backend development, specializing in creating robust, responsive, and scalable solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My core technologies include:
                <ul className="ml-4 list-disc">
                  <li><strong>Languages:</strong> JavaScript, PHP, Python, HTML, CSS, SQL</li>
                  <li><strong>Frontend Frameworks:</strong> Vue.js, Nuxt.js, React, React Native, Tailwind CSS</li>
                  <li><strong>Backend:</strong> Laravel, Node.js</li>
                  <li><strong>Tools & Platforms:</strong>AWS, Git, Docker, Expo</li>
                  <li><strong>Databases:</strong> MySQL, Firebase, SQLite</li>
                  <li><strong>Others:</strong> API development, Third-party integrations, Agile methodology</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

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
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I’m based in Bamenda, Cameroon, and open to collaborating on global projects through remote work opportunities.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Coding is not just my profession—it’s my passion. I thrive on solving complex problems through innovative solutions, constantly seeking out new technologies to enhance my skill set. Whether it’s creating seamless user experiences or building efficient backend systems, I love every step of the development process.
              </p>
            </div>
          </div>
        </div>

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
                <p className="font-medium text-white lg:text-2xl md:text-xl text-gray_gradient">me@foryongjunior.site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
