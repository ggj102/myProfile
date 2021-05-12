import styled from 'styled-components';
import Pf1 from "../../static/portfolio_img/pf1.png"
import Pf2 from "../../static/portfolio_img/pf2.png"
import Pf3 from "../../static/portfolio_img/pf3.png"
import Pf4 from "../../static/portfolio_img/pf4.png"
import Pf5 from "../../static/portfolio_img/pf5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { useSelector } from 'react-redux';

const Content = styled.div`
    .portfolio{
        padding: 150px 85px 0 85px;
        margin: 0 auto;
        max-width: 1140px;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .item{
        width: 49%;
        margin-bottom: 30px;
        box-sizing: border-box;
        padding: 10px;
        background-color: ${(props)=>props.background};
        border-radius:10px;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .item img{
        width: 100%;
        height: 194px;
        border-radius:10px;
    }
    .item::after{
        display: block;
        clear:both;
        content: '';
    }
    .link_area{
        display:flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .icon_area{
        display:flex;
        color:${(props)=>props.color};
    }
    .pf_title{
        font-size: 25px;
        font-weight: bold;
        color:${(props)=>props.color};
    }
    .icon_center{
        margin: 0 10px;
    }
    @media screen and (min-width: 481px) and (max-width: 1024px)
    {
        .portfolio{
            padding: 150px 25px 0 25px;
            margin: 0 auto;
            max-width: 1140px;
            box-sizing: border-box;
            color: #fff;
            font-size: 16px;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 850px)
    {
        .portfolio{
            padding: 0 25px;
            margin: 0 auto;
            max-width: 1140px;
            box-sizing: border-box;
            color: #fff;
            font-size: 16px;
        }
        .left{
            float: none;
        }
        .right{
            float: none;
        }
        .item{
            width: 100%;
            margin-bottom: 30px;
            box-sizing: border-box;
            padding: 10px;
            border-radius:10px;
        }
        .item img{
            width: 100%;
            height: auto;
            border-radius:10px;
        }
    }
    @media screen and (max-width: 480px)
    {
        .portfolio{
            padding: 0 25px;
            margin: 0 auto;
            max-width: 1140px;
            box-sizing: border-box;
            color: #fff;
            font-size: 16px;
        }
        .left{
            float: none;
        }
        .right{
            float: none;
        }
        .item{
            width: 100%;
            
            margin-bottom: 30px;
            box-sizing: border-box;
            padding: 10px;
            border-radius:10px;
        }
        .item img{
            width: 100%;
            height: auto;
            border-radius:10px;
        }
        .pf_title{
            text-align: center;
            font-size: 25px;
            font-weight: bold;
        }
    }
    @media screen and (max-width: 450px){
        .link_area{
            display:flex;
            flex-direction:column;
            margin-top: 10px;
        }
        .icon_area{
            display:flex;
            margin-top: 15px;
            justify-content: center;
        }
    }
`

function Portfolio(){

    const imgArr = [Pf1,Pf2,Pf3,Pf4,Pf5];
    const nameArr = ["BookSearch","MovieSearch","ShoppingMall","WeatherInfo","MyProfile"]
    const color = useSelector(state => state.color);

    const pfList = imgArr.map((val,idx)=>{
        return(
            <li key={idx} className={idx%2 === 0 ? "item left" : "item right"}>
                <img src={val} alt="img"/>
                <div className="link_area">
                    <div className="pf_title">{nameArr[idx]}</div>
                    <div className="icon_area">
                        <div className="icon">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                        </div>
                        <div className="icon_center">
                            <FontAwesomeIcon icon={faHome} size="2x"/>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFileAlt} size="2x"/>
                        </div>
                    </div>
                </div>
            </li>
        )
    })

    return(
        <Content background={color.bg2} color={color.font}>
            <div className="portfolio">
                <ul>
                    {pfList}
                </ul>
            </div>
        </Content>
    )
}

export default Portfolio;