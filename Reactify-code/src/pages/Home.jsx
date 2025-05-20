import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Link } from "react-router-dom"

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
import React, { use, useEffect } from "react";
import "remixicon/fonts/remixicon.css";
const Home = () => {

  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  useGSAP(() => {
    var tl = gsap.timeline();
    

    tl.from("#page1 span", {
      x: -60,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.inOut	",
    },'start');
    tl.from("#page1 p", {
      y: -60,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.inOut",
    });

    tl.from('.NaveHome',{
      y:-100,
      stagger:1
    },'start')

    gsap.to("#page2 h1", {
      x: isMobile ? "-2400%" : "-500%",

      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top",
        end: isMobile ? "bottom -200":"bottom -900",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });
    
     
  });

  return (
    <main>
      <div className="reactify" id="page1">
      <div className="NaveHome">
        <h1>R</h1>

        <Link id="SignUPButton" to="/signup"> 
          Signup
        </Link>
      </div>
        <h1>
          <span>Reactify</span>
          <span>-</span>
          <span>Code</span>
        </h1>
        <p>
          A lightning-fast online code editor with multi-language support and
          zero setup.
        </p>
      </div>
      <div className="ccc" id="page2">
        <div className="titleCCC">
 <h1>Code. Compile. Create.</h1>
        </div>
       
      </div>
      {/* <div className="lgs">
        <h4>Lets Get Started</h4>
        <i class="ri-arrow-down-long-line"></i>
      </div> */}
    </main>
  );
};

export default Home;