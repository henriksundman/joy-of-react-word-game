import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard/Keyboard';
import {
	keyboardRowsObjs,
	noMoreGuesses,
	isCorrectAnswer,
} from '../../game-helpers';

function Game() {
	const [answer, setAnswer] = useState(sample(WORDS));
	const [guesses, setGuesses] = useState([]);
	const [latestGuess, setLatestGuess] = useState({});
	const [keyboardRows, setKeyboardRows] = useState(keyboardRowsObjs());

	const isGameOver =
		latestGuess.isCorrectAnswer || noMoreGuesses(guesses.length);

	function restartGame() {
		setAnswer(sample(WORDS));
		setGuesses([]);
		setLatestGuess([]);
		setKeyboardRows(keyboardRowsObjs());
	}

	console.info({ answer });

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
			<Keyboard guesses={guesses} keyboardRowsObjs={keyboardRows} />
			{isGameOver && (
				<GameOverBanner
					didWin={latestGuess.isCorrectAnswer}
					numGuesses={guesses.length}
					word={answer}
					restartGame={restartGame}
				/>
			)}
		</>
	);
}

export default Game;
