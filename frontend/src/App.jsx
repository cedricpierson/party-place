import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./theme";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Details from "./components/Details/Details";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
