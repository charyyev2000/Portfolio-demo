import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHtml5 as HTML } from "react-icons/fa";
import { FaCss3Alt as CSS } from "react-icons/fa";
import { IoLogoJavascript as JS } from "react-icons/io";
import { FaSass as SASS } from "react-icons/fa";
import { FaReact as REACT } from "react-icons/fa";
import { FaGitAlt as GIT } from "react-icons/fa";
import { FaBootstrap as Bootstrap } from "react-icons/fa";

const SkillsSection = styled.section`
  max-height: 100vh;
  width: calc(100vw + 10px);
  padding: 70px 70px;
  position: relative;
  background: #162936;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  // gap: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .title {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-size: 50px;
    top: 0;
    left: 70px;
    color: #fff;
    z-index: 2;
  }
  @media screen and (max-width: 1000px) {
    width: 200vw;
  }
  @media screen and (max-width: 500px) {
    width: 300vw;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 800px) {
  }
`;

const AboutContainer = styled.div`
  // height: min(350px, 90vh);
  min-height: 350px;
  width: min(42vw, 90vw);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 40px;

  p {
    // font-size: 20px;
    font-size: clamp(20px, 3vw, 1em);
    font-weight: 500;
    // padding-top: 40px;
    line-height: 1.5;
    padding-top: 15px;
  }

  @media screen and (max-width: 800px) {
    width: 600px;
    height: 350px;
  }
  @media screen and (max-width: 500px) {
    min-width: 600px;
    height: 350px;
  }
`;
const SkillsContainer = styled.div`
  // height: min(350px, 90vh);
  min-height: 350px;
  width: min(42vw, 90vw);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  padding: 40px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      padding: 15px;
      margin: 10px;
      background: gray;
      // font-size: 60px;
      font-size: clamp(60px, 3vw, 1em);
      border-radius: 5px;
      text-transform: uppercase;
      // color: #162936;
    }
  }

  @media screen and (max-width: 800px) {
    width: 600px;
    height: 350px;
  }
  @media screen and (max-width: 500px) {
    min-width: 600px;
    height: 350px;
  }
`;

const TextBg = styled(motion.h1)`
  position: absolute;
  top: -150px;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: clamp(200px, 29vw, 40em);
  letter-spacing: 5px;
  -webkit-text-fill-color: #1b4f72;
  -webkit-text-stroke: 1px black;
  line-height: 1.1;
  opacity: 0.15;
  z-index: 1;
  user-select: none;

  h1 {
    position: absolute;
    left: -50px;
    font-size: clamp(200px, 29vw, 40em);
  }
  h2 {
    position: absolute;
    bottom: -100px;
    font-size: clamp(150px, 29vw, 40em);
  }
`;

const Animation = {
  h1: {
    x: "-40vw",
    transition: {
      yoyo: Infinity,
      duration: 25,
      ease: "linear"
    }
  },
  h2: {
    x: "50vw",
    transition: {
      yoyo: Infinity,
      duration: 40,
      ease: "linear"
    }
  }
};
function Skills() {
  return (
    <SkillsSection id="skills">
      <h1 className="title">About / Skills</h1>
      <TextBg>
        <motion.h1 variants={Animation} animate="h1">
          About
        </motion.h1>
        <motion.h2 variants={Animation} animate="h2">
          Skills
        </motion.h2>
      </TextBg>
      <Container>
        <AboutContainer>
          <p>
            {" "}
            Hi, My name is Myrat Charyyev and I'm passionate Front End Developer
            using web technologies to build amazing products and focusing on
            solving problems for different niches and different industries using
            the power of technology.{" "}
          </p>
          <p>
            I will love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me.{" "}
          </p>
        </AboutContainer>
        <SkillsContainer>
          <ul>
            <li>
              <HTML />
            </li>
            <li>
              <CSS />
            </li>
            <li>
              <JS />
            </li>
            <li>
              <SASS />
            </li>
            <li>
              <GIT />
            </li>
            <li>
              <REACT />
            </li>
            <li>
              <Bootstrap />
            </li>
          </ul>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
}

export default Skills;
