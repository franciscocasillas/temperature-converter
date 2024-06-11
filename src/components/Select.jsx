import { useState } from "react";

function Select() {
	const [unit, setUnit] = useState("Celcius");

	const handleChange = () => {
		setUnit(event.target.value);
	};

	return (
		<div>
			<label htmlFor="unit">Select unit:</label>
			<select id="unit" value={unit} onChange={handleChange}>
				<option value="celcius">Celcius</option>
				<option value="fahrenheit">Fahrenheit</option>
			</select>
		</div>
	);
}

export default Select;
