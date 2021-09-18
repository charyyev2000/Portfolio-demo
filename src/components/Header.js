import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

const HeaderSection = styled.header`
  width: 100vw;
  max-height: 100vh;
  background-image: linear-gradient(45deg, #fff 60%, #162936);
  // padding:100px;
  // padding:clamp(1em, 11.5vw, 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #162936;
  position: relative;
  overflow: hidden;
`;

const TextBg = styled(motion.h1)`
  position: absolute;
  top: -150px;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: clamp(300px, 29vw, 40em);
  letter-spacing: 5px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px black;
  line-height: 1.1;
  opacity: 0.15;
  z-index: 1;
  user-select: none;

  span {
    position: absolute;
    left: -50px;
    // font-size: 300px;
  }
  .charyyev {
    position: absolute;
    bottom: -100px;
  }
`;
const HeaderContent = styled.div`
  width: min(1400px, 80%);
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 4;

  h1 {
    font-size: clamp(40px, 8vw, 5em);
    letter-spacing: 4px;
    margin-bottom: 10px;
    @media screen and (max-width: 600px) {
      letter-spacing: 2px;
    }
  }
`;
const HeaderText = styled.div`
  display: flex;
  // align-items:center;
  z-index: 4;

  h2 {
    margin-right: 50px;
    //font-size:clamp(40px, 8vw, 5em);
    font-size: clamp(30px, 5vw, 3em);
    z-index: 5;
    font-weight: 400;
    display: block;
    // white-space:nowrap;

    // span {
    //   color:#fff;
    // }

    @media screen and (max-width: 600px) {
      display: grid;
      // flex-direction:column;
      grid-template-rows: 1fr;
    }
  }
`;

const ArrowForwards = styled(MdArrowForward)`
  margin-left: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 20px;
`;

const Animation = {
  Myrat: {
    x: "-40vw",
    transition: {
      yoyo: Infinity,
      duration: 25,
      ease: "linear"
    }
  },
  Charyyev: {
    x: "50vw",
    transition: {
      yoyo: Infinity,
      duration: 40,
      ease: "linear"
    }
  }
};

function Header() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeaderSection id="header">
      <TextBg variants={Animation} animate="Charyyev">
        <motion.span variants={Animation} animate="Myrat">
          Myrat
        </motion.span>
        <br />
        <span className="charyyev">Charyyev</span>
      </TextBg>
      <HeaderContent>
        <h1>
          Myrat
          <br /> Charyyev
        </h1>
        <HeaderText>
          <h2>
            <span>Full Stack</span> Developer
          </h2>
          <Button
            style={{ marginTop: "15px" }}
            smooth
            to="#projects"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Go on {hover ? <MdArrowForward /> : <MdKeyboardArrowRight />}
          </Button>
        </HeaderText>
      </HeaderContent>
    </HeaderSection>
  );
}

export default Header;
