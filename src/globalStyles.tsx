import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    color: #cacaca;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    justify-content: center;
  }

  * {
    margin: 0;
    font-family: "Abel", sans-serif;
  }

  button {
    cursor: pointer;
    color: #212121;
    border: none;
    appearance: none;
    background: #c1cdd9;
    font-size: 20px;
    padding: 12px;
    border-radius: 10px;
    width: 250px;
    outline: none;
  }
`;

export const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
