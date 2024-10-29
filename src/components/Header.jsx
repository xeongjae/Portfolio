import "./Header.scss";
import { useEffect, useState } from "react";

function Header({ scrollRef }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (idx) => {
    if (scrollRef.current[idx]) {
      scrollRef.current[idx]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const options = {
      root: null, // viewport를 기준으로 관찰
      rootMargin: "-100px", // 상단 여유 공간
      threshold: 0.45, // 10%가 뷰포트에 들어올 때 실행
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = scrollRef.current.indexOf(entry.target);
          setActiveIndex(idx); // 해당 섹션이 뷰포트에 들어오면 index 업데이트
        }
      });
    }, options);

    scrollRef.current.forEach((section) => {
      observer.observe(section); // 모든 섹션을 관찰 대상으로 설정
    });

    return () => {
      scrollRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [scrollRef]);

  return (
    <header className="mainHeader-container">
      <div className="mainHeader">
        <div className="logo" onClick={() => handleScroll(0)}>
          <div className="logo-text">XJ's Portfolio</div>
        </div>
        <div className="menu">
          <span
            className={`item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleScroll(1)}
          >
            About
          </span>
          <span
            className={`item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleScroll(2)}
          >
            Stack
          </span>
          <span
            className={`item ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleScroll(3)}
          >
            Project
          </span>
          <span
            className={`item ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleScroll(4)}
          >
            Training
          </span>
          <span
            className={`item ${activeIndex === 5 ? "active" : ""}`}
            onClick={() => handleScroll(5)}
          >
            Contact
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
