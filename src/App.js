import React from "react";
import Header from "./components/Header";
import Router from "./components/Router";
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import { BrowserRouter } from "react-router-dom";
import './App.css'

function App() {
  return (
    <ThemeProvider theme={preset}>
    <div className="App">
      <BrowserRouter>
        <title>Scan all the things!!</title>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
      </ThemeProvider>
  );
}

export default App;
