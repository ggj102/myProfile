import React from "react";

export default function Career({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">엑세스(주)</span>
          <ul className="explan_list">
            <li>기간: 2021.09.06 ~ 재직 중</li>
            <li>포지션: 사원 / 프론트 엔드 개발자</li>
            <li>업무: 프로젝트 개발 및 유지보수</li>
          </ul>
        </li>
        <li>
          <span className="point_text">보유 기술</span>
          <div className="sub_list">
            <span className="point_text">Language</span>
            <ul className="explan_list">
              <li>Typescript, Javascript</li>
              <li>HTML, CSS</li>
              <li>C, C++, C#</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">Library & Frameworks</span>
            <ul className="explan_list">
              <li>ReactJS, NextJS</li>
              <li>SCSS, emotion, styled-component</li>
              <li>Redux, SWR, Axios, Jest</li>
              <li>yup, react-virtuoso, rechart</li>
              <li>eslint, prettier, lint-staged, husky</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">ETC</span>
            <ul className="explan_list">
              <li>slack</li>
              <li>gitlab</li>
              <li>github</li>
            </ul>
          </div>
        </li>
      </ul>
    )
  );
}
