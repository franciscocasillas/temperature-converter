import { useState } from "react";

function Converter({ initialTemperature, unit }) {
	const [convertedValue, setConvertedValue] = useState(null);

	const convertTemperature = () => {
		let converted;
		if (unit === "Celsius") {
			converted = (parseFloat(initialTemperature) * 9) / 5 + 32;
		} else if (unit === "Fahrenheit") {
			converted = ((parseFloat(initialTemperature) - 32) * 5) / 9;
		}
		setConvertedValue(converted);
	};

	return null;
}

export default Converter;
