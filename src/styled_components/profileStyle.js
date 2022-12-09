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
    height: 100vh;
    justify-content: space-between;
    align-items: center;
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

  .profile_content {
    margin-bottom: 150px;
  }
  .about_me {
    display: flex;
    justify-content: space-between;
  }
  .about_me img {
    max-width: 400px;
  }
  .about_me_text_content {
    margin-left: 40px;
    line-height: 24px;
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

  .skill_box {
    display: flex;
    justify-content: space-between;
  }
  .skill_title {
    font-weight: bold;
    font-size: 20px;
  }
  .skill {
    padding: 10px 30px;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.border};
    border-radius: 4px;
    background-color: ${(props) => props.background};
    font-size: 15px;
    width: 32%;
  }
  .skill ul {
    margin-top: 20px;
    color: ${(props) => props.color};
  }
  .skill li {
    margin-bottom: 15px;

    span {
      font-weight: bold;
      padding: 3px 5px;
      margin-right: 5px;
      border-radius: 6px;
    }
  }
  .language {
    color: #ffa500;
  }
  .library {
    color: #a97afd;
  }
  .ETC {
    color: #2196f3;
  }

  .skill_language {
    span {
      border: 1px solid #ffa500;
      background-color: #ffa500;
    }
  }

  .skill_library {
    span {
      border: 1px solid #a97afd;
      background-color: #a97afd;
    }
  }

  .skill_ETC {
    span {
      border: 1px solid #2196f3;
      background-color: #2196f3;
    }
  }

  .career {
    /* display: flex; */
    /* justify-content: space-between; */
  }
  .info {
    border: 1px solid ${(props) => props.border};
    background-color: ${(props) => props.background};
    border-radius: 4px;
    padding: 15px 30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    line-height: 25px;
    /* position: relative; */

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

  .tab_wrapper {
    position: sticky;
    top: 0;
    color: #0bceaf;
    border-bottom: 1px solid;
    padding: 5px 0 15px 0;

    button {
      border: 0;
      outline: 0;
      cursor: pointer;
      font-size: 20px;
      padding: 0;
      margin-right: 15px;
    }

    .current_tab {
      color: #0bceaf;
    }

    button :last-child {
      margin-right: 0;
    }
  }

  .book_img img {
    max-width: 100px;
    border: 1px solid #f2f2f2;
  }
  .book_info {
    display: flex;
    margin-top: 30px;
  }
  .book_info ul {
    margin: 0;
    margin-left: 20px;
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
    .about_me {
      display: block;
      text-align: center;
    }
    .about_me_text_content {
      line-height: 24px;
      font-size: 16px;
      margin-left: 0;
    }
    .about_me_text_content .title {
      margin-top: 40px;
    }
    .skill_title {
      font-weight: bold;
      font-size: 20px;
    }
    .skill {
      padding: 5px 20px;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 15px;
    }
    .book_info {
      display: block;
      margin-top: 30px;
    }
    .book_img {
      text-align: center;
      margin-bottom: 15px;
    }
    .book_info ul {
      text-align: center;
      padding: 0;
      margin: 0;
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
    .about_me {
      display: block;
      text-align: center;
    }
    .about_me_text_content {
      line-height: 24px;
      font-size: 16px;
      margin-left: 0;
    }
    .about_me img {
      max-width: 400px;
      width: 100%;
    }
    .about_me_text_content .title {
      margin-top: 40px;
    }
    .skill_box {
      display: flex;
      flex-direction: column;
    }
    .skill_title {
      margin-left: 5px;
      font-weight: bold;
      font-size: 20px;
    }
    .skill {
      padding: 5px;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 15px;
      margin: 0 auto 15px auto;
      width: 80%;
      height: 100%;
      text-align: center;
    }
    .book_info {
      display: block;
      margin-top: 30px;
    }
    .book_img {
      text-align: center;
      margin-bottom: 15px;
    }
    .book_info ul {
      text-align: center;
      padding: 0;
      margin: 0;
    }
    .career_item {
      width: 80%;
      margin: 0 auto;
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
