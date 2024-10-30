import "./Skill.scss";
import React from "react";
import UsedStackCard from "../components/UsedStackCard";
import { FaHtml5 } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Skill({ setRef }) {
  return (
    <section ref={setRef} className="Skill">
      <div className="skill-title">Stack</div>
      <div className="used-stack-cards">
        <UsedStackCard
          title={"HTML / CSS"}
          icon={<FaHtml5 size={26} color="#E34F26" />}
        >
          <div>웹 표준에 맞는 HTML 문법을 사용합니다.</div>
          <div>CSS로 웹 페이지를 스타일링 할 수 있습니다.</div>
          <div>
            미디어 쿼리를 활용하여 다양한 기기에서의 웹 페이지를 구성합니다.
          </div>
        </UsedStackCard>
        <UsedStackCard
          title={"JavaScript / React"}
          icon={<SiReact size={26} color="#3178c6" />}
        >
          <div>자바스크립트의 작동원리를 이해하고 있습니다.</div>
          <div>ES6+ 문법을 활용합니다.</div>
          <div>리엑트를 이용하여 웹 프로젝트를 완성할 수 있으며,</div>
          <div>다양한 라이브러리를 적용할 수 있습니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={
            <>
              <span>Styled Component / SCSS</span>
              <br />
              <span>MUI</span>
            </>
          }
          icon={<SiSass size={30} color="#CC6699" />}
        >
          <div>
            Styled Component, SCSS를 적용하여 스타일링 및 CSS 관리를 해봤습니다.
          </div>
          <div>
            UI 라이브러리를 사용하여 빠르고 일관된 스타일링 구현을 해봤습니다.
          </div>
        </UsedStackCard>
        <UsedStackCard
          title={"Context API / Recoil"}
          icon={<SiRecoil size={30} color="#3578E5" />}
        >
          <div>전역 상태 관리에 대해 이해하고 있습니다.</div>
          <div>문서화를 통해 팀원 간의 컨벤션을 철저히 준수합니다.</div>
        </UsedStackCard>

        <UsedStackCard
          title={"React Native"}
          icon={<TbBrandReactNative size={30} color="#61DAFB" />}
        >
          <div>
            안드로이드와 IOS에 호환되는 앱을 만들기 위해 사용하였습니다.
          </div>
          <div>
            리엑트 네이티브 프로젝트 내에서 리액트 문법을 자유롭게 사용할 수
            있습니다.
          </div>
        </UsedStackCard>

        <UsedStackCard
          title={"Git / Figma / Notion"}
          icon={<SiGithub size={30} color="#F05032" />}
        >
          <div>
            피그마로 와이어프레임 및 목업을 작성하고 디자이너와 협업할 수
            있습니다.
          </div>
          <div>
            협업을 위해 노션으로 문서 작업을 하고, 스프린트를 만들어 일정을
            관리하였습니다.
          </div>
        </UsedStackCard>
      </div>
    </section>
  );
}

export default Skill;
