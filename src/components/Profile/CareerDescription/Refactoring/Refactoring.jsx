import React from "react";
import Accordion from "../../../common/Accordion";

export default function Refactoring() {
  return (
    <div className="CareerDescription_content">
      <div className="content_title">2. 비트코인 채굴 관리 페이지 리팩토링</div>
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>마이닝 풀 허브에서 제공하는 api를 차트로 그려 채굴량 확인</li>
            <li>채굴 PC의 제어와 채굴 관리 설정 </li>
            <li>NextJS, Javascript 기반의 프로젝트</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>전체적인 컴포넌트 구조 및 재사용성 개선</li>
            <li>클래스형 컴포넌트를 함수형으로 전환</li>
            <li>코드 최적화</li>
            <li>UI/UX 개선</li>
          </ul>
        </li>
        <li>
          <Accordion title="상세 작업 사항">
            <div className="sub_list">
              <span className="point_text">컴포넌트 구조 개선</span>
              <ul className="explan_list">
                <li>
                  코드량이 많아 무거운 컴포넌트는 분리하여 유지 보수 접근성 향상
                </li>
                <li>이벤트 하나에 기능이 많은 부분은 이벤트를 분리하여 개선</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">함수형 컴포넌트 전환</span>
              <ul className="explan_list">
                <li>
                  클래스형 기반 컴포넌트를 리엑트에서 권고하는 함수형 컴포넌트
                  기반으로 전환
                </li>
                <li>React-hooks을 이용해 life cycle 로직을 구현</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">코드 최적화</span>
              <ul className="explan_list">
                <li>불변성이 무시된 로직은 값을 복사하여 사용하도록 개선</li>
                <li>불필요한 검증이 많아 검증 로직 최소화</li>
                <li>반복되는 로직을 함수로 분리하여 재사용성 향상</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">UI/UX 개선</span>
              <ul className="explan_list">
                <li>디자인 개선</li>
                <li>기능 개선 및 추가/삭제</li>
              </ul>
            </div>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}
