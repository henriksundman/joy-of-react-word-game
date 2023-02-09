import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	function handleGuesses(guess) {
		const newGuess = {
			text: guess,
			id: crypto.randomUUID(),
		};
		setGuesses([...(guesses || {}), newGuess]);
	}

	return (
		<>
			<GuessResults guesses={guesses} />
			<GuessInput handleGuesses={handleGuesses} />
		</>
	);
}

export default Game;
