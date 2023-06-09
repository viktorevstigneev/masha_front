import React from 'react';

import './style.css';

const Spinner = () => {
	return (
		<div className="triangles">
			<div className="triangle">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			<div className="triangle -big">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			<div className="triangle -bigger">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>

			<div className="triangle -other">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			<div className="triangle -other -big">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			<div className="triangle -other -bigger">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div>
	);
};

export default Spinner;
