import React, { useState, useRef } from "react";
// import { FaSlideshare } from "react-icons/fa";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ProjectsData } from "../data/ProjectsData";
import { Link } from "react-router-dom";

const ProjectSection = styled.section`
  max-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
  gap: 30px;
  padding: 70px 70px;
  position: relative;
  z-index: 4;

  .title {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-size: 50px;
    top: 0;
    left: 70px;
    color: #162936;
  }
`;

const Container = styled(motion.div)`
  width: min(600px, 90vw);
  height: min(300px, 90vh);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  position: relative;
  // z-index: 99;
  opacity: 1;
  display: flex;
`;
const LeftSection = styled.div`
  min-width: min(240px, 40vw);
  max-width: min(240px, 40vw);
  height: 100%;
  // border-right: 1px solid black;
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 20px;
    text-align: center;
    // margin-bottom: 15px;
    margin: 5px auto 10px auto;
  }
  li {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  p {
    position: absolute;
    font-size: 12px;
    font-style: italic;
    bottom: 80px;
    opacity: 0.7;
  }

  div {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;

    @media screen and (max-width: 400px) {
      display: block;
      flex-direction: column;
    }
  }
  .button {
    width: min(90px, 16vw);
    font-size: clamp(0.5em, 3vw, 1em);
    // font-size:clamp(40px, 4vw, 5em);
    color: #fff;
    text-decoration: none;
    background: #162936;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 8px 14px;
    border-radius: 10px;
    width: 90px;
    height: min-content;

    @media screen and (max-width: 400px) {
      width: 100%;

      &:nth-child(1) {
        margin-bottom: 10px;
      }
    }
  }
`;

const RightSection = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    // width: 100%;
    object-fit: cover;
  }
`;

function Projects() {
  return (
    <ProjectSection id="projects">
      <h1 className="title">Projects</h1>
      {ProjectsData.map((item) => {
        return (
          <Container>
            <LeftSection>
              <div className="content">
                <h1>{item.header}</h1>
                <ul>
                  {/* {props.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))} */}
                  <li>{item.content}</li>
                  <li>{item.contentTwo}</li>
                  {item.contentThree ? <li>{item.contentThree}</li> : ""}
                  {item.contentFour ? <li>{item.contentFour}</li> : ""}
                  {item.contentFive ? <li>{item.contentFive}</li> : ""}
                </ul>
                <div className="comment">
                  <p>/* {item.comment} */</p>
                </div>
              </div>
              <div>
                <a
                  className="button"
                  href={`${item.codePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  see code
                </a>
                <a
                  className="button"
                  href={`${item.livePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  see live
                </a>
              </div>
            </LeftSection>
            <RightSection>
              <img src={item.image} />
            </RightSection>
          </Container>
        );
      })}
    </ProjectSection>
  );
}

export default Projects;
