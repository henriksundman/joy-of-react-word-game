import { NUM_OF_GUESSES_ALLOWED } from './constants';

export function checkGuess(guess, answer) {
	if (!guess) {
		return null;
	}

	const guessChars = guess.toUpperCase().split('');
	const answerChars = answer.split('');

	return guessChars.map((guessChar, index) => {
		const answerChar = answerChars[index];

		let status;
		if (guessChar === answerChar) {
			status = 'correct';
		} else if (answerChars.includes(guessChar)) {
			status = 'misplaced';
		} else {
			status = 'incorrect';
		}
		return {
			letter: guessChar,
			status,
		};
	});
}

const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export const keyboardRowsObjs = () =>
	keyboardRows.map((row) => {
		return row.split('').map((letter) => ({
			[letter]: '',
		}));
	});

export function getGuessedLetters(letterObjArr) {
	//   prev->  | correct | misplaced | incorrect | undefined
	// correct   |  cont   |  change   |   change  |   change
	// misplaced |  cont   |    cont   |   change  |   change
	// incorrect |  cont   |    cont   |   cont    |   change

	const guessedLetters = {};
	for (let { letter, status } of Object.values(letterObjArr)) {
		const prevStatus = guessedLetters[letter];
		if (
			prevStatus?.at(0) === 'c' ||
			(prevStatus?.at(0) === 'm' && status !== 'correct') ||
			(prevStatus?.at(0) === 'i' && status === 'incorrect')
		) {
			continue;
		}

		guessedLetters[letter] = status;
	}

	return guessedLetters;
}

export function isCorrectAnswer(checkedAnswer) {
	return checkedAnswer.every((letter) => letter.status === 'correct');
}

export function noMoreGuesses(currentGuess) {
	return currentGuess === NUM_OF_GUESSES_ALLOWED;
}
