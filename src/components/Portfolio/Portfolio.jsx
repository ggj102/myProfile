import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import PortfolioContents from "../../styled_components/portfolioStyle";

export default function Portfolio() {
  const color = useSelector((state) => state.color);
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/portfolioData.json").then((res) => {
      console.log(res.data[0]);
      setPortfolioData(res.data);
    });
  }, []);

  useEffect(() => {
    if (portfolioData.length > 0) setIsLoading(false);
  }, [portfolioData]);

  if (isLoading) {
    return (
      <PortfolioContents background={color.bg2} color={color.font}>
        <div className="loading">
          <div class="spin" />
        </div>
      </PortfolioContents>
    );
  }

  return (
    <PortfolioContents background={color.bg2} color={color.font}>
      <div className="portfolio">
        {portfolioData.map((val, idx) => {
          const { img, name, git, web, notion, explan } = val;

          return (
            <div key={idx} className="item">
              <a href={web} target="_blank">
                <img src={img} alt="img" title="해당 페이지로 이동" />
              </a>
              <div className="link_area">
                <div className="pf_title">{name}</div>
                <div className="icon_area">
                  <div className="icon">
                    <a href={git} target="_blank" title="github로 이동">
                      <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                    </a>
                  </div>
                  <div className="icon_center">
                    <a href={web} target="_blank" title="해당 페이지로 이동">
                      <FontAwesomeIcon icon={faHome} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
              <ul className="explan_list">
                {explan.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </PortfolioContents>
  );
}
