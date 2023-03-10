import React from 'react';
import Guess from '../Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
	const paddedGuesses = [];

	for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; ++i) {
		paddedGuesses.push(guesses[i] || {});
	}

	return (
		<div className="guess-results">
			{paddedGuesses.map((guess, index) => (
				<Guess key={index} guess={guess} />
			))}
		</div>
	);
}

export default GuessResults;
