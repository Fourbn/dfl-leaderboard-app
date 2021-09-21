import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sluggify from "../helpers/sluggify";

const queensPhotoDirectory = require.context(
  "../assets/promo-photos",
  false,
  /.jpg$/
);

const QueenProfile = ({ sheetsData, match }) => {
  const [correctPath, setCorrectPath] = useState(false);
  const [matchingQueenData, setMatchingQueenData] = useState({});
  const listOfPhotos = queensPhotoDirectory.keys();

  useEffect(() => {
    const foundMatch = sheetsData.find(
      (queenObject) => sluggify(queenObject.queen) === match.params.queen
    );
    // reset the correctPath state in case a user uses the browser back button to go to an invalid queen page
    setCorrectPath(false);
    if (foundMatch) {
      setCorrectPath(true);
      setMatchingQueenData(foundMatch);
    }
  }, [sheetsData, match.params]);

  return (
    <section className="queenProfile wrapper">
      {correctPath ? (
        <>
          {listOfPhotos.includes(`./${match.params.queen}.jpg`) && (
            <div className="photoWrapper">
              <img
                src={
                  queensPhotoDirectory(`./${match.params.queen}.jpg`).default
                }
                alt=""
              />
            </div>
          )}
          <div className="statsTables">
            <h2>{matchingQueenData.queen}</h2>
            <h3>Stats</h3>
            <table>
              <thead>
                <tr>
                  <th>SAFE</th>
                  <th>LSFYL</th>
                  <th>MINI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{matchingQueenData.safe}</td>
                  <td>{matchingQueenData.lsfyl}</td>
                  <td>{matchingQueenData.mini}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>TOP</th>
                  <th>MAXI</th>
                  <th>BTM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{matchingQueenData.top}</td>
                  <td>{matchingQueenData.maxi}</td>
                  <td>{matchingQueenData.btm}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>ELIM</th>
                  <th>WINNER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{matchingQueenData.elim}</td>
                  <td>{matchingQueenData.winner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h2>Not Today, Satan!</h2>
          <p className="errorMessage">
            I can't seem to find the queen you're looking for!{" "}
            <span>What about one of these ladies?</span>
          </p>
          <ul className="queenLinks">
            {sheetsData.map((queenObject, index) => (
              <li key={`${sluggify(queenObject.queen) + index}`}>
                <Link to={`/statscast/${sluggify(queenObject.queen)}`}>
                  {queenObject.queen}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default QueenProfile;
