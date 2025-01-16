import React, { useState } from "react";

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectCount,setCount] = useState(0);

  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Pune", "Nagpur"],
      answer: "Delhi",
    },
    {
      question: "What is the national animal of India?",
      options: ["Tiger", "Lion", "Fox", "Wolf"],
      answer: "Tiger",
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mars", "Earth", "Mercury", "Venus"],
      answer: "Mercury",
    },
  ];

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

const handleOption = (option)=>{
  const op = questions[questionIndex];
  if(op == option){
    setCount = selectCount+1;
  }
}

  return (
    <div>
    <h1>{setCount}</h1>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <h3>{q.question}</h3>
          {q.options.map((option, optionIndex) => (
            <label key={optionIndex} style={{ display: "block", margin: "5px 0" }}>
              <input
                type="radio"
                // name={`question-${questionIndex}`}
                value={option}
                checked={selectedAnswers[questionIndex] === option}
                onChange={() =>handleOption(questionIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <h1>Hello</h1>
    </div>
  );
}
