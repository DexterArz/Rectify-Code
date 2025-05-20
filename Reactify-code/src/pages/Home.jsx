import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Lenis init
    const lenis = new Lenis({
      smoothTouch: true,
      smooth: true,
      lerp: 0.05,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ScrollTrigger update on scroll
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.to(".scroll-line", {
      scaleY: 1,
      scrollTrigger: {
        trigger: ".homeMain",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const Eload = document.querySelector(".Eload");
    const h4 = document.querySelectorAll("#homeNav h4");
    h4.forEach((ele) => {
      ele.addEventListener("mouseenter", () => {
        Eload.innerHTML = ele.innerHTML;
        Eload.style.opacity = "1";
      });
    });

    h4.forEach((ele) => {
      ele.addEventListener("mouseleave", () => {
        //  Eload.style.display = 'none'
        Eload.style.opacity = "0";
      });
    });

    const video = document.querySelector(".trLayer");
    function mosueEntr() {
      gsap.to(".cursor", {
        height: "240px",
        width: "240px",
        borderRadius: "130px",
        duration: 0.5,
      });
      gsap.to(".cursor-text", {
        opacity: 1,
        duration: 0.5,
      });
    }
    function mosuelev() {
      gsap.to(".cursor", {
        height: "18px",
        width: "18px",
        duration: 0.5,
      });
      gsap.to(".cursor-text", {
        opacity: 0,
        duration: 0.5,
      });
    }
    video.addEventListener("mouseenter", mosueEntr);
    video.addEventListener("mouseleave", mosuelev);
    function mosueMove(e) {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.Out",
      });
    }
    window.addEventListener("mousemove", mosueMove);

    var tl3 = gsap.timeline();

    tl3.from(".loading h1,p", {
      opacity:0,
      x: 100,
      duration: 0.75,
      ease: "power2.Out",
      stagger: 0.1,
    });
    tl3.to(
      ".loading",
      {
        y: -1000,
        ease: "power2.Out",
      },
      "load"
    );

    tl3.from(
      ".page1 h1  span",
      {
        y: 120,
        opacity: 0,
        ease: "power2.out",
        delay: 0.1,
        stagger: 0.02,
      },
      "load"
    );
    tl3.from(
      ".page1 h2  span",
      {
        y: 120,
        opacity: 0,
        ease: "power2.out",
        delay: 0.1,
        stagger: 0.02,
      },
      "load"
    );

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 ",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
      },
    });
    tl.to(
      ".page1 h1 ",
      {
        x: -450,
        color: "#11111b",
      },
      "1st"
    );
    tl.to(
      ".page1 h2 ",
      {
        x: 450,
        color: "#11111b",
      },
      "1st"
    );
    tl.to(
      ".homeMain",
      {
        background: "#CBA6F7",
      },
      "1st"
    );
    tl.to(
      ".page1 video",
      {
        width: "90%",
        marginLeft: "5%",
      },
      "1st"
    );
    tl.to(
      ".trLayer",
      {
        width: "90%",
        marginLeft: "5%",
      },
      "1st"
    );

    gsap.to(".page2 h1", {
      x:'-75%',
      scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(".page2 .ri-code-s-slash-line", {
      x: -1700,
      scrollTrigger: {
        trigger: ".homeMain .page2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".ri-settings-2-line", {
      x: -1400,
      scrollTrigger: {
        trigger: ".homeMain .page2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".ri-lightbulb-flash-line", {
      x: -1800,
      scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });


  return (


    <div className="homeMain">
      <div className="loading">
        <h1>R</h1>
        <p>Reactify-Code</p>
      </div>
      <div className="Eload">
        <h1>q</h1>
      </div>
      <div className="cursor">
        <span className="cursor-text">Editor</span>
      </div>
      <div className="page1">
        <div id="homeNav">
          <h4>R</h4>
          <div id="homeNavPart2">
            <div className="navTogles">
              <h4>home</h4>
              <h4>editor</h4>
              <h4>github</h4>
            </div>

            <div className="navAuth">
              <h4>signin</h4>
              <h4>signup</h4>
            </div>
          </div>
        </div>
        <h1>
          <span>.</span>
          <span>/</span>
          <span>R</span>
          <span>e</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>f</span>
          <span>y</span>
        </h1>
        <h2>
          {" "}
          <span>C</span>
          <span>o</span>
          <span>d</span>
          <span>e</span>{" "}
        </h2>
        <div className="trLayer"></div>
        <div className="video">
          <video
            src="https://rawcdn.githack.com/DexterArz/intro/c74ab76386c997a12d30c05e3f03d65ec4e993d4/2025-05-18%2007-42-09.mp4"
            // preload="metadata"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>


  <div className="page2">
        <h1>Code.Compile.Create</h1>
        <i className="ri-code-s-slash-line" id="icon1"></i>
        <i className="ri-settings-2-line" id="icon2"></i>
        <i className="ri-lightbulb-flash-line" id="icon3"></i>
      </div>


      <div className="line-wrapper">
        <div className="scroll-line"></div>
      </div>
    </div>


  );
};

export default Home;
