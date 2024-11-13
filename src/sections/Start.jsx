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
      x: "-500%",
      y: "-400%",
    });
    gsap.to(".cloud5", {
      ...gsapOptions,
      x: "-700%",
      y: "-800%",
      rotation: -100,
      scale: 0,
      filter: "blur(40px)",
    });
    gsap.to(".cloud6", {
      ...gsapOptions,
      x: "100%",
      y: "-500%",
      filter: "blur(10px)",
      rotation: 20,
      scale: 0.3,
    });
    gsap.to(".cloud7", {
      ...gsapOptions,
      x: "-100%",
      y: "-300%",
      scale: 1,
      rotation: -10,
    });
    gsap.to(".cloud8", {
      ...gsapOptions,
      x: "200%",
      y: "-400%",
      rotation: 20,
    });
    gsap.to(".cloud9", {
      ...gsapOptions,
      x: "400%",
      y: "-600%",
      filter: "blur(25px)",
      rotation: 100,
      scale: 0.5,
    });
    gsap.to(".cloud10", {
      ...gsapOptions,
      x: "400%",
      y: "-600%",
      scale: 0,
    });
    gsap.to(".cloud11", {
      ...gsapOptions,
      x: "300%",
      y: "-300%",
      scale: 0,
      filter: "blur(10px)",
    });
    gsap.to(".cloud12", {
      ...gsapOptions,
      x: "400%",
      y: "-300%",
      rotation: 20,
    });
  }, []);

  return (
    <section ref={setRef} className="start">
      <img src="/cloud_1.webp" className="cloud cloud1" alt="cloud" />
      <img src="/cloud_2.webp" className="cloud cloud2" alt="cloud2" />
      <img src="/cloud_3.webp" className="cloud cloud3" alt="cloud3" />
      <img src="/cloud_5.webp" className="cloud cloud4" alt="cloud4" />
      <img src="/cloud_10.webp" className="cloud cloud5" alt="cloud5" />
      <img src="cloud_4.webp" className="cloud cloud6" alt="cloud6" />
      <img src="/cloud_6.webp" className="cloud cloud7" alt="cloud7" />
      <img src="/cloud_8.webp" className="cloud cloud8" alt="cloud8" />
      <img src="/cloud_9.webp" className="cloud cloud9" alt="cloud9" />
      <img src="/cloud_10.webp" className="cloud cloud10" alt="cloud10" />
      <img src="/cloud_11.webp" className="cloud cloud11" alt="cloud11" />
      <img src="/cloud_12.webp" className="cloud cloud12" alt="cloud12" />

      <div className="title">
        <h1>Hello, I'm</h1>
        <h1 className="point">FronTenD</h1>
        <h1 className="letter-space">DeVel0Per</h1>
        <h1 className="point">Xe0ngJae</h1>
      </div>
    </section>
  );
}

export default Start;
