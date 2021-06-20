import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sluggify from '../helpers/sluggify';

const QueenProfile = ({ sheetsData, match }) => {
  console.log(match);

  const [correctPath, setCorrectPath] = useState(false);
  const [matchingQueenData, setMatchingQueenData] = useState({});

  useEffect(() => {
    const foundMatch = sheetsData.find((queen) => sluggify(queen.Queen) === match.params.queen)
    // reset the correctPath state in case a user uses the browser back button to go to an invalid queen page
    setCorrectPath(false);
    if (foundMatch) {
      setCorrectPath(true);
      setMatchingQueenData(foundMatch)
    }
  }, [sheetsData, match.params])

  console.log(matchingQueenData);

  return (
    <section className="queenProfile wrapper">
      {correctPath ? (
        <>
          <h2>{matchingQueenData.Queen}</h2>
          <div className="statsTables">
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
                  <td>{matchingQueenData["SAFE"]}</td>
                  <td>{matchingQueenData["LSFYL"]}</td>
                  <td>{matchingQueenData["MINI"]}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>TOP</th>
                  <th>ASSASSIN</th>
                  <th>BTM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{matchingQueenData["TOP"]}</td>
                  <td>{matchingQueenData["ASSASSIN"]}</td>
                  <td>{matchingQueenData["BTM"]}</td>
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
                  <td>{matchingQueenData["ELIM"]}</td>
                  <td>{matchingQueenData["WINNER"]}</td>
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
            {sheetsData.map((queen) => (
              <li>
                <Link to={`/queens/${sluggify(queen.Queen)}`} >{queen.Queen}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default QueenProfile;