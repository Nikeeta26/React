import React from "react";
import useQuizLogic from "./QuizLogic";

export default function QuizUI() {
  const {
    questions,
    currentQuestionIndex,
    score,
    isQuizFinished,
    handleAnswer,
    restartQuiz,
  } = useQuizLogic();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz App</h1>

      {isQuizFinished ? (
        <div>
          <h2>
            Your Score: {score}/{questions.length}
          </h2>
          <button
            onClick={restartQuiz}
            style={{ padding: "10px", marginTop: "20px" }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px",
                  width: "200px",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
