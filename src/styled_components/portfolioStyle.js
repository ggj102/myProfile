import styled from 'styled-components';

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

function Contents({children, ...rest}){
    return <Content {...rest}>{children}</Content>;
}


export default Contents;