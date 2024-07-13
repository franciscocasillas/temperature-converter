import { useState } from "react";

function InputTemperature() {
	const [initialTemperature, setInitialTemperature] = useState("");

	const handleInitialTemperature = (event) => {
		event.preventDefault();
		setInitialTemperature(event.target.value);
	};

	return (
		<div>
			<label htmlFor="temperature">Enter initial temperature</label>
			<input
				id="temperature"
				type="number"
				value={initialTemperature}
				onChange={(event) => handleInitialTemperature(event)}
			/>
		</div>
	);
}

export default InputTermometer;
