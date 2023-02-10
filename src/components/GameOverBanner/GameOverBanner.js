import React from 'react';

function GameOverBanner({ didWin = false, numGuesses = 2, word = 'PENIS' }) {
	const banner = didWin ? (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong>
					{' '}
					{numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
				</strong>
				.
			</p>
		</div>
	) : (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{word}</strong>.
			</p>
		</div>
	);

	return banner;
}

export default GameOverBanner;
