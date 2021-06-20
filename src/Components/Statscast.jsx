import React from "react";
import { Link } from "react-router-dom";
import sluggify from "../helpers/sluggify";

const Statscast = ({ sheetsData }) => {
  const allQueensStats = [...sheetsData];

  const sortedQueens = allQueensStats.sort((a, b) => {
    const queenA = a.Queen.toLowerCase();
    const queenB = b.Queen.toLowerCase();

    if (queenA < queenB) {
      return -1;
    }
    if (queenA > queenB) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="statscast wrapper">
      <h2>Statscast</h2>
      <p>
        Curious about how the queens are doing? Click the link to see an
        individual Queen's stats.
      </p>
      <ul>
        {sortedQueens.map((queen) => (
          <li>
            <Link to={`/queens/${sluggify(queen.Queen)}`} >{queen.Queen}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statscast;
