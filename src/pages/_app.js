import styled, { createGlobalStyle } from 'styled-components';
import {useRouter} from 'next/router' 
import  Router  from 'next/router';
import {useDispatch, useSelector } from 'react-redux';
import {gDark, gLight} from '../store/modules/GlobalData'
import wrapper from '../store/modules/configureStore.js';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props)=> props.backgroud};
        margin: 0;
    }    
`

const App = styled.div`
    .header{
        background-color: ${(props)=> props.backgroud};
        width: 100%;
        position: fixed;
        z-index: 2;
    }
    .menu{
        max-width: 1140px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 85px;
    }
    .menu_title{
        font-size: 30px;
        color: #0bceaf;
        font-weight: bold;
        margin-top: 18px;
        float: left;
    }
    .tab_area{
        color: ${(props)=> props.font};
        display: flex;
        float:right;
    }
    .tab{
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        margin: 25px;
        margin-right: 0;
    }
    .tab_focus{
        border-bottom: 2px solid ${(props)=> props.font};
    }
    .dl_mode{
        color: #fff;
        display: flex;
        font-size: 20px;
        margin: 25px;
        margin-right: 0;
        border: 3px solid #000;
        box-sizing: border-box;
        width: 60px;
        font-weight: bold;
    }
    .dark{
        width: 30px;
        text-align: center;
        line-height: 23px;
        color: #000;
        cursor: pointer;
    }
    .light{
        width: 30px;
        text-align: center;
        cursor: pointer;
        line-height: 23px;
    }
    .mode_focus{
        background-color: #0bceaf;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px){
        .menu{
        max-width: 1140px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 25px;
        }
  
    }
    @media screen and (min-width: 481px) and (max-width: 850px){
        .component{
        padding-top: 150px;
        }
    }
    @media screen and (max-width: 480px){
        .component{
        padding-top: 150px;
        }
        .menu{
        max-width: 1140px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 10px;
        }
    }
    @media screen and (max-width: 440px){
        .component{
        padding-top: 200px;
        }
        .menu{
        max-width: 1140px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0 10px;
        }
        .menu_title{
            font-size: 30px;
            color: #0bceaf;
            font-weight: bold;
            margin-top: 18px;
            float: none;
            text-align: center;
        }
        .tab_area{
            display: flex;
            float:left;
            position:relative;
            width: 100%;
        }
        .dl_mode{
            position:absolute;
            right: 0;
        }
    }
`



function myApp(props){

    const {Component,pageProps} = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const mode = useSelector(state => state.mode);
    const color = useSelector(state => state.color);

    const onDark = () =>{
        dispatch(gDark());
    }
    const onLight = () =>{
        dispatch(gLight());
        gLight();
    }
    
    return(
        <>
            <App backgroud={color.bg2} font ={color.font}>
                <div className="header">
                    <div className="menu">
                        <div className="menu_title">
                            {router.asPath === '/page_Profile' ? "Profile" : "Portfolio"}
                        </div>
                        <div className="tab_area">
                                <div 
                                className = {router.asPath === '/page_Profile' ? "tab tab_focus" : "tab"} 
                                onClick={()=>Router.push('/page_Profile')}>
                                    프로필
                                </div>
                            <div 
                            className = {router.asPath === '/page_Portfolio' ? "tab tab_focus" : "tab"} 
                            onClick={()=>Router.push('/page_Portfolio')}>
                                포트폴리오
                            </div> 
                            <div className="dl_mode">
                                <div className={mode === "D" ? "dark mode_focus" : "dark"} onClick={()=>{onDark()}}>
                                    D
                                </div>
                                <div className={mode === "L" ? "light mode_focus" : "light"} onClick={()=>{onLight()}}>
                                    L
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="component">
                    <Component {...pageProps} />
                </div>
            </App>
            <GlobalStyle backgroud={color.bg}/>
        </>
    )
}


export default wrapper.withRedux(myApp);