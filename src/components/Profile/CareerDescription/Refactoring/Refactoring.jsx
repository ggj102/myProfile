import React from "react";

export default function Refactoring({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>비트코인 채굴 관리 페이지</li>
            <li>마이닝 풀 허브에서 제공하는 api를 차트로 그려 채굴량 확인</li>
            <li>채굴 PC의 제어와 채굴 관리 설정 </li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>전체적인 구조 개선 및 공통 컴포넌트 통합</li>
            <li>클래스형 컴포넌트를 함수형으로 전환</li>
            <li>UI/UX 개선</li>
            <li>코드 최적화</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 기술</span>
          <ul className="explan_list">
            <li>NextJs, Javascript, scss</li>
            <li>axios, redux 및 미들웨어</li>
            <li>eslint, prettier</li>
          </ul>
        </li>
        <li>
          <span className="point_text">개선 사항</span>
          <ul className="explan_list">
            <li>
              클래스형 기반 컴포넌트를 리엑트에서 권고하는 함수형 컴포넌트
              기반으로 전환
            </li>
            <li>React-hooks을 이용해 life cycle 로직을 구현</li>
            <li>
              코드량이 많아 무거운 컴포넌트는 분리하여 유지 보수 접근성 향상
            </li>
            <li>이벤트 하나에 기능이 많은 부분은 이벤트를 분리하여 개선</li>
            <li>불변성이 무시된 로직은 값을 복사하여 사용하도록 개선</li>
            <li>불필요한 검증이 많아 검증 로직 최소화</li>
            <li>반복되는 로직을 함수로 분리하여 재사용성 향상</li>
            <li>UI/UX 개선을 위해 기능 개선 및 추가/삭제 </li>
          </ul>
        </li>
      </ul>
    )
  );
}
