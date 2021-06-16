import React from "react";
import { withGoogleSheets } from "react-db-google-sheets";
import Header from "./Header";
import Footer from "./Footer";
import Leaderboard from "./Leaderboard";
import Queens from "./Queens";
import Statscast from "./Statscast";

// this component just fetches the data and sends it to the different views or whatever, idk the structure of this shit yet
// also will be the component that renders the OOPS I FUCKED UP message in case it oops I fucked ups's

const FetchData = (props) => {
  return (
    <section>
      <Header />
      <Queens sheetsData={props} />
      <Leaderboard sheetsData={props} />
      <Statscast sheetsData={props} />
      <Footer />
    </section>
  );
};

export default withGoogleSheets("*")(FetchData);
