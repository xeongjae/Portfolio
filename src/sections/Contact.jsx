import React from "react";
import "./Contact.scss";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">Thank you for Watching</div>
      <div className="subtitle">봐주셔서 감사합니다!</div>
      <div className="description">
        기본에 충실하며 꾸준히 성장하는 개발자가 되고 싶습니다.
        <br />
        항상 배우고 발전하는 자세로 나아가겠습니다.
      </div>
      <div className="contact-item-box">
        <div className="contact-item">
          <FaPhoneVolume /> 010 - 6207 - 0840
        </div>
        <div>
          <div className="contact-item">
            <MdEmail /> newsungjae0407@gmail.com
          </div>
        </div>
        <div>
          <a
            href={"https://github.com/xeongjae"}
            target="_blank"
            className="link"
          >
            <SiGithub />
            Github
          </a>
        </div>
        <img src="/cloud_1.png" className="frontend-text" alt="cloud" />
        <img src="/cloud_4.png" className="Code-text" alt="cloud2" />
        <img src="/cloud_3.png" className="react-text" alt="cloud3" />
        <img src="/cloud_2.png" className="javascript-text" alt="cloud4" />
      </div>
    </div>
  );
};

export default Contact;
