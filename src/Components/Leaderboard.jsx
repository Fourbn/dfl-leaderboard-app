import React from "react";

const Leaderboard = ({ sheetsData }) => {
  const leaderboard = [...sheetsData.db["The Leaderboard"]];

  const sortedLeaderboard = leaderboard.sort((a, b) => {
    if (parseInt(b["Total Points"]) > parseInt(a["Total Points"])) {
      return 1;
    }
    return 0;
  });

  const tableHeadings = Object.keys(leaderboard[0]).reverse();

  const reverseOrderObjectValues = (object) => {
    return Object.values(object).reverse();
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((user, index) => {
            return (
              <tr key={index}>
                {reverseOrderObjectValues(user).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
