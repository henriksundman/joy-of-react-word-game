import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function isCorrectAnswer(checkedAnswer) {
	return checkedAnswer.every((letter) => letter.status === 'correct');
}

function noMoreGuesses(currentGuess) {
	return currentGuess === NUM_OF_GUESSES_ALLOWED;
}

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [latestGuess, setLatestGuess] = useState({});

	const isGameOver =
		latestGuess.isCorrectAnswer || noMoreGuesses(guesses.length);

	function handleGuesses(guess) {
		const checkedAnswer = checkGuess(guess, answer);

		const newGuess = {
			checkedAnswer,
			text: guess,
			id: crypto.randomUUID(),
			isCorrectAnswer: isCorrectAnswer(checkedAnswer),
		};
		setGuesses([...(guesses || {}), newGuess]);
		setLatestGuess(newGuess);
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput handleGuesses={handleGuesses} disabled={isGameOver} />
			{isGameOver && (
				<GameOverBanner
					didWin={latestGuess.isCorrectAnswer}
					numGuesses={guesses.length}
					word={answer}
				/>
			)}
		</>
	);
}

export default Game;
