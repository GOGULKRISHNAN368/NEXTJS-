import React, { useState, useEffect } from "react";

const QuizTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active || seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [active, seconds]);

  return (
    <div style={{ padding: "1rem", background: "#fff7c2", borderRadius: "8px" }}>
      <h2>Quiz Timer</h2>
      <p style={{ fontSize: "1.5rem", color: "red" }}>{seconds} seconds left</p>
    </div>
  );
};

export default QuizTimer;
