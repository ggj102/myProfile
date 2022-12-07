import React from "react";

export default function Refactoring({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>기간: 2022.06 ~ 2022.10</li>
            <li>상태: 현재 서비스 중인 프로젝트</li>
            <li>목표: 로직 개선 및 기능 추가</li>
          </ul>
        </li>
        {/* <li>
          <span className="point_text">주요 작업</span>
          <ul className="explan_list">
            <li>
              전체적인 기본 구조 및 공통 컴포넌트 리팩토링, API 연동, 인증 /
              인가
            </li>
            <li>대시보드, 로그인 페이지</li>
          </ul>
        </li> */}
        <li>
          <span className="point_text">주요 기술스택</span>
          <ul className="explan_list">
            <li>NextJs, Javascript, scss</li>
            <li>axios, redux 및 미들웨어</li>
            <li>prop-types, yup, formik</li>
            <li>eslint, prettier</li>
          </ul>
        </li>
        <li>
          <span className="point_text">리팩토링 작업 흐름</span>
          <ul className="explan_list">
            <li>작업 동선을 위해 폴더 구조를 변경</li>
            <li>유지 보수 시 가장 문제가 많았던 컴포넌트를 먼저 작업</li>
            <li>기존 컴포넌트는 유지하고 test 용 파일에 복사하여 진행</li>
            <li>
              함수형 컴포넌트로 전환하는 과정에서 life cycle에 적합한 구조로
              개선
            </li>
            <li>
              반복되는 로직을 통합하여 최소화하고 컴포넌트의 분리로 유지 보수의
              접근성을 향상
            </li>
            <li>
              리팩토링 과정에서 부자연스러운 기능은 개선 및 삭제하고 필요한
              기능은 추가 구현하여 UX 향상
            </li>
            <li>디자인 개선</li>
            <li>
              작업이 끝난 후 기존 파일은 삭제하고 test 파일은 기존 파일명으로
              변경
            </li>
            <li>리팩토링 작업을 완료한 페이지를 정리하여 기록</li>
            <li>최종 기능점검 완료 후 마무리</li>
          </ul>
        </li>
        <li>
          <span className="point_text">전체적인 개선 사항</span>
          <ul className="explan_list">
            <li>
              클래스형 기반 컴포넌트를 리엑트에서 권고하는 함수형 컴포넌트
              기반으로 전환하고 hooks을 이용해 life cycle 로직을 구현했습니다.
            </li>
            <li>
              컴포넌트 단위가 너무 커 각각의 코드량이 상당히 많아 컴포넌트를
              분리하여 유지 보수의 접근성을 향상시켰습니다.
            </li>
            <li>
              함수 하나를 여러 이벤트에 사용하는 형태가 많아 기능이 너무
              많았으며 이런 방법의 제어는 이벤트의 일관성을 헤치는 부분이라
              생각하여 각 이벤트에 적합한 기능만 수행하도록 분리했습니다.
            </li>
            <li>
              불변성이 제대로 지켜지지 않는 로직이 있었으며 이러한 로직은
              데이터를 복사한 뒤에 기존의 값은 불변성을 유지하며 가공하도록
              개선했습니다.
            </li>
            <li>
              lint를 적용해 놓고 무시하는 주석을 사용해 작성한 코드가 꽤
              있었으며 해당 코드들은 lint 규칙을 준수하도록 개선한 후 주석을
              제거했습니다.
            </li>
            <li>
              콘솔에 warning 메시지가 많이 있었으며 대부분 기본적인 규칙을
              무시한 내용이라 최대한 해결하여 혹시 모를 이슈를 최소화했습니다.
            </li>
            <li>
              불필요한 검증 로직이 많아 default 값을 지정하여 검증 로직을
              최소화했습니다.
            </li>
            <li>
              같은 기능임에도 반복되는 로직을 함수로 분리하여 재사용할 수 있도록
              개선했습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">컴포넌트 개선 사항</span>
          <ul className="explan_list">
            <li className="point_text">유효성 검증</li>
            <li>
              프로젝트에서 사용한 유효성 검사 라이브러리는 yup을 사용하였으며
              기본적인 검사 방법과 yup에서 제공하는 when, test 함수를 사용하여
              특정 조건에 유효성 검사를 동작 시키는 로직을 일부 컴포넌트에
              적용시켰습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">테이블 컴포넌트화</li>
            <li>
              테이블을 사용하는 컴포넌트들이 각각의 테이블 로직을 가지고
              있었으며 공용으로 쓸 수 있도록 테이블을 컴포넌트화 시켰습니다.
              reactabular-virtualized를 사용하여 가상화 테이블을 구현하였으며
              기존 테이블을 사용하는 컴포넌트에 sort와 row select 기능을 내부
              기능으로 쓸 수 있도록 개선하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">드롭 다운</li>
            <li>
              드롭 다운 컴포넌트의 기능을 대폭 향상시켰습니다. 기존에는 select
              태그를 사용하지 않고 구현하였으며 일반적인 select 태그로 구현한
              기능보다 다소 떨어졌지만 디자인을 쉽게 하기 위한 측면에서 자체
              구현을 한 것으로 보였습니다. 추가 기능으로 드롭 다운 클릭 시
              활성화되는 컨텐츠를 브라우저의 높이에 따라 위치를 유동적으로
              바뀌도록 하였으며 구현 과정에서 getBoundingClientRect를
              활용하였습니다. 또한, 검색 기능을 추가하여 데이터를 찾기 쉽게
              하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">비효율적 구조의 컴포넌트 개선</li>
            <li>
              3개의 상위 컴포넌트에서 공용으로 사용하는 컴포넌트가 있었습니다.
              props를 내리는 과정과 데이터의 초기화 로직을 통합하지 않아 동일한
              로직을 상위 컴포넌트가 각각 가지고 있었으며 유지 보수 시 데이터
              추가 및 삭제를 반복 작업해야 하는 비효율적인 구조의
              컴포넌트였습니다. props는 최소화시키며 초기화 로직은 통합하고
              불필요한 로직은 전부 제거하여 효율적인 구조로 개선하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">리팩토링을 하며 느낀 점</span>
          <ul className="explan_list">
            <li>
              기존에 서비스하고 있는 프로젝트를 리팩토링한다는 건 굉장히 좋은
              경험이라 판단하여 자발적으로 진행 의사를 밝혀 시작하게 되었습니다.
              처음 이 프로젝트의 코드를 보고 난해하고 복잡했던 기억이 있었고
              저는 함수형 기반의 컴포넌트 개발만 주로 하여서 클래스형 기반의
              컴포넌트로 구현된 프로젝트는 생소하였습니다. 클래스형 컴포넌트의
              구조를 이해하는데 어느 정도 시간이 소요되었지만 함수형 컴포넌트와
              비슷한 부분이 많아 큰 어려움은 없었습니다. 리팩토링을 진행하며
              프로젝트의 사용된 패키지도 다시 살펴보고 컴포넌트 구조에 대한
              생각과 로직 개선을 위한 고민 그리고 에러를 해결하기 위해 수많은
              구글링과 공식 문서를 참고하며 많은 공부가 되었습니다. 다만 아쉬운
              점은 프로젝트의 전역 상태 관리와 데이터 패칭 부분에 있어 리팩토링
              작업을 하지 못한 부분이 아쉬움으로 남았습니다.
            </li>
          </ul>
        </li>
      </ul>
    )
  );
}
