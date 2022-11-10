import React from "react";
import "./App.css";
import ThemeProvider from "./theme";
import Welcomepage from "./components/Welcomepage";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Welcomepage />
    </ThemeProvider>
  );
}

export default App;
