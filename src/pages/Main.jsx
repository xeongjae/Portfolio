import "./Main.scss";
import { useRef } from "react";
import Header from "../components/Header";
import Start from "../sections/Start";
import AboutMe from "../sections/AboutMe";
import UsedStack from "../sections/UsedStack";
import Project from "../sections/Project";
import Contact from "../sections/Contact";
import Training from "../sections/Training";

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
          <AboutMe />
        </section>
        <section ref={(el) => (scrollRef.current[2] = el)}>
          <UsedStack />
        </section>
        <section ref={(el) => (scrollRef.current[3] = el)}>
          <Project />
        </section>
        <section ref={(el) => (scrollRef.current[4] = el)}>
          <Training />
        </section>
        <section ref={(el) => (scrollRef.current[5] = el)}>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Main;
