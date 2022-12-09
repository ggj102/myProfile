import styled from "styled-components";

const Content = styled.div`
  a:link {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  a:visited {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  a:active {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  a:hover {
    text-decoration: none;
    color: ${(props) => props.color};
  }
  .point_text {
    color: #a97afd;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    word-break: break-all;
  }
  .profile {
    padding: 0 85px;
    margin: 0 auto;
    max-width: 1140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
  }
  .intro_box {
    display: flex;
    /* height: 100vh; */
    justify-content: space-between;
    align-items: center;

    padding: 150px 0;
  }
  .wish {
    color: #2196f3;
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .name {
    color: #a97afd;
    font-weight: bold;
    font-size: 60px;
  }
  .wish_text {
    margin: 10px 0;
  }
  .text {
    font-size: 25px;
    color: ${(props) => props.color};
  }
  .name_text {
    margin-bottom: 50px;
  }
  .contact_git {
    text-align: left;
  }
  .email {
    margin-bottom: 10px;
    color: ${(props) => props.color};
  }
  .git {
    line-height: 30px;
    color: ${(props) => props.color};
  }
  .address {
    margin-left: 10px;
  }
  .me {
    border: 20px solid ${(props) => props.out};
    height: 340px;
    width: 340px;
    border-radius: 50%;
  }
  .me img {
    width: 300px;
    height: 300px;
    border: 20px solid ${(props) => props.in};
    margin: 0 auto;
    border-radius: 50%;
    vertical-align: top;
  }
  .title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
    color: ${(props) => props.color};
  }

  .accordion_btn {
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);

    .accordion_icon {
      color: #a97afd;
      margin-left: 10px;
    }
  }

  .display_none {
    display: none;
  }

  .profile_content {
    margin-bottom: 50px;
  }

  .about_me_text {
    margin: 20px 0;
    font-size: 16px;
    color: ${(props) => props.color};

    span {
      font-weight: bold;
    }
    .point_orange {
      color: #ffa500;
    }
    .point_purple {
      color: #a97afd;
    }
    .point_blue {
      color: #2196f3;
    }
  }

  .info {
    border: 1px solid ${(props) => props.border};
    background-color: ${(props) => props.background};
    border-radius: 4px;
    padding: 15px 30px;
    box-sizing: border-box;
    line-height: 25px;

    .point_text {
      font-weight: bold;
      font-size: 20px;
    }

    .CareerDescription_content {
      padding: 20px 0;
      .content_title {
        font-size: 25px;
        font-weight: bold;
        color: #0bceaf;
      }
    }

    .content_list {
      margin-top: 20px;
      color: ${(props) => props.color};

      li {
        margin-bottom: 20px;
      }

      .sub_list {
        margin-top: 5px;
        margin-bottom: 20px;
        padding-left: 20px;
        .point_text {
          color: #ffa500;
          font-weight: bold;
          font-size: 16px;
        }
      }

      .explan_list {
        list-style: disc;
        padding-left: 30px;

        li {
          margin-bottom: 0;
        }
      }
    }
  }
  .date {
    color: ${(props) => props.color};
  }

  .info_title {
    color: #0bceaf;
    padding: 5px 0 15px 0;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    .profile {
      padding: 0 25px;
      margin: 0 auto;
      max-width: 1140px;
      box-sizing: border-box;
      color: #fff;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    .intro_box {
      display: flex;
      height: auto;
      flex-direction: column;
      align-items: center;
      margin-bottom: 80px;
    }
    .intro {
      order: 1;
    }
    .me {
      order: 0;
      height: 340px;
      width: 340px;
      border-radius: 50%;
      position: relative;
      bottom: 40px;
      margin: 0 auto;
    }
    .br {
      display: none;
    }
    .wish_text {
      margin: 10px 0;
      text-align: center;
    }
    .name_text {
      margin-bottom: 50px;
      text-align: center;
    }
    .contact_git {
      display: block;
      text-align: center;
      margin-bottom: 0;
    }
    .title {
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .profile {
      padding: 10px 10px;
      margin: 0 auto;
      max-width: 1140px;
      box-sizing: border-box;
      color: #fff;
      font-size: 16px;
    }
    .intro_box {
      display: flex;
      height: auto;
      flex-direction: column;
      align-items: center;
      margin-bottom: 80px;
    }
    .intro {
      order: 1;
    }
    .me {
      order: 0;
      height: auto;
      width: 100%;
      border-radius: 50%;
      position: relative;
      bottom: 40px;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .me img {
      box-sizing: border-box;
      height: auto;
      width: 100%;
    }
    .br {
      display: none;
    }
    .wish_text {
      margin: 10px 0;
      text-align: center;
    }
    .name_text {
      margin-bottom: 50px;
      text-align: center;
    }
    .contact_git {
      display: block;
      text-align: center;
      margin-bottom: 0;
    }
    .title {
      text-align: center;
    }

    .info {
      border-radius: 4px;
      padding: 15px 30px;
      box-sizing: border-box;
      line-height: 25px;
      margin-bottom: 20px;
    }
  }
`;

export default function ProfileContents({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
}
