import React from 'react';

import { getGuessedLetters } from '../../game-helpers';

function Keyboard({ guesses, keyboardRowsObjs }) {
	const guessedLettersObjs = guesses
		.map(({ checkedAnswer }) => checkedAnswer)
		.flat();

	const guessedLetters = getGuessedLetters(guessedLettersObjs);

	// eslint-disable-next-line array-callback-return
	keyboardRowsObjs.map((row) => {
		for (let letterObj of row) {
			const [letter] = Object.keys(letterObj);
			if (Object.keys(guessedLetters).includes(letter)) {
				letterObj[letter] = guessedLetters[letter];
			}
		}
	});

	return (
		<div className="keyboard-container">
			<div className="keyboard">
				{keyboardRowsObjs.map((row, index) => (
					<p className="keyboard-row" key={index}>
						{row.map((letter) => (
							<span
								className={`keyboard-letter ${Object.values(letter)[0]}`}
								key={Object.keys(letter)[0]}
							>
								{Object.keys(letter)[0]}
							</span>
						))}
					</p>
				))}
			</div>
		</div>
	);
}

export default Keyboard;
