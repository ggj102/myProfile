import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Content = styled.div`
    a:link{text-decoration: none; color:${(props)=> props.color};}
    a:visited{text-decoration: none; color:${(props)=> props.color};}
    a:active{text-decoration: none; color:${(props)=> props.color};}
    a:hover{text-decoration: none; color:${(props)=> props.color};}
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
    const color = useSelector(state => state.color);
    const [addressData,setAddressData] = useState([]);
    useEffect(() => {
        axios.get("/address.json").then((response)=>{
            setAddressData(response.data);
        })
    });
    
    const pfList = addressData.map((val,idx)=>{
        return(
            <li key={idx} className={idx%2 === 0 ? "item left" : "item right"}>
                <a href={val.web} target="_blank"><img src={val.img} alt="img" title="해당 페이지로 이동"/></a>
                <div className="link_area">
                    <div className="pf_title">{val.name}</div>
                    <div className="icon_area">
                        <div className="icon">
                            <a href={val.git} target="_blank" title="github로 이동">
                                <FontAwesomeIcon icon={faGithubSquare} size="2x"/>
                            </a> 
                        </div>
                        <div className="icon_center">
                            <a href={val.web} target="_blank" title="해당 페이지로 이동">
                                <FontAwesomeIcon icon={faHome} size="2x"/>
                            </a> 
                        </div>
                        <div className="icon">
                            <a href={val.notion} target="_blank" title="명세서 페이지로 이동">
                                <FontAwesomeIcon icon={faFileAlt} size="2x"/>
                            </a> 
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