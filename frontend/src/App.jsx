import React from "react";
import Button from "@mui/material/Button";
import ThemeProvider from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Button variant="outlined">PartyPlace</Button>
    </ThemeProvider>
  );
}

export default App;
