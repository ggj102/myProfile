import React from "react";

export default function Develop({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>기간: 2021.11 ~ 2022.03</li>
            <li>
              노하드 시스템을 관리하는 페이지이며 차트와 테이블 등을 이용해 현재
              및 누적 리소스 사용량을 확인할 수 있습니다.
            </li>
            <li>
              angular → react 기반으로 작업하던 프로젝트를 이어서
              작업하였습니다. 마크업 및 기본적인 컴포넌트 단위 분리만 되어 있는
              상태였으며 기존 API는 유지하고 UI, UX 개선 작업이 필요한
              상태였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>
              전체적인 기본 구조 및 공통 컴포넌트 리팩토링, API 연동, 인증 /
              인가
            </li>
            <li>대시보드, 로그인 페이지</li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 기술스택</span>
          <ul className="explan_list">
            <li>jest, testing-library/react</li>
            <li>react-cookies. yup, react-hook-form</li>
            <li>husky, lintstage, eslint, prettier</li>
          </ul>
        </li>
        <li>
          <span className="point_text">리팩토링</span>
          <ul className="explan_list">
            <li className="point_text">부적합한 디자인 패턴</li>
            <li>
              프로젝트 구조가 아토믹 디자인 패턴을 기반으로 작업되어 있어 특징을
              파악한 결과 해당 디자인 패턴은 규모가 큰 프로젝트에서 높은 효율을
              보인다는 것을 확인하였습니다. 하지만 해당 프로젝트는 그 정도로
              규모가 크지 않으며 오히려 과도한 컴포넌트 파편화로 인해 유지
              보수에 난점이 생길 것으로 판단하여 과하게 쪼개진 컴포넌트를
              선정하여 통합하고 일반적인 구조로 변경하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">Storybook</li>
            <li>
              storybook 자체는 긍정적인 생각이지만 역시나 프로젝트의 규모가 크지
              않아 컴포넌트 개발에 있어 추가로 필요한 리소스 및 부가적인 코딩
              작업이 비효율적이라 생각하였기에 storybook을 제거하기로
              결정하였습니다. 이후 리팩토링 및 추가 작업 과정에서도 크게
              필요성을 느끼진 못하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">useCallback, useMemo 남용</li>
            <li>
              대부분의 로직을 살펴보니 useCallback, useMemo를 사용한 것을
              확인하였습니다. 이렇게 사용하는 것이 옳은 것인가 궁금하여 관련된
              정보를 찾아보고 검토해 보았습니다. 결과 이러한 남용은 오히려
              리소스를 과하게 낭비할 수 있어 프로젝트 최적화 단계에서 사용하는
              것이 적절하다고 결정하였습니다. 따라서, useCallback, useMemo를
              제거한 후 반드시 필요하다고 판단되는 부분에만 적용하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">Context Api 적용</li>
            <li>
              거대한 컴포넌트 분할 과정에서 props drilling이 너무 심하여 여러
              가지 고민을 했습니다. 글로벌 상태 관리를 이용하기엔 특정
              컴포넌트에서만 사용하는 state라 부적합하다고 판단했으며 특정
              컴포넌트 범위에서만 state를 공유할 수 있는 Context Api가
              적합하다고 판단해 적용하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">NextJS의 적합한 구조 개선</li>
            <li>
              기존 pages 디렉토리에 하위 컴포넌트를 같이 넣은 구조를 pages와
              컴포넌트 디렉토리를 분리하여 NextJS 권장하는 구조로
              변경하였습니다.
            </li>
            <li>
              페이지 전환이 적합한 부분을 state 값으로 스위칭하는 구조에 동적
              라우팅을 적용해 페이지 형태로 전환하도록 개선하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">대시보드 컴포넌트 구현</span>
          <ul className="explan_list">
            <li className="point_text">차트 라이브러리 조사</li>
            <li>
              총 8가지의 라이브러리를 비교 분석하여 정리하였고 항목은 각각
              프로젝트에서 요구하는 디자인, 커스텀 편의, 사용자 수, 가장 최근
              업데이트 일, 라이센스를 확인하였습니다. 그중 프로젝트에서 요구하는
              chart와 ssr를 지원하고 라이센스가 상업적 이용도 무료인 Recharts를
              채택하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">Recharts 적용 과정</li>
            <li>
              차트 관련 라이브러리를 다루는 경험은 처음이라 시행착오가 많았지만
              공식 문서 내용을 꼼꼼히 확인하여 요구하는 차트의 디자인을
              구현하였습니다. 프로젝트에서 요구하는 gauge 형태와 정확히 일치하는
              차트가 없어 RadialBarChart를 커스텀 하여 구현하였습니다. 커스텀
              하는 과정에서 막히는 부분도 많았고 생각보다 공식 문서의 설명이
              부족해 시행착오를 많이 겪었습니다. 하지만 이 과정에서 Recharts
              사용에 익숙해졌습니다. 이후 1주 일치 리소스 현황을 보여주는 차트는
              area 차트를 사용하여 구현하였습니다. Recharts에서 제공하는 Brush
              기능을 사용하여 특정 기간을 보기 쉽게 구현하였고 범례 기능은
              프로젝트에서 요구하는 기능보다 부족하여 자체 구현하였습니다. 범례
              클릭 시 해당 data graph를 활성/비활성 할 수 있는 기능과 시간을
              선택하여 chart data를 선택한 시간 간격만큼 그래프를 볼 수 있는
              기능도 추가 구현하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">테이블 컴포넌트 기능 추가 및 개선</span>
          <ul className="explan_list">
            <li>
              공통 테이블 컴포넌트는 useTable을 사용해 구현되어 있었습니다.
              테이블 기능을 개선을 위해 가상화 기능을 추가하는 요구사항이
              있었습니다. 기존 테이블은 유지하고 추가 props를 통해 가상화
              테이블로 전환할 수 있도록 구상하였습니다. 가상화 테이블 기능이
              있는 라이브러리를 조사하며 요구하는 기능이 있는 적합한
              라이브러리를 찾기가 쉽지 않았습니다. 여러 가지 라이브러리를
              테스트하고 그중 가벼운 react-virtuoso를 사용하기로 결정하였습니다.
              react-virtuoso를 useTable과 같이 사용하는 구조로 적용하였으며
              추가적인 기능 구현과 컴포넌트 최적화 및 분할 작업량이 상당히
              많았습니다. 구현 과정에서 추가적인 기능 개선 요청이 있었습니다.
              기존에 table row를 checkbox 클릭만으로 하는 부분을 드래그를
              통해서도 선택이 가능하도록 변경하는 요청이었습니다. checkbox에
              mouseDown을 일정 시간 유지 시 mouseEnter 되는 checkbox를
              check하도록 기능을 구현하는 과정에서 가상화 테이블에도 함께
              적용하는게 쉽지 않아 컴포넌트 구조 수정을 많이 하게 되었습니다.
              작업 중 테이블 관련 이슈에 대해 레퍼런스가 많지 않아 검색을 해도
              해결책을 찾기 쉽지 않았지만 공식문서를 최대한 활용하여 시행착오
              끝에 컴포넌트 구현을 마무리 하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">인증 / 인가</span>
          <ul className="explan_list">
            <li>
              jwt를 사용하여 응답받은 토큰을 쿠키에 저장하는 방식을 사용했으며
              refresh 토큰은 사용하지 않는 형태로 구현하였습니다. api 통신 시
              토큰을 담아서 요청하였으며 axios interceptor를 사용하여
              구현했습니다. 토큰이 만료되었을 경우 interceptor request 함수
              반환값에 취소 토큰을 포함하여 보내는 형태로 구현하였습니다. 토큰
              만료 시 로그인 페이지로 리다이렉트하며 토큰은 api 요청 시, 페이지
              이동 시, 특정 페이지에서 일정 주기로 api 갱신 시 체크하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">API 연동</span>
          <ul className="explan_list">
            <li>
              API 연동을 위해 SWR 라이브러리를 적용하였습니다. SWR에 대해 학습을
              미리 했기에 적용에 어려움은 없었으며 Redux middleware를 사용하여
              구현하는 것보다 코드량이 훨씬 가볍고 직관적임을 느꼈습니다.
            </li>
          </ul>
        </li>
      </ul>
    )
  );
}
