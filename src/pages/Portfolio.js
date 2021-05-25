import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import  Contents from '../styled_components/portfolioStyle';


function Portfolio(){
    const color = useSelector(state => state.color);
    const [addressData,setAddressData] = useState([]);
    useEffect(() => {
        axios.get("/address.json").then((response)=>{
            setAddressData(response.data);
        })
    },[]);
    
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
        <Contents background={color.bg2} color={color.font}>
            <div className="portfolio">
                <ul>
                    {pfList}
                </ul>
            </div>
        </Contents>
    )
}

export default Portfolio;