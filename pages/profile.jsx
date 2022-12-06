import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Me from "../static/profile_img/me2.png";
import About from "../static/profile_img/about_me.png";
import { useSelector } from "react-redux";
import Contents from "../src/styled_components/profileStyle";

export default function ProfilePage() {
  const color = useSelector((state) => state.color);

  return (
    <Contents
      background={color.bg2}
      color={color.font}
      border={color.border}
      in={color.in}
      out={color.out}
    >
      <div className="profile">
        <div className="intro_box">
          <div className="intro">
            <div>
              <div>
                <div className="wish_text">
                  <span className="wish">
                    Front End <br className="br" /> Developer
                  </span>
                </div>
                <div className="name_text">
                  <span className="name">김광진</span>
                  <span className="text">입니다</span>
                </div>
              </div>
            </div>
            <div className="contact_git">
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                <span className="address">
                  <a href="mailto:ggj920123@gmail.com">ggj920123@gmail.com</a>
                </span>
              </div>
              <div className="git">
                <FontAwesomeIcon icon={faGithubSquare} size="1x" />
                <span className="address">
                  <a href="https://github.com/ggj102" target="_blank">
                    https://github.com/ggj102
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="me">
            <img src={Me} alt="img" />
          </div>
        </div>
        <div className="about_me area">
          <div>
            <img src={About} alt="img" />
          </div>
          <div className="about_me_text">
            <div className="title">About Me</div>
            <div className="about_me_text">
              현 프론트엔드 개발자로{" "}
              <span className="point_orange">프로젝트 개발 및 유지 보수</span>를
              맡고 있으며 NextJS를 기반으로 typescript와 javascirpt로 작성된
              각각의 프로젝트를 담당하고 있습니다.
              <br />
              <span className="point_blue">유닛테스트</span> 적용과{" "}
              <span className="point_blue">프로젝트 리팩토링</span>
              작업을 하였으며 차트, 테이블, 유효성 검사 등{" "}
              <span className="point_purple">여러 라이브러리</span> 사용에
              익숙한 편입니다.
              <br />
              1년이 조금 넘는 개발 업무를 하며 업무에 대한 적성이 맞다는 것을
              확신했으며 그렇기에 개발자로서 더 성장하고 많은 경험을 쌓아
              발전하고 싶습니다.
            </div>
          </div>
        </div>
        <div className="skills area">
          <div className="title t_skill">Skills</div>
          <div className="skill_box">
            <div className="skill">
              <div className="skill_title language">Language</div>
              <ul>
                <li>- Typescript, Javascript</li>
                <li>- HTML, CSS, SCSS</li>
                <li>- C , C++ , C#</li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title library">Library & Frameworks</div>
              <ul>
                <li>- ReactJS, NextJS</li>
                <li>- Redux, SWR, Axios, Jest</li>
                <li>- emotion, styled-component</li>
                <li>- yup, react-virtuoso, rechart</li>
                <li>- eslint, prettier, lint-staged, husky</li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title devops">ETC</div>
              <ul>
                <li>- slack</li>
                <li>- gitlab</li>
                <li>- github</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="exp_edu area">
          <div className="edu">
            <div className="title">Portfolio </div>
            <div className="info">
              <div className="info_title">포트폴리오</div>
              <ul>
                <li>
                  <span className="point_text">
                    {"<"}shoppingMall{">"}
                  </span>
                  <br />- ReactJS로 구현한 페이지
                  <br />- route를 이용하여 페이지 전환 구현
                  <br />- RESTful API를 이용한 통신작업
                  <br />- redux로 일부 상태관리
                </li>
                <br />
                <li>
                  <span className="point_text">
                    {"<"}weatherInfo{">"}
                  </span>
                  <br />- ReactJS로 구현한 페이지
                  <br />- 날씨 API연동
                  <br />- 자동완성 검색기능 구현
                </li>
                <br />
                <li>
                  <span className="point_text">
                    {"<"}myProfile{">"}
                  </span>
                  <br />- NextJS로 구현한 페이지
                  <br />- styled-component의 특징인 props를 사용해 다크모드,
                  라이트모드 기능 구현
                  <br />- 반응형 웹 구현
                  <br />- portfolio페이지 grid 적용
                  <br />- json data 통신 중 loading 구현
                  <br />- redux로 일부 상태관리
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Contents>
  );
}
