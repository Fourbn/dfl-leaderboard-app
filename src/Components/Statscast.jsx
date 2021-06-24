import React from "react";
import { Link } from "react-router-dom";
import sluggify from "../helpers/sluggify";

const queensPhotoDirectory = require.context("../assets/promo-photos", false, /.png$/);

const Statscast = ({ sheetsData }) => {
  const listOfPhotos = queensPhotoDirectory.keys();
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
        Curious how your queens are doing?
        <span>Click the Queen to see their individual stats.</span>
      </p>
      <ul className="queensIndex">
        {sortedQueens.map((queen, index) => (
          <li key={sluggify(queen.Queen) + index}>
            <Link to={`/statscast/${sluggify(queen.Queen)}`}>
              {listOfPhotos.includes(`./${sluggify(queen.Queen)}.png`) && (
                <div className="photoWrapper">
                  <img
                    src={queensPhotoDirectory(`./${sluggify(queen.Queen)}.png`).default}
                    alt=""
                  />
                </div>
              )}
              {queen.Queen}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statscast;
