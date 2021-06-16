import React, { Fragment } from "react";

const Leaderboard = ({ sheetsData }) => {
  const leaderboard = [...sheetsData.db["The Leaderboard"]];

  const sortedLeaderboard = leaderboard.sort((a, b) => {
    if (parseInt(b["Total Points"]) > parseInt(a["Total Points"])) {
      return 1;
    }
    return 0;
  });

  const tableHeadings = ["rank", "racer", "points", "queens"];

  return (
    <section className="leaderboard wrapper">
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col className="queenColumnA" />
          <col className="queenColumnB" />
        </colgroup>
        <thead className="tableHeadings">
          <tr>
            {tableHeadings.map((heading, index) => (
              <th
                key={index}
                className={`heading ${heading}Heading`}
                colSpan={heading === "queens" ? 2 : 1}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">
          {sortedLeaderboard.map((user, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td className="rankData" rowSpan="2">
                    {user.Ranking}
                  </td>
                  <td className="racerData" rowSpan="2">
                    {user.Racer}
                  </td>
                  <td className="pointsData" rowSpan="2">
                    {user["Total Points"]}
                  </td>
                  <td className="firstRowQueens">{user["Queen Supreme"]}</td>
                  <td className="firstRowQueens">{user["Queen 2"]}</td>
                </tr>
                <tr>
                  <td className="secondRowQueens">{user["Queen 3"]}</td>
                  <td className="secondRowQueens">{user["Queen 4"]}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
