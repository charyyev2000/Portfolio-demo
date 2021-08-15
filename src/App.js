import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
// import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { ProjectsData } from "./data/ProjectsData";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch />
        <Route exact path="/home" component={Header}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Header />
        <Projects
          slides={ProjectsData}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Skills />
      </BrowserRouter>
    </>
  );
}

export default App;
