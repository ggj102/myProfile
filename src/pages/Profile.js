import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Book1 from "../../static/profile_img/book1.png";
import Book2 from "../../static/profile_img/book2.png";
import Book3 from "../../static/profile_img/book3.png";
import Sbs from "../../static/profile_img/sbs.png";
import Fast from "../../static/profile_img/fast.png";
import Me from "../../static/profile_img/me2.png";
import About from "../../static/profile_img/about_me.png";
import { useSelector } from 'react-redux';
import  Contents from '../styled_components/profileStyle';

function Profile(){
    const color = useSelector(state => state.color);

    return(
        <Contents 
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
                                    <div className = "wish_text">
                                        <span className="wish">Front End <br className="br"/> Developer</span>
                                        <span className="text">를 꿈꾸는</span>
                                    </div>
                                    <div className = "name_text">
                                        <span className="name">김광진</span>
                                        <span className="text">입니다</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_git">
                                <div className="email">
                                    <FontAwesomeIcon icon = {faEnvelope} size = "1x"/>
                                    <span className="address">
                                        <a href="mailto:ggj920123@gmail.com">
                                            ggj920123@gmail.com
                                        </a>
                                    </span>
                                </div>
                                <div className="git">
                                    <FontAwesomeIcon icon = {faGithubSquare} size = "1x"/>
                                    <span className="address"><a href="https://github.com/ggj102" target="_blank" >https://github.com/ggj102</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="me">
                            <img src={Me} alt="img"/>
                        </div>
                </div>
                <div className = "about_me area">
                    <div>
                        <img src={About} alt="img"/>
                    </div>
                    <div className="about_me_text">
                        <div className="title">About Me</div>
                        <div className="about_me_text">
                        게임프로그래밍으로 개발공부를 첫입문으로 1년의 기초를 쌓고 
                        <br/>2년 동안 프론트엔드의 지식과 관련 프로그래밍을 공부하였습니다. 
                        <br/>react와 javascript를 기반으로 html, css, next, redux, webpack을 활용하여 다수의 포트폴리오를 제작한 경험이 있습니다. 
                        <br/>그 중 몇몇의 포트폴리오는 지인과 서버 관련 협업을 하여 제작하였습니다. 
                        <br/>현재는 typescript와 next를 활용하여 ssr방식의 웹페이지를 포트폴리오로 제작중입니다.
                        </div>
                    </div>
                </div>
                <div className = "skills area">
                    <div className="title t_skill">Skills</div>
                    <div className="skill_box">
                        <div className="skill">
                            <div className="skill_title language">Language</div>
                            <ul>
                                <li>JavaScript (ES6)</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>C , C++ , C#</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <div className="skill_title library">Library</div>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Next</li>
                            </ul>
                        </div>
                        <div className="skill">
                            <div className="skill_title devops">DevOps</div>
                            <ul>
                                <li>Webpack</li>
                                <li>git</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "exp_edu area">
                    <div className="edu">
                        <div className="title">Education </div>
                        <div className="title">총 학습 기간 <span className="point_text">3년</span> <br/>(기초 1년, <span className="point_text">프론트엔드</span> 2년)</div>
                        <div className="info">
                            <img className="book_img" src={Sbs} alt="img"/>
                            <div className="info_title">SBS게임아카데미 게임프로그래밍 과정 수료</div>
                            <div className="date">2017.10 ~ 2018.10 (1년)</div>
                            <ul>
                                <li>- 프로그래밍 첫 입문과 기초를 쌓았습니다.</li>
                                <li>- 12개월 과정</li>
                                <li>- C언어를 이용하여 슈팅게임 개발</li>
                                <li>- C++과 directX로 3D 기초 학습</li>
                                <li>- unity와 C#을 학습 한 후 3D액션 게임을 학원 수료작으로 개발</li>
                            </ul>
                        </div>
                        <div  className="info">
                            <img className="book_img" src={Fast} alt="img"/>
                            <div className="info_title">fastcampas 프론트엔드(React) 올인원패키지</div>
                            <div className="date">2019.7 ~ 2019.10 (3개월)</div>
                            <ul>
                                <li>
                                    <a href="https://www.fastcampus.co.kr/dev_online_react" target="_blank">
                                    - https://www.fastcampus.co.kr/dev_online_react
                                    </a>
                                </li>
                                <li>- HTML/CSS</li>
                                <li>- React</li>
                                <li>- JavaScript</li>
                                <li>- Git</li>
                            </ul>
                        </div>
                        <div  className="info">
                            <div className="info_title">독학 및 협업 관련 내용</div>
                            <div className="date">2019.11 ~ 2021.8 (1년 10개월)</div>
                            <ul>
                                <li>- 현업 개발자분에게 가이드를 받아 독학하였습니다.</li><br/>
                                <li>- github를 통하여 pr 및 코드 리뷰 형태로 포트폴리오를 제작하였습니다</li><br/>
                                <li>- 모든 포트폴리오는 vercel을 통해 배포하였습니다.</li><br/>
                                <li>- 지인의 도움으로 서버관련 협업을 하였습니다.</li><br/>
                                <li>- 코딩테스트 대비 알고리즘(그리디, 이진탐색, 우선/깊이 탐색, 구현)을 학습하였습니다.</li>
                            </ul>
                        </div>
                        <div  className="info">
                            <div className="info_title">포트폴리오 제작기간 (commit 기준)</div>
                            <div className="date">2020.3.12 ~ 2021.5.25</div>
                            <ul>
                                <li>
                                <span className="point_text">{'<'}bookSearch{'>'} </span>
                                     2020.3.12 ~ 2020.3.26 (14일)
                                    <br/>- react와 html,css를 활용 
                                    <br/>- 지인의 api 협업으로 rest api의 규격으로 통신하여 
                                         영화 검색 기능 구현 
                                </li>
                                <br/>
                                <li>
                                <span className="point_text">{'<'}movieSearch{'>'} </span>
                                    2020.5.6 ~ 2020.5.20 (14일)
                                    <br/>- react와 html,css를 활용 
                                    <br/>- route를 이용하여 페이지 전환을 하였습니다.
                                    <br/>- 지인의 api 협업으로 rest api의 규격으로 통신하여 
                                         영화 검색 기능 구현 
                                </li>
                                <br/>
                                <li>
                                <span className="point_text">{'<'}shoppingMall{'>'} </span>
                                    2020.7.6 ~ 2020.12.3 (5개월)
                                    <br/>- react와 html,css를 활용 
                                    <br/>- route를 이용하여 페이지 전환을 하였습니다.
                                    <br/>- 지인의 서버 관련 협업으로 data 핸들링을 하였습니다.
                                    <br/>- redux로 일부의 상태값을 글로벌로 관리하였습니다.
                                    <br/>- 가장 규모가 큰 포트폴리오 였으며 실력 향상에 많은 도움이 되었습니다.
                                </li>
                                <br/>
                                <li>
                                <span className="point_text">{'<'}weatherInfo{'>'} </span>
                                    2021.3.4 ~ 2021.4.3 (1개월)
                                    <br/>- react를 기반으로 webpack을 학습하며 제작하였습니다.
                                    <br/>- es6 코드를 es5로 변환하여 브라우저 호환성을 높이기 위해 babel-loader를 사용했습니다.
                                    <br/>- 스타일링을 위해 styled-components plugin을 이용하였습니다.
                                    <br/>- 검색을 통하여 얻은 위도, 경도의 값을 분리된 페이지에서도 사용할 수 있도록 redux를 이용하여 글로벌 상태값으로 지정하였습니다.
                                    <br/>- 날씨 관련 api를 무료제공 해주는 곳을 이용하였습니다.
                                </li>
                                <br/>
                                <li>
                                <span className="point_text">{'<'}myProfile{'>'} </span>
                                    2021.4.13 ~ 2021.5.25 (6주)
                                    <br/>- Next.js를 학습하며 제작하였습니다.
                                    <br/>- route를 이용하여 페이지 전환을 하였습니다.
                                    <br/>- styled-component로 스타일링 하였습니다.
                                    <br/>- redux로 일부의 상태값을 글로벌로 관리하였습니다.
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="exp">
                        <div className="title">Experience</div>
                        <div className="title">(사회경험  <span className="point_text">5년 2개월</span>) </div>
                        <div className="info">
                            <div className="info_title">A{"&"}P파이낸셜</div>
                            <div className="date">2013.8 ~ 2014.6 (10개월)</div>
                            <ul>
                                <li>- 약 10개월 근무</li>
                                <li>- 아르바이트</li>
                                <li>- 문서관리 및 우편물관리</li>
                                <li>- 직원분들 외근 서포트</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info_title">롯데손해보험</div>
                            <div className="date">2015.1 ~ 2016.9 (1년 8개월)</div>
                            <ul>
                                <li>- 약 20개월 근무</li>
                                <li>- 파견직</li>
                                <li>- 문서관리 및 우편물관리</li>
                                <li>- 사회생활에 필요한 부분을 경험</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info_title">메이슨F{"&"}I</div>
                            <div className="date">2017.3 ~ 2019.11 (2년 8개월)</div>
                            <ul>
                                <li>- 약 32개월 근무</li>
                                <li>- 아르바이트</li>
                                <li>- 문서관리 및 우편물관리</li>
                                <li>- 직원의 신뢰를 얻어 아르바이트를 관리함</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Contents>
    )
}

export default Profile;