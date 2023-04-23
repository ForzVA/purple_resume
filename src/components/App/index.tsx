import React from "react";
import Container from "../common/templates/Container";
import Header from "../Header";
import Main from "../Main";
import styles from "./app.module.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
    </>
  );
};

export default App;
