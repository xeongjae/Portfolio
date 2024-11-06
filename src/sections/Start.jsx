import React from "react";
import "./Start.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Start({ setRef }) {
  gsap.registerPlugin(ScrollTrigger);
  const gsapOptions = {
    scrollTrigger: {
      trigger: ".Start",
      scrub: 1,
    },
    duration: 1,
  };

  useGSAP(() => {
    gsap.to(".start .title", {
      scale: 0.5,
      scrollTrigger: {
        trigger: ".section-02",
        scrub: 1,
      },
    });

    gsap.to(".cloud1", {
      ...gsapOptions,
      x: "-1100%",
      y: "-1700%",
      filter: "blur(30px)",
    });
    gsap.to(".cloud2", {
      ...gsapOptions,
      x: "-300%",
      y: "-400%",
      rotation: -30,
      scale: 0.5,
    });
    gsap.to(".cloud3", {
      ...gsapOptions,
      x: "-1000%",
      y: "-500%",
      filter: "blur(8px)",
    });
    gsap.to(".cloud4", {
      ...gsapOptions,
      x: "-400%",
      y: "300%",
      scale: 1,
      rotation: -20,
      filter: "blur(5px)",
    });
    gsap.to(".cloud5", {
      ...gsapOptions,
      x: "-500%",
      y: "-700%",
    });
    gsap.to(".cloud7", {
      ...gsapOptions,
      x: "-700%",
      y: "-800%",
      rotation: -100,
      scale: 0,
      filter: "blur(40px)",
    });
    gsap.to(".cloud9", {
      ...gsapOptions,
      x: "-200%",
      y: "-400%",
      scale: 1,
      rotation: -10,
    });
    gsap.to(".cloud10", {
      ...gsapOptions,
      x: "100%",
      y: "-700%",
      filter: "blur(10px)",
      rotation: 20,
      scale: 0.3,
    });
    gsap.to(".cloud12", {
      ...gsapOptions,
      x: "700%",
      y: "100%",
      scale: 0,
      filter: "blur(5px)",
    });
    gsap.to(".cloud14", {
      ...gsapOptions,
      x: "300%",
      y: "-100%",
      rotation: 20,
    });
    gsap.to(".cloud15", {
      ...gsapOptions,
      x: "600%",
      y: "-800%",
      filter: "blur(23px)",
      rotation: 100,
      scale: 0.5,
    });
    gsap.to(".cloud16", {
      ...gsapOptions,
      x: "400%",
      y: "-600%",
      scale: 0,
    });
    gsap.to(".cloud17", {
      ...gsapOptions,
      x: "1200%",
      y: "-1000%",
      scale: 0,
      filter: "blur(20px)",
    });
    gsap.to(".cloud18", {
      ...gsapOptions,
      x: "400%",
      y: "-300%",
      rotation: 20,
    });
  }, []);

  return (
    <section ref={setRef} className="start">
      <img src="/cloud_1.png" className="cloud cloud1" alt="cloud" />
      <img src="/cloud_2.png" className="cloud cloud2" alt="cloud2" />
      <img src="/cloud_3.png" className="cloud cloud3" alt="cloud3" />
      <img src="/cloud_4.png" className="cloud cloud4" alt="cloud4" />
      <img src="/cloud_5.png" className="cloud cloud5" alt="cloud5" />
      <img src="/cloud_7.png" className="cloud cloud7" alt="cloud7" />
      <img src="cloud_9.png" className="cloud cloud9" alt="cloud9" />
      <img src="/cloud_10.png" className="cloud cloud10" alt="cloud10" />
      <img src="/cloud_12.png" className="cloud cloud12" alt="cloud12" />
      <img src="/cloud_14.png" className="cloud cloud14" alt="cloud14" />
      <img src="/cloud_15.png" className="cloud cloud15" alt="cloud15" />
      <img src="/cloud_16.png" className="cloud cloud16" alt="cloud16" />
      <img src="/cloud_17.png" className="cloud cloud17" alt="cloud17" />
      <img src="/cloud_18.png" className="cloud cloud18" alt="cloud18" />

      <div className="title">
        <h1>HELLO, I'm</h1>
        <h1 className="point">FronTenD</h1>
        <h1>DeveLOPer</h1>
        <h1 className="point">XeongJae</h1>
      </div>
    </section>
  );
}

export default Start;
