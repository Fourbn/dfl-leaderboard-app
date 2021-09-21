import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import sluggify from "../helpers/sluggify";
import { FaCrown, FaMedal } from "react-icons/fa";

const Leaderboard = ({ sheetsData }) => {
  const leaderboard = Array.from(sheetsData);

  const tableHeadings = ["rank", "racer", "points", "queens"];

  const addSuffix = (number) => {
    if (number.toString().endsWith("1") && number !== 11) {
      return `${number}st`;
    }
    if (number.toString().endsWith("2") && number !== 12) {
      return `${number}nd`;
    }
    if (number.toString().endsWith("3") && number !== 13) {
      return `${number}rd`;
    }
    return `${number}th`;
  }

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
          {leaderboard
            .sort(
              (a, b) =>
                parseInt(b.totalPoints) - parseInt(a.totalPoints)
            )
            .map((user, index) => {
              return (
                <Fragment key={index}>
                  <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                    <td className="rankData" rowSpan="2">
                      <span className="rank">
                        {index + 1 <= 3 && (
                          <FaMedal className={`icon icon${index + 1}`} />
                        )}
                        {addSuffix(index + 1)}
                      </span>
                    </td>
                    <td className="racerData" rowSpan="2">
                      {user.racer}
                    </td>
                    <td className="pointsData" rowSpan="2">
                      {user.totalPoints}
                    </td>
                    <td className="firstRowQueens">
                      <Link
                        className="queenSupremeLink"
                        to={`/statscast/${sluggify(user.queenSupreme)}`}
                      >
                        <FaCrown className="icon" /> {user.queenSupreme}
                      </Link>
                    </td>
                    <td className="firstRowQueens">
                      <Link to={`/statscast/${sluggify(user.queen2)}`}>
                        {user.queen2}
                      </Link>
                    </td>
                  </tr>
                  <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                    <td className="secondRowQueens">
                      <Link to={`/statscast/${sluggify(user.queen3)}`}>
                        {user.queen3}
                      </Link>
                    </td>
                    <td className="secondRowQueens">
                      <Link to={`/statscast/${sluggify(user.queen4)}`}>
                        {user.queen4}
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
              <th
                key={index}
                className={`mobileHeading ${heading}MobileHeading`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tableBody">
          {leaderboard
            .sort(
              (a, b) =>
                parseInt(b.totalPoints) - parseInt(a.totalPoints)
            )
            .map((user, index) => (
              <Fragment key={index}>
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="rankData" rowSpan="4">
                    {addSuffix(index + 1)}
                  </td>
                  <td className="racerData" rowSpan="4">
                    {user.racer}
                  </td>
                  <td className="pointsData" rowSpan="4">
                    {user.totalPoints}
                  </td>
                  <td className="queensRow queensRowTop">
                    <Link
                      className="queenSupremeLink"
                      to={`/statscast/${sluggify(user.queenSupreme)}`}
                    >
                      <FaCrown className="icon" /> {user.queenSupreme}
                    </Link>
                  </td>
                </tr>
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="queensRow">
                    <Link to={`/statscast/${sluggify(user.queen2)}`}>
                      {user.queen2}
                    </Link>
                  </td>
                </tr>
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="queensRow">
                    <Link to={`/statscast/${sluggify(user.queen3)}`}>
                      {user.queen3}
                    </Link>
                  </td>
                </tr>
                <tr className={index % 2 === 0 ? "rowGroupA" : "rowGroupB"}>
                  <td className="queensRow queensRowBottom">
                    <Link to={`/statscast/${sluggify(user.queen4)}`}>
                      {user.queen4}
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
