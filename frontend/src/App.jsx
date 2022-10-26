import React from "react";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>PartyPlace</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
