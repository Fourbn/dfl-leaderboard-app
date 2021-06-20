import React from "react";

const Queens = ({ sheetsData }) => {
  const queens = [...sheetsData];

  const sortedQueens = queens.sort((a, b) => {
    const numA = parseInt(a["Total Points"]);
    const numB = parseInt(b["Total Points"]);

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
              <td>{queen.Queen}</td>
              <td>{queen["Total Points"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Queens;
