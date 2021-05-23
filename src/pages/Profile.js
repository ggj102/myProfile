import styled from 'styled-components';
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

const Content = styled.div`
    a:link{text-decoration: none; color:${(props)=> props.color};}
    a:visited{text-decoration: none; color:${(props)=> props.color};}
    a:active{text-decoration: none; color:${(props)=> props.color};}
    a:hover{text-decoration: none; color:${(props)=> props.color};}
    ul{
        list-style:none;
        margin: 0;
        padding: 0;
        word-break: break-all;
    }
    .profile{
        padding: 0 85px;
        margin: 0 auto;
        max-width: 1140px;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
    }
    .intro_box{
        display:flex;
        height: 100vh;
        justify-content: space-between;
        align-items: center;
    }
    .wish{
        color: #2196F3;
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .name{
        color: #a97afd;
        font-weight: bold;
        font-size: 60px;
    }
    .wish_text{
        margin: 10px 0;
    }
    .text{
        font-size: 25px;
        color:${(props)=> props.color}
    }
    .name_text{
        margin-bottom: 50px;
    }
    .contact_git{
        text-align: left;
    }
    .email{
        margin-bottom : 10px;
        color:${(props)=> props.color}
    }
    .git{
        line-height: 30px;
        color:${(props)=> props.color}
    }
    .address{
        margin-left: 10px;
    }
    .me{
        border: 20px solid ${(props)=> props.out};
        height: 340px;
        width: 340px;
        border-radius: 50%;
    }
    .me img{
        width: 300px;
        border: 20px solid ${(props)=> props.in};
        margin: 0 auto;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        vertical-align: top;
    }
    .title{
        font-weight: bold;
        font-size: 30px; 
        margin-bottom: 20px;
        color:${(props)=> props.color}
    }
    .t_skill{
        text-align: center;
    }
    .area{
        margin-bottom: 150px;
    }
    .about_me{
        display:flex;
        justify-content:space-between;
    }
    .about_me img{
        max-width: 400px;
    }
    .about_me_text{
        line-height: 24px;
        font-size: 16px;
        color:${(props)=> props.color}
    }
    .skill_box{
        display: flex;
        justify-content: space-between;
    }
    .skill_title{
        font-weight: bold;
        font-size: 20px;
    }
    .skill{
        padding: 10px 30px;
        box-sizing:border-box;
        border: 1px solid ${(props)=> props.border};;
        border-radius: 4px;
        background-color: ${(props)=> props.background};
        font-size: 15px;
        width: 32%;
    }
    .skill ul{
        margin-top: 20px;
        color:${(props)=> props.color}
    }
    .skill li{
        margin-bottom: 10px;
    }
    .language{
        color: #ffa500;
    }
    .library{
        color: #a97afd;
    }
    .devops{
        color: #2196F3;
    }
    .exp_edu{
        display: flex;
        justify-content: space-between;
    }
    .exp{
        width: 47%;
    }
    .edu{
        width: 47%;
    }
    .info{
        border: 1px solid ${(props)=> props.border};
        background-color: ${(props)=> props.background};
        border-radius: 4px;
        padding: 15px 30px;
        box-sizing:border-box;
        margin-bottom: 20px;
        line-height: 25px;
    }
    .date{
        color:${(props)=> props.color}
    }
    .info ul{
        margin-top: 20px;
        color:${(props)=> props.color}
    }
    .info_title{
        color: #0bceaf;
        margin: 5px 0;
        font-size: 20px;
        font-weight: bold;
    }
    .book_img img{
        max-width: 100px;
        border: 1px solid #F2F2F2;
    }
    .book_info{
        display:flex;
        margin-top: 30px;
    }
    .book_info ul{
        margin: 0;
        margin-left: 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 1024px){
        .profile{
            padding: 0 25px;
            margin: 0 auto;
            max-width: 1140px;
            box-sizing: border-box;
            color: #fff;
            font-size: 16px;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 850px){
            .intro_box{
                display:flex;
                height: auto;
                flex-direction: column;
                align-items: center;
                margin-bottom: 80px;
            }
            .intro{
                order: 1;
            }
            .me{
            order: 0;
            height: 340px;
            width: 340px;
            border-radius: 50%;
            position:relative;
            bottom: 40px;
            margin: 0 auto;
            }
            .br{
                display: none;
            }
            .wish_text{
                margin: 10px 0;
                text-align:center;
            }
            .name_text{
                margin-bottom: 50px;
                text-align:center;
            }
            .contact_git{
                display:block;
                text-align: center;
                margin-bottom: 0;
            }
            .about_me{
                display:block;
                text-align: center;
            }
            .about_me_text{
                line-height: 24px;
                font-size: 16px;
            }
            .about_me_text .title{
                margin-top: 40px;
            }
            .skill_title{
                font-weight: bold;
                font-size: 20px;
            }
            .skill{
                padding: 5px 20px;
                box-sizing:border-box;
                border-radius: 4px;
                font-size: 15px;
            }
            .book_info{
                display:block;
                margin-top: 30px;
            }
            .book_img{
                text-align:center;
                margin-bottom: 15px;
                
            }
            .book_info ul{
                text-align:center;
                padding: 0;
                margin: 0;
            }
        }
    @media screen and (max-width: 480px){
        .profile{
            padding: 10px 10px;
            margin: 0 auto;
            max-width: 1140px;
            box-sizing: border-box;
            color: #fff;
            font-size: 16px;
        }
        .intro_box{
            display:flex;
            height: auto;
            flex-direction: column;
            align-items: center;
            margin-bottom: 80px;
        }
        .intro{
            order: 1;
        }
        .me{
            order: 0;
            height: auto;
            width: 100%;
            border-radius: 50%;
            position:relative;
            bottom: 40px;
            margin: 0 auto;
            box-sizing: border-box;
            }
        .me img{
            box-sizing: border-box;
            height: auto;
            width: 100%;
        }
        .br{
            display: none;
        }
        .wish_text{
            margin: 10px 0;
            text-align:center;
        }
        .name_text{
            margin-bottom: 50px;
            text-align:center;
        }
        .contact_git{
            display:block;
            text-align: center;
            margin-bottom: 0;
        }
        .about_me{
            display:block;
            text-align: center;
        }
        .about_me_text{
            line-height: 24px;
            font-size: 16px;
        }
        .about_me img{
            max-width: 400px;
            width: 100%;
        }
        .about_me_text .title{
            margin-top: 40px;
        }
        .skill_box{
            display: flex;
            flex-direction: column;
            
        }
        .skill_title{
            margin-left: 5px;
            font-weight: bold;
            font-size: 20px;
        }
        .skill{
            padding: 5px;
            box-sizing:border-box;
            border-radius: 4px;
            font-size: 15px;
            margin: 0 auto 15px auto;
            width: 80%;
            height: 100%;
            text-align: center;
        }
        .book_info{
            display:block;
            margin-top: 30px;
        }
        .book_img{
            text-align:center;
            margin-bottom: 15px;
            
        }
        .book_info ul{
            text-align:center;
            padding: 0;
            margin: 0;
        }
        .exp_edu{
            display: flex;
            flex-direction: column;
        }    
        .exp_edu .title{
            text-align: center;
        }
        .exp{
            width: 80%;
            margin: 0 auto;
        }
        .exp .title{
            margin-top: 150px;
        }
        .edu{
            width: 80%;
            margin: 0 auto;
        }
        
        .info{
            border-radius: 4px;
            padding: 15px 30px;
            box-sizing:border-box;
            line-height: 25px;
            margin-bottom: 20px;
        }
    }

`

function Profile(){
    const color = useSelector(state => state.color);

    return(
        <Content 
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
                            안녕하세요 Web FE 공부를 하고 있는 김광진 입니다.
                            <br/>React를 이용한 Web FE 개발을 특기로 하고 있습니다.
                            <br/>프로그래밍 입문은 게임개발로 시작하여 언어에 대한 기초를 다졌으며
                            <br/>웹개발에 흥미가 생겨 독학을 하였고 적성에 맞다고 판단하여 
                            <br/>현재는 웹개발자가 되기 위한 꿈을 꾸고 있습니다.
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
                        <div className="title">Education</div>
                        <div className="info">
                            <img className="book_img" src={Sbs} alt="img"/>
                            <div className="info_title">SBS게임아카데미 게임프로그래밍 과정 수료</div>
                            <div className="date">2017.10 ~ 2018.10</div>
                            <ul>
                                <li>- 12개월 과정</li>
                                <li>- C언어를 이용하여 슈팅게임 개발</li>
                                <li>- C++과 directX로 3D 기초 학습</li>
                                <li>- unity와 C#을 학습 한 후 3D액션 게임을 학원 수료작으로 개발</li>
                            </ul>
                        </div>
                        <div  className="info">
                            <img className="book_img" src={Fast} alt="img"/>
                            <div className="info_title">fastcampas 프론트엔드(React) 올인원패키지</div>
                            <div className="date">2019.7 ~ 2019.10</div>
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
                            <div className="info_title">독학을 하며 학습한 서적 및 내용</div>
                            <div className="date">2019.11 ~ </div>
                            <div className="book_info">
                                <div className="book_img">
                                    <img src={Book3} alt="img"/>
                                </div>
                                <ul>
                                    <li>- 리액트의 전반적인 부분을 학습</li>
                                    <li>- 리덕스로 글로벌 상태관리</li>
                                    <li>- 바벨 및 웹팩</li>
                                    <li>- Next.js</li>
                                    <li>- 타입스크립트 기초</li>
                                </ul>
                            </div>
                            <div className="book_info">
                                <div className="book_img">
                                    <img src={Book1} alt="img"/>
                                </div>
                                
                                <ul>
                                    <li>- 알고리즘 학습</li>
                                </ul>
                            </div>
                            {/* <div className="book_info">
                                <div className="book_img">
                                    <img src={Book2} alt="img"/>
                                </div>
                                <ul>
                                    <li>- 타입스크립트를 활용한 포트폴리오 제작</li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="exp">
                        <div className="title">Experience</div>
                        <div className="info">
                            <div className="info_title">A{"&"}P파이낸셜</div>
                            <div className="date">2013.8 ~ 2014.6</div>
                            <ul>
                                <li>- 약 10개월 근무</li>
                                <li>- 아르바이트</li>
                                <li>- 문서관리 및 우편물관리</li>
                                <li>- 직원분들 외근 서포트</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info_title">롯데손해보험</div>
                            <div className="date">2015.1 ~ 2016.9</div>
                            <ul>
                                <li>- 약 20개월 근무</li>
                                <li>- 파견직</li>
                                <li>- 문서관리 및 우편물관리</li>
                                <li>- 사회생활에 필요한 부분을 경험</li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info_title">메이슨F{"&"}I</div>
                            <div className="date">2017.3 ~ 2019.11</div>
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
        </Content>
    )
}

export default Profile;