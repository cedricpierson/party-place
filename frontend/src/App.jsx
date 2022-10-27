import React from "react";
import Details from "./components/Details";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <h1>PartyPlace</h1>
      <Details />
    </ThemeProvider>
  );
}

export default App;
