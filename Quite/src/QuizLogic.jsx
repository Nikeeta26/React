import React, { useState } from "react";

export default function Quiz() {

    // Quiz questions
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Homer"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Earth", "Mercury", "Venus"],
        answer: "Mercury",
      },
    ];
  
    // State variables
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
  
    // Handle answer selection
    const handleAnswer = (selectedOption) => {
      const currentQuestion = questions[currentQuestionIndex];
  
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1); // Increment score for the correct answer
      }
  
      // Move to the next question or finish the quiz
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        setIsQuizFinished(true);
      }
    };
  
    // Restart the quiz
    const restartQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setIsQuizFinished(false);
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Quiz App</h1>
  
        {isQuizFinished ? (
          <div>
            <h2>Your Score: {score}/{questions.length}</h2>
            <button onClick={restartQuiz} style={{ padding: "10px", marginTop: "20px" }}>
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
  

  