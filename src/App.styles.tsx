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
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        font-family: "Abel", sans-serif;
    }

    input {
        color: #444545;
        caret-color: #696c6d;
        border: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: #cacaca;

        font-size: 25px;
        padding: 12px;
        border-radius: 10px;
        width: 300px;
        outline: none;
    }

    input::placeholder {
        color: #8a8a8a;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-top: 20px;
    width: 150px;
    height: 150px;
  }

  h1 {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 64px;
    margin: 0px;
    padding-bottom: 50px;
    padding-top: 0px;
  }

  .question-statistics {
    font-size: 25px;
    padding-top: 75px;
    padding-bottom: 20px;
    margin: 0px;
    font-style: italic;
    color: #96a0b0;
  }

  .question {
    font-weight: bold;
    padding-bottom: 60px;
    margin: 0px;
    font-size: 75px;
  }

  .start {
    cursor: pointer;
    color: #444545;
    border: none;
    appearance: none;
    background: #aebdcc;
    font-size: 20px;
    padding: 12px;
    border-radius: 10px;
    width: 250px;
    outline: none;
    margin: 0px;
  }
`;
