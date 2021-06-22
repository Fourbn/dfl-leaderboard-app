import React from "react";
import { Route } from "react-router-dom";
import { withGoogleSheets } from "react-db-google-sheets";


import Header from "./Header";
import Footer from "./Footer";
import Leaderboard from "./Leaderboard";
import Queens from "./Queens";
import Statscast from "./Statscast";
import QueenProfile from "./QueenProfile";

// this component just fetches the data and sends it to the different views or whatever, idk the structure of this shit yet
// also will be the component that renders the OOPS I FUCKED UP message in case it oops I fucked ups's

const FetchData = (props) => {
  const { db } = props;
  return (
    <>
      <Header />
      <Route
        exact
        path="/"
        render={() => <Leaderboard sheetsData={db["The Leaderboard"]} />}
      />
      <Route
        path="/queens"
        render={() => <Queens sheetsData={db["Queen Standings"]} />}
      />
      <Route
        exact
        path="/statscast"
        render={() => <Statscast sheetsData={db["Statscast"]} />}
      />
      <Route
        path="/statscast/:queen"
        render={(props) => <QueenProfile {...props} sheetsData={db["Statscast"]} />}
      />
      <Footer />
    </>
  );
};

export default withGoogleSheets("*")(FetchData);
