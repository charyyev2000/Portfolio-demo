import React from "react";
import styled, { css } from "styled-components/macro";
// install react-scroll
import { HashLink as Link } from "react-router-hash-link";
// install npm install react-icons --save
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { GoTools } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = styled(motion.nav)`
  position: fixed;
  display: flex;
  // top: 0;
  bottom: 2%;
  // left: 50%;
  // right: 50%;
  transform: translate(calc(50vw - 50%));
  background: rgba(255, 255, 255, 0.3);
  // background: transparent;
  box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.4);
  // filter: blur(0.5px);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  padding: 20px;
  z-index: 80;
  // width: max-content;

  // &:hover {
  //   transform: translateY(-20px);
  // }
`;

const NavLink = css`
  color: #000;
  font-size: 30px;
  z-index: 80;
  // filter: blur(0px);
  cursor: pointer;
`;

const HomeLogo = styled(FaHome)`
  ${NavLink}
`;

const ProjectsLogo = styled(AiFillProject)`
  ${NavLink}
  margin-left:30px;
  transform: rotate(-90deg);
`;
const SkillsLogo = styled(GoTools)`
  ${NavLink}
  margin-left:30px;
  margin-right: 15px;
`;
const Github = styled(AiFillGithub)`
  ${NavLink} // border-left: 1px solid black;
  margin-left:15px
`;
const Linkedin = styled(AiFillLinkedin)`
  ${NavLink};
  margin-left: 15px;
`;
function Nav() {
  return (
    <Navbar>
      <Link smooth to="/#header" title="Home">
        <HomeLogo />
      </Link>
      <Link smooth to="/#projects" title="Projects">
        <ProjectsLogo />
      </Link>
      <Link smooth to="/#skills" title="Skills">
        <SkillsLogo />
      </Link>
      <hr />
      <a href="https://github.com/charyyev2000" title="Github" target="_blank">
        <Github />
      </a>
      <a
        href="https://linkedin.com/in/myrat-charyyev"
        title="LinkedIn"
        target="_blank"
      >
        <Linkedin />
      </a>
    </Navbar>
  );
}
export default Nav;
