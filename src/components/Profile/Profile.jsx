import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Me from "../../../static/profile_img/me2.png";
import About from "../../../static/profile_img/about_me.png";
import { useSelector } from "react-redux";
import ProfileContents from "../../styled_components/profileStyle";
import CareerDescription from "./CareerDescription";

export default function Profile() {
  const color = useSelector((state) => state.color);

  return (
    <ProfileContents
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
          <div className="about_me_text_content">
            <div className="title">소개</div>
            <div className="about_me_text">
              현 프론트엔드 개발자로{" "}
              <span className="point_orange">프로젝트 개발 및 유지 보수</span>를
              맡고 있으며 NextJS를 기반으로 Typescript와 Javascirpt로 작성된
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
        {/* <div className="skills area">
          <div className="title">기술</div>
          <div className="skill_box">
            <div className="skill">
              <div className="skill_title language">Language</div>
              <ul className="skill_language">
                <li>
                  <span>Typescript</span>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>SCSS</span>
                </li>
                <li>
                  <span>C</span>
                  <span>C++</span>
                  <span>C#</span>
                </li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title library">Library & Frameworks</div>
              <ul className="skill_library">
                <li>
                  <span>ReactJS</span>
                  <span>NextJS</span>
                  <span>SCSS</span>
                </li>
                <li>
                  <span>Redux</span>
                  <span>SWR</span>
                  <span>Axios</span>
                  <span>Jest</span>
                </li>
                <li>
                  <span>emotion</span>
                  <span>styled-component</span>
                  <span>Axios</span>
                  <span>Jest</span>
                </li>
                <li>
                  <span>yup</span>
                  <span>react-virtuoso</span>
                  <span>rechart</span>
                </li>
                <li>
                  <span>eslint</span>
                  <span>prettier</span>
                  <span>lint-staged</span>
                  <span>husky</span>
                </li>
              </ul>
            </div>
            <div className="skill">
              <div className="skill_title ETC">ETC</div>
              <ul className="skill_ETC">
                <li>slack</li>
                <li>gitlab</li>
                <li>github</li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="career area">
          <div className="career_item">
            <div className="title">경력</div>
            <CareerDescription />
          </div>
        </div>
        <div className="career area">
          <div className="career_item">
            <div className="title">기타 이력</div>
            <div className="info">
              <ul className="content_list">
                <li>
                  <span className="point_text">경험</span>
                  <ul className="explan_list">
                    <li>
                      프로그래밍을 접하기 전 5년간 아르바이트 및 파견 근무로
                      사회생활 경험
                    </li>
                    <li>게임 프로그래밍 1년 과정으로 프로그래밍 입문</li>
                    <li>
                      현직 프론트엔드 지인을 멘토로 하여 2년간 웹 프로그래밍
                      공부 및 포트폴리오를 개발
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="point_text">자격증</span>
                  <ul className="explan_list">
                    <li>정보처리 산업기사</li>
                    <li>네트워크 관리사 2급</li>
                    <li>컴퓨터 활용능력 2급</li>
                  </ul>
                </li>
                <li>
                  <span className="point_text">학력</span>
                  <ul className="explan_list">
                    <li>2023년 2월 학점은행제 컴퓨터 공학 학사학위 취득예정</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProfileContents>
  );
}
