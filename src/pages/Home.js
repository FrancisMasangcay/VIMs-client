import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//assets
import banner from "../assets/VIM-homepage-banner.png";
import profilePage from "../assets/profilePage.png";
import learnPage from "../assets/learnPage.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='banner'>
        <img src={banner} alt='banner' />
      </div>
      <div className='section'>
        <div className='container-txt'>
          <h1>Explore the world of Investments</h1>
          <p>
            Simulate a real life investment portfolio by making trades on the
            VIMS virtual market that tracks Wall Street.
          </p>
        </div>
        <div className='container-media'>
          <img src={profilePage} alt='simulation' />
        </div>
      </div>

      <div className='section' data-aos='fade-right'>
        <div className='container-media'>
          <img src={learnPage} alt='learn page' />
        </div>
        <div className='container-txt'>
          <h1>Learn the Basics</h1>
          <p>
            For newer traders, VIMS comes with easy to navigate introductory
            tutorials that explain basic investment concepts and terms.
          </p>
        </div>
      </div>
      {/* <div className='section' data-aos='fade-left'>
        <div className='container-txt'>
          <h1>Research</h1>
          <p>
            Find opportunities with VIMS easy to use built in stock filters. And
            delve into the nitty gritty of a security with historic performance
            data, and fund prospectuses.{" "}
          </p>
        </div>
        <div className='container-media'>
          <img src={profilePage} alt='stock filters' />
        </div>
      </div> */}

      <div id='section-3'>
        <h1>READY TO GET STARTED? LET'S DIVE INTO INVESTING</h1>
        <a href='/signup' className='btn'>
          SIGN UP
        </a>
        <p>
          <i>Disclaimer:</i> VIMS is a simulation of real life markets. In game
          accounts hold <strong>no monetary </strong>value.
        </p>
      </div>
    </>
  );
}
