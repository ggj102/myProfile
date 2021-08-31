import styled from 'styled-components';

const Content = styled.div`
    a:link{text-decoration: none; color:${(props)=> props.color};}
    a:visited{text-decoration: none; color:${(props)=> props.color};}
    a:active{text-decoration: none; color:${(props)=> props.color};}
    a:hover{text-decoration: none; color:${(props)=> props.color};}
    .point_text{
        color: #a97afd;
    }
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
        height: 300px;
        border: 20px solid ${(props)=> props.in};
        margin: 0 auto;
        border-radius: 50%;
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
        margin-left: 20px;
        line-height: 24px;
        font-size: 16px;
        color:${(props)=> props.color}
    }
    .about_me_text .title
    {
        margin-left: 20px;
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

function Contents({children, ...rest}){
    return <Content {...rest}>{children}</Content>;
}


export default Contents;