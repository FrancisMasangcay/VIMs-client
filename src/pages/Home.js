import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//components
import NavbarHome from "../components/NavbarHome";

//assets
import banner from "../assets/VIM-homepage-banner.png";
import placeholder from "../assets/placeholder2.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <NavbarHome />
      <div class='banner'>
        <img src={banner} alt='banner' />
      </div>
      <div class='section' /*data-aos='fade-down' data-aos-delay='500'*/>
        <div class='container-txt'>
          <h1>Explore the world of Investments</h1>
          <p>
            Simulate a real life investment portfolio by making trades on the
            VIMS market tracking Wall Street in real time.
          </p>
        </div>
        <div class='container-media'>
          <img src={placeholder} alt='simulation' />
        </div>
      </div>

      <div class='section' data-aos='fade-right'>
        <div class='container-media'>
          <iframe
            src='https://www.youtube.com/embed/NpEaa2P7qZI'
            frameborder='0'
            title='Intro'
          ></iframe>
        </div>
        <div class='container-txt'>
          <h1>Learn the Basics</h1>
          <p>
            For newer traders, VIMS comes with easy to navigate introductory
            videos that explain basic investment concepts and terms.
          </p>
        </div>
      </div>
      <div class='section' data-aos='fade-left'>
        <div class='container-txt'>
          <h1>Research</h1>
          <p>
            Find opportunities with VIMS easy to use built in stock filters. And
            delve into the nitty gritty of a security with historic performance
            data, and fund prospectuses.{" "}
          </p>
        </div>
        <div class='container-media'>
          <img src={placeholder} alt='stock filters' />
        </div>
      </div>

      <div id='section-3'>
        <h1>READY TO GET STARTED? LET'S DIVE INTO INVESTING</h1>
        <a href='/signup' class='btn'>
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
