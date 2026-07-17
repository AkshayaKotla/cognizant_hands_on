import React from 'react';

const ListofPlayers = () => {
  // 11 players with name and score
  const players = [
    { name: "Virat Kohli", score: 110 },
    { name: "Rohit Sharma", score: 85 },
    { name: "KL Rahul", score: 45 },
    { name: "Shubman Gill", score: 78 },
    { name: "Shreyas Iyer", score: 52 },
    { name: "Hardik Pandya", score: 65 },
    { name: "Ravindra Jadeja", score: 72 },
    { name: "Rishabh Pant", score: 95 },
    { name: "Jasprit Bumrah", score: 12 },
    { name: "Mohammed Shami", score: 8 },
    { name: "Yuzvendra Chahal", score: 4 }
  ];

  // ES6 Filter: Get players with scores below 70 using an arrow function
  const lowScoringPlayers = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>All Players & Their Scores</h2>
      <ul>
        {/* ES6 Map feature */}
        {players.map((player, index) => (
          <li key={index}>
            <strong>{player.name}</strong>: {player.score} runs
          </li>
        ))}
      </ul>

      <hr />

      <h2 style={{ color: '#d32f2f' }}>Players with Scores Below 70</h2>
      <ul>
        {lowScoringPlayers.map((player, index) => (
          <li key={index}>
            <strong>{player.name}</strong>: {player.score} runs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;