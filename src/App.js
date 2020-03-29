import React from 'react';
import {Container} from "@material-ui/core"

import TopBar from "./components/TopBar/TopBar";
import Content from "./components/Content/Content";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Container>
        <Content />
      </Container>
    </React.Fragment>
  );
}

export default App;
