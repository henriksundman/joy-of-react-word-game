import React from 'react';

import { range } from '../../utils';

const cells = range(0, 5);
function Guess() {
	return (
		<div className="guess-result">
			<p className="guess">
				{cells.map((cell) => (
					<span className="cell" key={cell}></span>
				))}
			</p>
		</div>
	);
}

export default Guess;
