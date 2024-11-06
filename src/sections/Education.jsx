import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education">
      <h1 className="title">Training</h1>
      <div className="contents">
        <div className="info">
          <div className="info-top"> 엘리스 SW 엔지니어 6기</div>
          <div className="info-mid">(주)엘리스그룹</div>
          <div className="info-bot">2023.08 ~ 2023.12</div>
        </div>
        <div className="detail">
          <div className="detail-title">프론트엔드 개발자 양성 과정</div>
          <div className="detail-text">
            <div>• &nbsp;HTML, CSS, JavaScript의 기본 개념 학습</div>
            <div>• &nbsp;DOM 조작 및 사용자 인터렉션 구현 경험</div>
            <div>• &nbsp;RESTful API를 활용하여 데이터 통신 경험</div>
            <div>• &nbsp;라이프사이클 메서드, 이벤트 훅 학습</div>
            <div>• &nbsp;Styled Components를 활용한 모듈화 학습</div>
            <div>• &nbsp;전역 상태 관리( Redux, Context API) 학습</div>
            <div className="bold-text">
              • &nbsp;두번의 팀 프로젝트를 통한 협업 경험
            </div>
            <div className="bold-text">
              • &nbsp;최종 프로젝트 (4주) 리드 경험
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="/eliceIpad.png" fill property="true" className="img" alt="수료증"/>
        </div>
      </div>
    </div>
  );
};

export default Education;
