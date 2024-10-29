import "./About.scss";

function About({ setRef }) {
  return (
    <section ref={setRef} className="about">
      <div className="title">About Me</div>
      <div className="contents">
        <div className="img-box">
          <img src="/동글프사.png" fill property="true" className="img" alt="동글프사"/>
        </div>
        <div className="text">
          <h1>
            김성재 | <span className="point">몰입하는개발자</span>
          </h1>
          <p>
            새로운 프로젝트에 참여할 때마다 저는 항상{" "}
            <span className="point2">열정적</span>으로 몰입합니다.
            <br /> 기획 의도에 적합한 기능을 찾고,{" "}
            <span className="point2">사용자 경험 향상</span>을 위해 노력하는
            “개발자”입니다.
          </p>
          <p>
            팀원들과의 협업에서도 같은 열정을 유지하며, 의견을 주고받고 함께
            고민하며 문제를 해결하기 위해 끊임없이 노력합니다.
          </p>
          <p>
            주어진 업무에 그치지 않고{" "}
            <span className="point2">자기 주도적</span>으로 팀을 위해
            기여합니다. <br />
            다른 역할을 담당한 팀원들과 적극적으로 협업하여 최종 프로젝트의
            퀄리티를 높이는 데 기여합니다.
          </p>
          <div className="tag-box">
            <div className="tag">열정</div>
            <div className="tag">자기주도적</div>
            <div className="tag">몰입</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
