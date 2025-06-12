import React, { useState, useEffect } from "react";

const QuizWithTimer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [showResult, setShowResult] = useState(false);

  // Fetch quiz questions on mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple");
        const data = await res.json();
        setQuestions(data.results);
      } catch (err) {
        console.error("Error fetching quiz:", err);
      }
    };

    fetchQuiz();
  }, []);

  // Set up options whenever question changes
  useEffect(() => {
    if (questions.length > 0 && currentQIndex < questions.length) {
      const q = questions[currentQIndex];
      const options = [...q.incorrect_answers, q.correct_answer];
      setShuffledOptions(options.sort(() => Math.random() - 0.5));
      setTimer(20);
      setSelectedAnswer(null);
    }
  }, [questions, currentQIndex]);

  // Timer countdown
  useEffect(() => {
    if (questions.length === 0 || showResult) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNextQuestion();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [questions, currentQIndex, showResult]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    const correct = questions[currentQIndex].correct_answer;
    if (option === correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!Array.isArray(questions) || questions.length === 0) {
    return <p style={{ textAlign: "center" }}>Loading quiz...</p>;
  }

  if (showResult) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Quiz Completed!</h2>
        <p>
          Your Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff", borderRadius: "8px" }}>
      <h3 style={{ color: "#0070f3" }}>Time Remaining: {timer}s</h3>
      <h2 dangerouslySetInnerHTML={{ __html: currentQ.question }} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {shuffledOptions.map((option, idx) => (
          <li key={idx} style={{ margin: "1rem 0" }}>
            <button
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
              style={{
                padding: "1rem",
                backgroundColor:
                  selectedAnswer === option
                    ? option === currentQ.correct_answer
                      ? "#4CAF50"
                      : "#F44336"
                    : "#eee",
                border: "none",
                width: "100%",
                borderRadius: "8px",
                cursor: selectedAnswer === null ? "pointer" : "not-allowed",
              }}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizWithTimer;
