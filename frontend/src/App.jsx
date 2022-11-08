import React from "react";
import "./App.css";
import ThemeProvider from "./theme";
import Details from "./components/Details/Details";

function App() {
  return (
    <ThemeProvider>
      <Details Country="Great Britain" gentillet="British" alcool1="Gin" />
    </ThemeProvider>
  );
}

export default App;
