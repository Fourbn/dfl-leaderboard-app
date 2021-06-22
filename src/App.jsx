import React from "react";
import FetchData from "./Components/FetchData";
import GoogleSheetsProvider from "react-db-google-sheets";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/styles.scss";

const App = () => {
  return (
    <Router>
      <GoogleSheetsProvider>
        <FetchData />
      </GoogleSheetsProvider>
    </Router>
  );
};

export default App;
