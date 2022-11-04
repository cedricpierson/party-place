import React from "react";
import Details from "./components/Details";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <Details />
    </ThemeProvider>
  );
}

export default App;
