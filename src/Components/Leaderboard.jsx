import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import sluggify from "../helpers/sluggify";

const Leaderboard = ({ sheetsData }) => {
  const leaderboard = [...sheetsData];

  const sortedLeaderboard = leaderboard.sort((a, b) => {
    if (parseInt(b["Total Points"]) > parseInt(a["Total Points"])) {
      return 1;
    }
    return 0;
  });

  const tableHeadings = ["rank", "racer", "points", "queens"];

  return (
    <section className="leaderboard wrapper">
      <h2>The Leaderboard</h2>
      <table className="desktopTable">
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
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="rankData" rowSpan="2">
                    {user.Ranking}
                  </td>
                  <td className="racerData" rowSpan="2">
                    {user.Racer}
                  </td>
                  <td className="pointsData" rowSpan="2">
                    {user["Total Points"]}
                  </td>
                  <td className="firstRowQueens">
                    <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                      {user["Queen Supreme"]}
                    </Link>
                  </td>
                  <td className="firstRowQueens">
                    <Link to={`/statscast/${sluggify(user["Queen 2"])}`}>
                      {user["Queen 2"]}
                    </Link>
                  </td>
                </tr>
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="secondRowQueens">
                    <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                      {user["Queen 3"]}
                    </Link>
                  </td>
                  <td className="secondRowQueens">
                    <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                      {user["Queen 4"]}
                    </Link>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <table className="mobileTable">
        <colgroup>
          {[1, 2, 3, 4].map((num) => (
            <col key={num} />
          ))}
        </colgroup>
        <thead className="tableHeadings">
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index} className={`mobileHeading ${heading}MobileHeading`}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">
          {sortedLeaderboard.map((user, index) => (
            <Fragment key={index}>
              <tr className={index % 2 === 0 ? 'rowGroupA' : 'rowGroupB'}>
                <td className="rankData" rowSpan="4">
                  {user.Ranking}
                </td>
                <td className="racerData" rowSpan="4">
                  {user.Racer}
                </td>
                <td className="pointsData" rowSpan="4">
                  {user["Total Points"]}
                </td>
                <td className="queensRow queensRowTop">
                  <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                    {user["Queen Supreme"]}
                  </Link>
                </td>
              </tr>
              <tr className={index % 2 === 0 ? 'rowGroupA' : 'rowGroupB'}>
                <td className="queensRow">
                  <Link to={`/statscast/${sluggify(user["Queen 2"])}`}>
                    {user["Queen 2"]}
                  </Link>
                </td>
              </tr>
              <tr className={index % 2 === 0 ? 'rowGroupA' : 'rowGroupB'}>
                <td className="queensRow">
                  <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                    {user["Queen 3"]}
                  </Link>
                </td>
              </tr>
              <tr className={index % 2 === 0 ? 'rowGroupA' : 'rowGroupB'}>
                <td className="queensRow queensRowBottom">
                  <Link to={`/statscast/${sluggify(user["Queen Supreme"])}`}>
                    {user["Queen 4"]}
                  </Link>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
