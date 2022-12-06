import styled from "styled-components";

export const App = styled.div`
  .header {
    background-color: ${(props) => props.backgroud};
    width: 100%;
    position: fixed;
    z-index: 2;
  }
  .menu {
    max-width: 1140px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 85px;
  }
  .menu_title {
    font-size: 30px;
    color: #0bceaf;
    font-weight: bold;
    margin-top: 18px;
    float: left;
  }
  .tab_area {
    color: ${(props) => props.font};
    display: flex;
    float: right;
  }
  .tab {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin: 25px;
    margin-right: 0;
  }
  .tab_focus {
    border-bottom: 2px solid ${(props) => props.font};
  }
  .toggle {
    position: relative;
    display: inline-block;
    margin: 25px;
    margin-right: 0;
  }
  input {
    height: 25px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 44px;
  }
  .normal label {
    background: #af4c4c;
    border: 0.5px solid rgba(117, 117, 117, 0.31);
    box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.2),
      0 -3px 4px rgba(0, 0, 0, 0.15);
  }
  #normal:checked + label:before {
    left: 23px;
    content: "";
    position: absolute;
    background-color: #fff;
  }
  #normal:checked + label {
    background: #000;
  }
  .normal label:before {
    border: none;
    width: 2.5em;
    height: 2.5em;
    box-shadow: inset 0.5px -1px 1px rgba(0, 0, 0, 0.35);
    background: #fff;
    transform: rotate(-25deg);
    content: "";
    position: absolute;
  }
  .normal label:after {
    content: "";
    position: absolute;
    background: transparent;
    height: calc(100% + 8px);
    border-radius: 30px;
    top: -5px;
    width: calc(100% + 8px);
    left: -4px;
    z-index: 0;
    box-shadow: inset 0px 2px 4px -2px rgba(0, 0, 0, 0.2),
      0px 1px 2px 0px rgba(151, 151, 151, 0.2);
  }
  label.toggle-item {
    width: 50px;
    background: #fff;
    height: 27px;
    display: inline-block;
    border-radius: 50px;
    position: relative;
    transition: all 0.3s ease;
    transform-origin: 20% center;
    cursor: pointer;
  }
  label.toggle-item:before {
    display: block;
    transition: all 0.2s ease;
    width: 25px;
    height: 25px;
    top: -1px;
    left: -2px;
    border-radius: 2em;
    border: 2px solid #88cf8f;
    transition: 0.3s ease;
    content: "";
    position: absolute;
    background-color: #000;
  }
  @media screen and (min-width: 481px) and (max-width: 1024px) {
    .menu {
      max-width: 1140px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 25px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 850px) {
    .component {
      padding-top: 150px;
    }
  }
  @media screen and (max-width: 480px) {
    .component {
      padding-top: 150px;
    }
    .menu {
      max-width: 1140px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 440px) {
    .component {
      padding-top: 200px;
    }
    .menu {
      max-width: 1140px;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0 10px;
    }
    .menu_title {
      font-size: 30px;
      color: #0bceaf;
      font-weight: bold;
      margin-top: 18px;
      float: none;
      text-align: center;
    }
    .tab_area {
      justify-content: flex-end;
    }
  }
`;
