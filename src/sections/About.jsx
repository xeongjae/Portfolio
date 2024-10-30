import React, { useEffect, useRef } from "react";
import "./About.scss";
import Typed from "typed.js";

function About({ setRef }) {
  const typedEl = useRef(null);
  const observerRef = useRef(null); // Intersection Observer의 ref

  useEffect(() => {
    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const typed = new Typed(typedEl.current, {
              strings: ["안녕하세요, 프론트엔드 개발자 김성재입니다."],
              typeSpeed: 80,
              loop: false,
              smartBackspace: true,
              fadeOut: true,
              fadeOutClass: "typed-fade-out",
              fadeOutDelay: 1000,
            });
            observerRef.current = typed;
          } else {
            observerRef.current?.destroy();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (typedEl.current) {
      observer.observe(typedEl.current);
    }

    // 컴포넌트 언마운트 시 observer와 Typed 인스턴스 정리
    return () => {
      observer.disconnect();
      observerRef.current?.destroy();
    };
  }, []);

  return (
    <section ref={setRef} className="about">
      <h1 className="title">About Me</h1>
      <div className="contents">
        <div className="img-box">
          <img
            src="/동글프사.png"
            fill
            property="true"
            className="img"
            alt="동글프사"
          />
          <div className="tag-box">
            <div className="tag">#열정</div>
            <div className="tag">#자기주도적</div>
            <div className="tag">#몰입</div>
          </div>
        </div>
        <div className="text">
          <div className="type-text-box">
            <span className="type-text" ref={typedEl}></span>
          </div>
          <div className="text-box">
            <p>
              ✔︎ &nbsp;새로운 프로젝트에 참여할 때마다 항상{" "}
              <span className="point">열정적으로 몰입</span>합니다.
              <br />
              과정을 즐기고 새로운 지식을 얻는 것을 좋아하는 "개발자" 입니다.
            </p>
          </div>
          <p>
            ✔︎ &nbsp;협업에서도 같은 열정을 유지하며, 팀원들과{" "}
            <span className="point">적극적인 협업</span>으로 <br /> 최종
            프로젝트의 퀄리티를 높이는 데 기여합니다.
          </p>
          <p>
            ✔︎ &nbsp;주어진 업무에 그치지 않고{" "}
            <span className="point">주도적으로 고민</span>합니다.
            <br />
            특히 기획 의도에 적합한 기능을 찾고, 사용자 경험 향상을 위해
            노력합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
