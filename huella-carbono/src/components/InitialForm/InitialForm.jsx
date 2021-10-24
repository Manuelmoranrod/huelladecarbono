import React, { useState, useContext } from "react";
import axios from 'axios'

//Import context
import userContext from "../../context/userContext";


const InitialForm = () => {
    const questions = [
		{
			questionText: 'Cuantos vuelos coges al año?',
			type:'transport',
			answerOptions: [
				{ answerText: '1', isCorrect: 50 },
				{ answerText: '2', isCorrect: 23 },
				{ answerText: '3', isCorrect: 54 },
				{ answerText: '4', isCorrect: 76},
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			type:'transport',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: 34 },
				{ answerText: 'Elon Musk', isCorrect: 43 },
				{ answerText: 'Bill Gates', isCorrect: 85 },
				{ answerText: 'Tony Stark', isCorrect: 32 },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			type:'home',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: 12 },
				{ answerText: 'Intel', isCorrect: 94 },
				{ answerText: 'Amazon', isCorrect: 66 },
				{ answerText: 'Microsoft', isCorrect: 76 },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			type:'food',
			answerOptions: [
				{ answerText: '1', isCorrect: 56 },
				{ answerText: '4', isCorrect: 73 },
				{ answerText: '6', isCorrect: 34 },
				{ answerText: '7', isCorrect: 75 },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const { user, setUser } = useContext(userContext);
	const [transport, setTransport] = useState(0);
	const [home, setHome] = useState(0);
	const [food, setFood] = useState(0);



    const handleAnswerOptionClick = (isCorrect, type) => {
		// if (value) {
		// 	setScore(score + 1);
		// }
		
		switch(type){
			case 'transport':
				setTransport(transport + isCorrect)
				console.log(transport, isCorrect);
				break;
			case 'food':
				setFood(food + isCorrect)
				console.log(food);
				break;
			case 'home':
				setHome(home + isCorrect)
				console.log(home);
				break;
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

			envio()
		}
	};

	const envio = () => {
		axios.post('http://localhost:3001/info/post-info', {
			transport,
			food,
			home,
			token: user
		})

	}


    return (
    <div className='initial-form'>
			{showScore ? (
				<div className='score-section'>
					Your CO2 kg is {transport + food + home} 
				</div>
			) : (
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

export default InitialForm;
