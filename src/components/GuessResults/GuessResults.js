import React from 'react';

function GuessResults({ guesses }) {
	return (
		<div className="guess-results">
			{guesses.map((guess) => (
				<p className="guess" key={guess.id}>
					{guess.text}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
