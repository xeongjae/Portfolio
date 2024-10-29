import "./Main.scss";
import { useRef } from "react";
import Header from "../components/Header";
import Start from "../sections/Start";
import About from "../sections/About";
import Skill from "../sections/Skill";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Education from "../sections/Education";

function Main() {
  const scrollRef = useRef([]);

  return (
    <div className="main-container">
      <Header scrollRef={scrollRef} />
      <main className="main">
        <section ref={(el) => (scrollRef.current[0] = el)}>
          <Start />
        </section>
        <section ref={(el) => (scrollRef.current[1] = el)}>
          <About />
        </section>
        <section ref={(el) => (scrollRef.current[2] = el)}>
          <Skill />
        </section>
        <section ref={(el) => (scrollRef.current[3] = el)}>
          <Project />
        </section>
        <section ref={(el) => (scrollRef.current[4] = el)}>
          <Education />
        </section>
        <section ref={(el) => (scrollRef.current[5] = el)}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Main;
