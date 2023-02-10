import React from 'react';

function GameOverBanner({ didWin = false, numGuesses, word, restartGame }) {
	let banner = didWin ? (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong>
					{' '}
					{numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
				</strong>
				.
			</p>
			<button onClick={restartGame}>Click here to play again</button>
		</div>
	) : (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{word}</strong>.
			</p>
			<button onClick={restartGame}>Click here to play again</button>
		</div>
	);

	return banner;
}

export default GameOverBanner;
