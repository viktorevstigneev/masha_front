import React, { useState, useCallback } from 'react';

import'./style.css';

const HiddenContent = ({ tabData, inx }) => {
	const [isDescriptionShowed, setDescriptionShowed] = useState(false);

	const handleTaskOpenButtonClick = useCallback(() => {
		setDescriptionShowed((state) => !state);
	}, []);

	return (
		<div>
			<div className="CourseTabHeader" onClick={handleTaskOpenButtonClick}>
				<p>
					{inx}. {tabData.title}
				</p>
				<button className="CourseShowBtn">{isDescriptionShowed ? <>&#9660;</> : <>&#9668;</>}</button>
			</div>
			{isDescriptionShowed && (
				<>
					<p className="CourseTabContent">{tabData?.description}</p>
					{/* <p className="CourseTabTaskContent">{tabData?.task}</p> */}
				</>
			)}
		</div>
	);
};

export default HiddenContent;
