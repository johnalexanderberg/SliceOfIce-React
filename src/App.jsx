import React from "react";
import { GlobalStyle } from "./styles";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
