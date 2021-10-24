import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const InitialForm = () => {

	// Context
	const { user, setUser } = useContext(userContext);

	const questions = [
		{
			// Transport
			questionText: 'Cuantos vuelos coges al año?',
			type: 'home',
			answerOptions: [
				{ answerText: '1', isCorrect: 6 },
				{ answerText: '2', isCorrect: 5 },
				{ answerText: '3', isCorrect: 4 },
				{ answerText: '4', isCorrect: 2 },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			type: 'transport',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: 2 },
				{ answerText: 'Elon Musk', isCorrect: 6 },
				{ answerText: 'Bill Gates', isCorrect: 9 },
				{ answerText: 'Tony Stark', isCorrect: 10 },
			],
			// Transport
		},
		{
			questionText: 'The iPhone was created by which company?',
			type: 'food',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: 15 },
				{ answerText: 'Intel', isCorrect: 18 },
				{ answerText: 'Amazon', isCorrect: 20 },
				{ answerText: 'Microsoft', isCorrect: 21 },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			type: 'home',
			answerOptions: [
				{ answerText: '1', isCorrect: 54 },
				{ answerText: '4', isCorrect: 87 },
				{ answerText: '6', isCorrect: 91 },
				{ answerText: '7', isCorrect: 54 },
			],
		},
	];

	// States
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showValue, setShowValue] = useState(false);
	const [transport, setTransport] = useState(0);
	const [food, setFood] = useState(0);
	const [home, setHome] = useState(0);

	// Effect
	useEffect(() => {
		if (showValue) {

			console.log('UA AH TERMINADO');
			console.log({
				transport,
				food,
				home
			});

			console.log('ey');

			axios.post('http://localhost:3001/info/post-info', {
				transport,
				food,
				home,
				token: user
			})

		}
	}, [showValue])


	const handleAnswerOptionClick = (isCorrect, type) => {

		if (type === 'transport') {
			setTransport(transport + isCorrect);
		} else if (type === 'food') {
			setFood(food + isCorrect);
		} else if (type === 'home') {
			setHome(home + isCorrect);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowValue(true)
		}
	};


	return (
		<div className='initial-form'>
			{showValue
				? <div className='score-section'>
					{console.log({
						transport,
						food,
						home
					})}
					Your CO2 kg is {home + food + transport}
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

export default InitialForm;
