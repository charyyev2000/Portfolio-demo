import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
// import GlobalStyle from "./GlobalStyle";

// import Projects from "./components/Projects";

const Body = styled.section`
  width: 100vw;
  height: 100vh;
`;

// install react router dom
ReactDom.render(
  <React.Fragment>
    <Body>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <HorizontalScroll reverseScroll={true}>
        <App />
      </HorizontalScroll>
    </Body>
  </React.Fragment>,
  document.getElementById("root")
);
