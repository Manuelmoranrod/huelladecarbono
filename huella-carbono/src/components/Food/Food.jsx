import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const Food = () => {

  // Context
  const { user } = useContext(userContext);

  const questions = [
    {
      questionText: 'Pregunta de comida 1',
      type: 'food',
      answerOptions: [
        { answerText: '1', isCorrect: 6 },
        { answerText: '2', isCorrect: 5 },
        { answerText: '3', isCorrect: 4 },
        { answerText: '4', isCorrect: 2 },
      ],
    },
    {
      questionText: 'Pregunta de comida 2',
      type: 'food',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: 2 },
        { answerText: 'Elon Musk', isCorrect: 6 },
        { answerText: 'Bill Gates', isCorrect: 9 },
        { answerText: 'Tony Stark', isCorrect: 10 },
      ],
    },
    {
      questionText: 'Pregunta de comida 3',
      type: 'food',
      answerOptions: [
        { answerText: 'Apple', isCorrect: 15 },
        { answerText: 'Intel', isCorrect: 18 },
        { answerText: 'Amazon', isCorrect: 20 },
        { answerText: 'Microsoft', isCorrect: 21 },
      ],
    }
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showValue, setShowValue] = useState(false);
  const [food, setFood] = useState(0);

  // Effect
  useEffect(() => {
    if (showValue) {
      axios.post('http://localhost:3001/updates/post-update', {
        value: food,
        type: 'food',
        token: user
      })
    }
  }, [showValue])


  const handleAnswerOptionClick = (value, type) => {

    if (type === 'food') {
      setFood(food + value);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowValue(true)
    }
  };


  return (
    <div>
      {showValue
        ? <div className='score-section'>
          Your CO2 kg is {food}
        </div>
        : (
          <>
            <div className='question-section'>
              <div className='icon'>
                ICON
              </div>
              <div className='question-type'>
                <span>Alimentación, pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, questions[currentQuestion].type)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default Food;
