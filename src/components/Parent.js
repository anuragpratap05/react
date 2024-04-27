import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [inputVal, setInputVal] = useState("");

	function getData(data) {
		console.log("Triggered!");
		console.log(data);
	}

	function handleInputChange(e) {
		setInputVal(e.target.value);
	}

	return (
		<>
			<div>I am parent, Controller compo</div>
			<input onChange={handleInputChange} value={inputVal}></input>
			<Child func={getData}></Child>
		</>
	);
};

export default Parent;
