import React from 'react';

const IndianPlayers = () => {
  // Full list of Indian players
  const allPlayers = ["Virat", "Rohit", "Shikhar", "Rahul", "Pant", "Hardik", "Jadeja", "Bumrah", "Shami", "Ashwin", "Chahal"];

  // ES6 Destructuring to extract Odd and Even Team players
  // oddPlayers: indices 0, 2, 4, 6... (Virat, Shikhar, Pant, Jadeja...)
  // evenPlayers: indices 1, 3, 5, 7... (Rohit, Rahul, Hardik, Bumrah...)
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11] = allPlayers;
  const oddTeam = [p1, p3, p5, p7, p9, p11];
  const evenTeam = [p2, p4, p6, p8, p10];

  // ES6 Merge: Declare two arrays and merge them using the Spread operator (...)
  const T20players = ["Suryakumar Yadav", "Ishan Kishan", "Rinku Singh"];
  const RanjiTrophy = ["Sarfaraz Khan", "Yashasvi Jaiswal", "Dhruv Jurel"];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        {oddTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        {evenTeam.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>

      <hr />

      <h2 style={{ color: '#1976d2' }}>Merged Squad (T20 + Ranji Players)</h2>
      <p><em>Merged using the ES6 Spread Operator</em></p>
      <ul>
        {mergedPlayers.map((player, idx) => <li key={idx}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;