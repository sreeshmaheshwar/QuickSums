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
    padding: 0 20px;
    margin: 0;
    font-family: "Abel", sans-serif;
  }

  button {
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
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    padding-top: 20px;
    width: 150px;
    height: 150px;
  }

  .quizName {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 64px;
    padding-bottom: 50px;
    padding-top: 0px;
  }

  .endingMessage {
    padding-bottom: 50px;
  }

  .question-statistics {
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 20px;
    font-style: italic;
    color: #96a0b0;
  }

  .question {
    font-weight: bold;
    padding-bottom: 60px;
    font-size: 75px;
  }

  .userInputBox {
    color: #444545;
    caret-color: #696c6d;
    border: none;
    appearance: none;
    background: #cacaca;
    font-size: 25px;
    padding: 12px;
    border-radius: 10px;
    width: 300px;
    outline: none;
  }

  .userInputBox::placeholder {
    color: #8a8a8a;
  }
`;
