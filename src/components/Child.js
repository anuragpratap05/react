import React from "react";

const Child = ({ func }) => {
	return (
		<div>
			Hi I'm Child!
			<button onClick={() => func("Anurag")}> click me!</button>
		</div>
	);
};

export default Child;
