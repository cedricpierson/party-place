import React from "react";
import "./App.css";
import ThemeProvider from "./theme";
import Details from "./components/Details";

function App() {
  return (
    <ThemeProvider>
      <Details />
    </ThemeProvider>
  );
}

export default App;
