import React from "react";
import "./App.css";
import ThemeProvider from "./theme";
import Landing from "./components/Landing";

function App() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
