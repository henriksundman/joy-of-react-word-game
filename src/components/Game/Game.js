import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Guess from '../Guess/Guess';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const guessRows = range(0, NUM_OF_GUESSES_ALLOWED);

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
			{guessRows.map((row) => (
				<Guess key={row} />
			))}
			<GuessResults guesses={guesses} />
			<GuessInput handleGuesses={handleGuesses} />
		</>
	);
}

export default Game;
