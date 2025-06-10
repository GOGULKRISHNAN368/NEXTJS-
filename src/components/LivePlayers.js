import React, { useState, useEffect } from "react";

const LivePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockPlayers = ["Alex", "Jordan", "Riya", "Krish", "Ananya"];
      const randomOnline = mockPlayers
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * mockPlayers.length));
      setPlayers(randomOnline);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "1rem", background: "#c2f0c2", borderRadius: "8px", marginTop: "1rem" }}>
      <h2>Live Players</h2>
      <ul>
        {players.length > 0 ? (
          players.map((player, index) => <li key={index}>{player}</li>)
        ) : (
          <p>No players online</p>
        )}
      </ul>
    </div>
  );
};

export default LivePlayers;
