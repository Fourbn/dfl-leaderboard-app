import React from "react";
import { Link } from "react-router-dom";
import sluggify from "../helpers/sluggify";

const queensPhotoDirectory = require.context(
  "../assets/promo-photos",
  false,
  /.jpg$/
);

const Statscast = ({ sheetsData }) => {
  const listOfPhotos = queensPhotoDirectory.keys();
  const allQueensStats = [...sheetsData];

  const sortedQueens = allQueensStats.sort((a, b) => {
    const queenA = a.queen.toLowerCase();
    const queenB = b.queen.toLowerCase();

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
        {sortedQueens.map((queenObject, index) => (
          <li key={sluggify(queenObject.queen) + index}>
            <Link to={`/statscast/${sluggify(queenObject.queen)}`}>
              {listOfPhotos.includes(
                `./${sluggify(queenObject.queen)}.jpg`
              ) && (
                <div className="photoWrapper">
                  <img
                    src={
                      queensPhotoDirectory(
                        `./${sluggify(queenObject.queen)}.jpg`
                      ).default
                    }
                    alt=""
                  />
                </div>
                )}
              <div className="text">
                {queenObject.queen}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statscast;
