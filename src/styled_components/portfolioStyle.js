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
  .loading {
    position: relative;
    border: 0;
    width: 80px;
    padding: 0px;
    height: 100vh;
    margin-left: calc(50% - 40px);

    .spin {
      position: absolute;
      top: 50%;
      height: 70px;
      width: 70px;
      color: red;
      border-radius: 50%;
      border: dashed 5px orange;
      animation-name: spin;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
  }

  .portfolio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    padding: 10rem 4rem 6rem 4rem;
    margin: 0 auto;
    max-width: 1140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item {
    box-sizing: border-box;
    padding: 10px;
    background-color: ${(props) => props.background};
    border-radius: 10px;
  }
  .left {
  }
  .right {
  }
  .item img {
    width: 100%;
    height: 194px;
    border-radius: 10px;
  }
  .item::after {
    display: block;
    clear: both;
    content: "";
  }
  .link_area {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
  .icon_area {
    display: flex;
    color: ${(props) => props.color};
  }
  .pf_title {
    font-size: 25px;
    font-weight: bold;
    color: ${(props) => props.color};
  }
  .icon_center {
    margin: 0 10px;
  }
  .explan_list {
    list-style: disc;
    padding-left: 23px;
    color: ${(props) => props.color};
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    .portfolio {
      padding: 0 25px;
      padding-bottom: 50px;
      margin: 0 auto;
      max-width: 1140px;
      box-sizing: border-box;
      color: #fff;
      font-size: 16px;
    }
    .left {
      float: none;
    }
    .right {
      float: none;
    }
    .item {
      width: 100%;
      margin-bottom: 30px;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
    }
    .item img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 670px) {
    .portfolio {
      padding: 0 25px;
      padding-bottom: 50px;
      margin: 0 auto;
      max-width: 1140px;
      box-sizing: border-box;
      color: #fff;
      font-size: 16px;
      grid-template-columns: 1fr;
    }

    .item {
      width: 100%;
      margin-bottom: 30px;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 10px;
    }
    .item img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
    .pf_title {
      text-align: center;
      font-size: 25px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 450px) {
    .link_area {
      display: flex;
      margin: 10px 0;
    }
    .icon_area {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function PortfolioContents({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
}
