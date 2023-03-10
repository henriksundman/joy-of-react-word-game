import React, { useState } from 'react';

function GuessInput({ handleGuesses, disabled }) {
	const [input, setInput] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
		if (input.length < 5) return;
		handleGuesses(input);
		setInput('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={submitHandler}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				disabled={disabled}
				value={input}
				onChange={(event) => {
					if (event.target.value.length > 5 || event.target.value.includes(' '))
						return;
					setInput(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
