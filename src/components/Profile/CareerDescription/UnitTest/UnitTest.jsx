import React from "react";

export default function UnitTest({ isCurrent }) {
  return (
    isCurrent && (
      <ul className="content_list">
        <li>
          <span className="point_text">개요</span>
          <ul className="explan_list">
            <li>
              기간: 2022.4 ~ 2022.6 이전에 작업한 프로젝트에 유닛 테스트를
              적용하였으며 적용 당시 유닛 테스트의 관련 지식 없이
              진행하였습니다.
            </li>
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
          <span className="point_text">테스트 라이브러리 탐색</span>
          <ul className="explan_list">
            <li>
              jest, mocha, jasmine이 가장 유명하여 3개의 라이브러리를
              비교하였습니다. 적용할 프로젝트의 규모가 크지 않아 jest를
              채택하기로 결정하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">주요 기술스택</span>
          <ul className="explan_list">
            <li>jest</li>
            <li>
              @testing-library/react-hooks, @testing-library/jest-dom,
              @testing-library/react
            </li>
            <li>@emotion/jest</li>
          </ul>
        </li>
        <li>
          <span className="point_text">테스트 케이스 및 시나리오</span>
          <ul className="explan_list">
            <li>로그인/로그아웃 테스트 - 클릭 시 색상 변경 이벤트 동작 확인</li>
            <li>
              토글 기능 테스트 - route push 값을 비교하여 로그인/로그아웃 성공
              여부 확인
            </li>
            <li>
              그래프 기능 테스트 - 시간 간격 이벤트 동작 확인, 그래프 이미지
              활성/비활성화 이벤트 동작 확인
            </li>
            <li>
              단위 변환 함수 테스트 - mock 데이터 값에 따라 단위 변경 확인
            </li>
            <li>
              수치에 따른 색상 변경 테스트 - mock 데이터 값에 따라 색상 변경
              확인
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">부딪혔던 문제들</span>
          <ul className="explan_list">
            <li className="point_text">정보 부족</li>
            <li>
              유닛 테스트 관련 정보가 생각보다 부족했으며 문제 발생 시 해결책을
              찾는 기간이 상당히 오래 걸렸습니다. 비슷한 문제의 해결책을
              발견해도 그대로 사용할 수 없는 경우가 많았고 분석 후 테스트 코드에
              적합하게 사용할 수 있도록 적용시켜 이슈를 해결하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">mock 사용법</li>
            <li>
              테스트 코드를 작성할 때 mock 사용에 대해 생소하였으며 유닛 테스트
              경험이 쌓이면서 mock 사용법에 대해 점차 알게 되었습니다.
              jest에서는 이러한 mock 관련 메소드를 다양하게 지원해 주며 개발에
              사용한 mocking은 제공되는 여러 메소드를 활용했습니다. 유닛 테스트
              경험 기간이 긴 편은 아니라서 아직까지 jest에 있는 mocking 방법을
              깊이 알진 못했지만 어떤 식으로 하면 테스트 코드의 이슈를 해결할 수
              있는지에 대해 어느 정도 감을 익힌 거 같습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">api 요청</li>
            <li>
              처음엔 아무것도 모르는 상태에서 axios-mock-adapter를 사용해 해결된
              것 같았지만 response 값에 따라 분기가 있는 로직에 이슈가 발생하는
              것을 확인하였습니다. 해결되지 않아 api를 제대로 mocking 하는
              방법을 연구하였습니다. 이후 jest에서 제공하는 spyOn()을 사용하여
              axios를 mocking 한 후 mockImplementation() 메소드를 사용해
              비동기로 실행되는 api 요청을 해결하고 response로 받는 데이터 값을
              임의로 설정하여 분기가 되는 로직에서 발생하는 이슈를
              해결하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">route</li>
            <li>
              로그인, 로그아웃 테스트 목적으로 route를 mocking 하였고
              jest.mock으로 pathname, push 값을 임의로 넣어 테스트하였습니다.
              push 값을 확인하는 테스트였으므로 jest.fn()을 push에 넣어 비즈니스
              로직에서 동작하는 push 값을 확인하여 테스트하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">redux</li>
            <li>
              redux의 useSelector, useDispatch를 jest.spyOn()으로 mocking 한 후
              mockReturnValue() 메소드로 반환되는 값을 mocking 하여
              주입하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">createPortal</li>
            <li>
              프로젝트의 modal 컴포넌트는 createPortal을 사용하는 구조로
              되어있어 modal이 포함된 테스트에서 createPortal을 거칠 때 dom으로
              인식하지 못해 이슈가 발생하였습니다. jest.requireActual() 메소드에
              react-dom을 주입하여 mocking 한 후 react-dom 모듈로 modal이 포함된
              컴포넌트 내에 렌더링 하도록 jest.mock을 작성하여 해결하였습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">emotion 호환</li>
            <li>
              emotion 호환 이슈로 시간이 많이 소요되었으며 스타일 라이브러리
              교체도 고민하였습니다. 환경 세팅의 초점을 두고 emotion 공식 문서를
              참고하여 babelrc의 설정된 모듈 위치를 변경함으로써 해결할 수
              있었습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">Recharts</li>
            <li>
              차트 라이브러리로 사용하는 Recharts가 포함된 컴포넌트의 테스트
              코드 작성이 쉽지 않았습니다. gauge chart 렌더 이슈는 animation이
              동작하는 부분이 문제라는 것을 확인하였고 테스트 로직은 SSR을
              지원하지 않아 animation 옵션을 비활성화하는 방법으로
              해결하였습니다. 그 외에는 Recharts 모듈을 jest.requireActual()
              메소드에 주입하여 mocking 해 테스트를 진행했습니다.{" "}
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">lint-staged, husky 활용</span>
          <ul className="explan_list">
            <li>
              commit 시 jest를 실행할 수 있도록 lint-staged에 명령어를 추가하여
              코드 수정 후 잊지 않고 테스트가 되도록 작업하였습니다.
            </li>
          </ul>
        </li>
        <li>
          <span className="point_text">유닛테스트 장단점</span>
          <ul className="explan_list">
            <li className="point_text">장점</li>
            <li>
              브라우저에서 값을 임의로 넣어 테스트할 경우 입력하고 지우고를
              반복하며 번거롭게 하는 부분들을 테스트 코드에 여러 값을 주입하여
              동시에 테스트를 할 수 있다는 부분이 편리하다고 느꼈습니다.
            </li>
            <li>
              테스트로 사용하는 메소드가 다른 테스트에서도 재사용되는 경우가
              많아 비슷한 경우의 테스트 로직은 구현 시간이 단축되어 생산성
              측면에서도 좋다고 생각했습니다.
            </li>
          </ul>
          <ul className="explan_list">
            <li className="point_text">단점</li>
            <li>외부 라이브러리의 호환 과정이 쉽지 않았습니다.</li>
            <li>
              테스트 라이브러리 관련 해결에 대한 레퍼런스가 많지 않았습니다.
            </li>
          </ul>
        </li>
      </ul>
    )
  );
}
