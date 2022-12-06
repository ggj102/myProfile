import styled, { createGlobalStyle } from "styled-components";
import { useRouter } from "next/router";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { gDark, gLight } from "../src/store/modules/GlobalData";
import wrapper from "../src/store/modules/configureStore.js";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { App } from "../src/styled_components/globalStyle";
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.backgroud};
    margin: 0;
}
${dom.css()}
`;

function myApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);
  const color = useSelector((state) => state.color);

  const onMode = () => {
    console.log(mode);
    if (mode !== "D") {
      dispatch(gDark());
    } else {
      dispatch(gLight());
    }
  };

  return (
    <>
      <App backgroud={color.bg2} font={color.font}>
        <div className="header">
          <div className="menu">
            <div className="menu_title">
              {router.asPath === "/profile" ? "Profile" : "Portfolio"}
            </div>
            <div className="tab_area">
              <div
                className={
                  router.asPath === "/profile" ? "tab tab_focus" : "tab"
                }
                onClick={() => Router.push("/profile")}
              >
                프로필
              </div>
              <div
                className={
                  router.asPath === "/portfolio" ? "tab tab_focus" : "tab"
                }
                onClick={() => Router.push("/portfolio")}
              >
                포트폴리오
              </div>
              <div className="toggle normal">
                <input id="normal" type="checkbox" onClick={onMode} />
                <label className="toggle-item" htmlFor="normal"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="component">
          <Component {...pageProps} />
        </div>
      </App>
      <GlobalStyle backgroud={color.bg} />
    </>
  );
}

export default wrapper.withRedux(myApp);
