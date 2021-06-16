import React from "react";
import FetchData from "./Components/FetchData";
import GoogleSheetsProvider from "react-db-google-sheets";
import "./styles/styles.scss";

const App = () => {
  return (
    <GoogleSheetsProvider>
      <FetchData />
    </GoogleSheetsProvider>
  );
};

export default App;
