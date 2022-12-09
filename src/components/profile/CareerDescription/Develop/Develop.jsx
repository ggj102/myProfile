import React from "react";
import Accordion from "../../../common/Accordion";

export default function Develop() {
  return (
    <div className="CareerDescription_content">
      <div className="content_title">1. 노하드 시스템 관리 페이지 개발</div>
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>차트로 리소스 사용량 확인</li>
            <li>PC 클라이언트 모니터링 및 제어</li>
            <li>NextJS, Typescript 기반의 프로젝트</li>
            <li>개발이 중단되었던 프로젝트를 이어서 개발</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>전체적인 기본 구조 및 공통 컴포넌트 통합 리팩토링</li>
            <li>대시보드, 로그인 페이지 구현</li>
            <li>인증/인가 구현</li>
            <li>API 연동</li>
          </ul>
        </li>
        <li>
          <Accordion title="상세 작업 사항">
            <div className="sub_list">
              <span className="point_text">리팩토링</span>
              <ul className="explan_list">
                <li>전체적인 컴포넌트 구조 및 재사용성 개선</li>
                <li>일부 Context Api 적용을 통한 scoped 한 state 관리</li>
                <li>테이블 컴포넌트 개선</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">대시보드 페이지 구현</span>
              <ul className="explan_list">
                <li>Recharts 라이브러리를 이용하여 리소스 사용량 차트 구현</li>
                <li>gauge 차트는 RadialBarChart를 커스텀 하여 적용</li>
                <li>brush 기능을 이용하여 특정 구간을 조절할 수 있도록 구현</li>
                <li>
                  범례 기능을 커스텀 하여 클릭 시 그래프 활성/비활성화 기능 구현
                </li>
                <li>특정 시간 간격으로 그래프를 볼 수 있는 기능의 옵션 구현</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">인증 / 인가</span>
              <ul className="explan_list">
                <li>jwt로 응답받은 토큰을 쿠키에 저장하는 방식을 사용</li>
                <li>
                  axios interceptor를 사용해 api 통신 시 토큰을 담아 요청하는
                  로직 구현
                </li>
                <li>
                  토큰이 만료된 경우 취소 토큰을 사용해 통신을 취소하고 로그인
                  페이지로 리다이렉트
                </li>
              </ul>
            </div>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}
