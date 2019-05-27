import React, { Fragment } from "react";

import GlobalStyle from "./styles/index";

import Home from "./pages/Home";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;
