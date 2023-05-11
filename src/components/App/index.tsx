import React from "react";
import "../../translate/i18n";
import Container from "../common/templates/Container";
import Courses from "../Courses/Courses";
import HardSkills from "../HardSkills";
import Header from "../Header";
import Main from "../Main";
import SoftSkills from "../SoftSkills";
import { Element } from "react-scroll";
import styles from "./app.module.scss";
import Footer from "../Footer";
import Projects from "../Projects";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Element name="main">
          <Main />
        </Element>
        <Element name="hard_skills">
          <HardSkills />
        </Element>
        <Element name="soft_skills">
          <SoftSkills />
        </Element>
        <Element name="courses">
          <Courses />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default App;
