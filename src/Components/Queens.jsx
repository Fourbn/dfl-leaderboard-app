import React from "react";
import { Link } from 'react-router-dom';
import sluggify from "../helpers/sluggify";

const Queens = ({ sheetsData }) => {
  const queens = [...sheetsData];

  const sortedQueens = queens.sort((a, b) => {
    const numA = parseInt(a.totalPoints);
    const numB = parseInt(b.totalPoints);

    if (numA < numB) {
      return 1;
    }
    if (numA > numB) {
      return -1;
    }
    return 0;
  });


  return (
    <section className="queens wrapper">
      <h2>Queen Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Queen</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedQueens.map((queen, index) => (
            <tr key={index}>
              <td>
                <Link to={`/statscast/${sluggify(queen.queen)}`}>{queen.queen}</Link>
              </td>
              <td>{queen.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Queens;
