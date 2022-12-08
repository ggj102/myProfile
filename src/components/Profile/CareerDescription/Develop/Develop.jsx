import React from "react";

export default function Develop({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>노하드 시스템 관리 페이지</li>
            <li>차트로 리소스 사용량 확인</li>
            <li>PC클라이언트 모니터링 및 제어</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>전체적인 기본 구조 및 공통 컴포넌트 통합 리팩토링</li>
            <li>대시보드, 로그인 페이지 구현</li>
            <li>jwt방식의 인증/인가 구현</li>
            <li>API 연동</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 기술</span>
          <ul className="explan_list">
            <li>NextJS, Typescript, SWR, redux, emotion, jest</li>
            <li>react-virtuoso, reCharts</li>
            <li>husky, lintstage, eslint, prettier</li>
          </ul>
        </li>
        <li>
          <span className="point_text">리팩토링</span>
          <div className="sub_list">
            <span className="point_text">컴포넌트 구조 개선</span>
            <ul className="explan_list">
              <li>기존 아토믹 디자인 패턴 형태의 구조</li>
              <li>프로젝트 규모에 비해 디자인 패턴이 부적합하다고 판단</li>
              <li>파편화 된 컴포넌트를 통합하여 일반적인 구조로 변경</li>
              <li>
                NextJS에서 권장하는 않은 형태의 컴포넌트 구조를 권장하는 형태로
                개선
              </li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">컴포넌트 재사용성 향상</span>
            <ul className="explan_list">
              <li>유사한 로직의 컴포넌트를 통합하여 재사용성 향상</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">비효율적 최적화 로직</span>
            <ul className="explan_list">
              <li>기존 로직은 useCallback, useMemo가 남용</li>
              <li>
                개발 단계의 useCallback, useMemo는 불필요한 리소스 낭비가 발생
              </li>
              <li>비효율이라 판단하여 반드시 필요한 부분을 제외하고 삭제</li>
              <li>추후 최적화 단계에서 적용해야 한다고 판단</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">Context Api 적용</span>
            <ul className="explan_list">
              <li>무거운 컴포넌트 분할 과정에서 사용</li>
              <li>특정 컴포넌트 내의 상태 관리 공유를 목적으로 적용</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">테이블 컴포넌트 개선</span>
            <ul className="explan_list">
              <li>useTable로 기존 테이블 컴포넌트가 구현된 상태</li>
              <li>react-virtuoso 가상화 테이블 추가</li>
              <li>
                기존 테이블 컴포넌트에 가상화 테이블을 통합하여 props로
                전환하도록 구현
              </li>
            </ul>
          </div>
        </li>
        <li>
          <span className="point_text">대시보드 페이지 구현</span>
          <div className="sub_list">
            <span className="point_text">리소스 사용량 차트</span>
            <ul className="explan_list">
              <li>Recharts 사용</li>
              <li>RadialBarChart를 gauge 형태로 커스텀하여 적용</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">서비스 제어 버튼</span>
            <ul className="explan_list">
              <li>DHCP, TFTP, ISCSI, database, boot 제어 기능 구현</li>
            </ul>
          </div>
          <div className="sub_list">
            <span className="point_text">누적 리소스 사용량 차트</span>
            <ul className="explan_list">
              <li>Recharts 사용</li>
              <li>area chart로 그래프 구현</li>
              <li>
                Recharts의 brush 기능을 적용하여 특정 구간을 조절할 수 있도록
                구현
              </li>
              <li>
                범례 기능을 커스텀 하여 범례 클릭 시 그래프 활성/비활성화 기능
                구현
              </li>
              <li>특정 시간 간격으로 그래프를 볼 수 있는 기능의 옵션 구현</li>
            </ul>
          </div>
        </li>
        <li>
          <span className="point_text">인증 / 인가</span>
          <ul className="explan_list">
            <li>jwt로 응답받은 토큰을 쿠키에 저장하는 방식을 사용</li>
            <li>
              axios interceptor를 사용해 api 통신 시 토큰을 담아 요청하는 로직
              구현
            </li>
            <li>
              토큰이 만료된 경우 취소 토큰을 사용해 통신을 취소하고 로그인
              페이지로 리다이렉트
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">API 연동</span>
          <ul className="explan_list">
            <li>axios를 사용해 Restful api 통신</li>
            <li>SWR로 직관적인 data fetch 로직 구현</li>
          </ul>
        </li>
      </ul>
    )
  );
}
