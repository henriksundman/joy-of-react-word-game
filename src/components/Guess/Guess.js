import React from 'react';

import { range } from '../../utils';

const cells = range(0, 5);
function Guess({ guess }) {
	return (
		<div className="guess-result">
			<p className="guess">
				{guess.text
					? guess.text.split('').map((letter, index) => (
							<span className="cell" key={index}>
								{letter}
							</span>
					  ))
					: cells.map((cell) => <span className="cell" key={cell}></span>)}
			</p>
		</div>
	);
}

export default Guess;
