import React from "react";
import Accordion from "../../../common/Accordion";

export default function UnitTest() {
  return (
    <div className="CareerDescription_content">
      <div className="content_title">3. 유닛 테스트 적용</div>
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>Jest를 사용한 유닛테스트</li>
            <li>노하드 시스템 관리 페이지에 유닛테스트 시범 적용</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>유닛테스트 시범 적용을 하며 테스트 메뉴얼 구축</li>
            <li>여러가지 테스트 시행으로 테스트 가능 범위 연구</li>
          </ul>
        </li>

        <li>
          <Accordion title="상세 작업 사항">
            <div className="sub_list">
              <span className="point_text">테스트 케이스</span>
              <ul className="explan_list">
                <li>로그인/로그아웃 테스트</li>
                <li>토글 기능 테스트</li>
                <li>그래프 기능 테스트</li>
                <li>단위 변환 함수 테스트</li>
                <li>수치에 따른 색상 변경 테스트</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">mocking 적용 모듈</span>
              <ul className="explan_list">
                <li>axiox</li>
                <li>route</li>
                <li>redux</li>
                <li>createPortal</li>
                <li>emotion</li>
                <li>Recharts</li>
              </ul>
            </div>
            <div className="sub_list">
              <span className="point_text">테스트 자동화 적용</span>
              <ul className="explan_list">
                <li>
                  lint-staged에 jest 실행 명령어를 추가해 commit 시 자동 실행
                </li>
              </ul>
            </div>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}
