import { useState } from "react";
import "./App.css";
import Converter from "./components/Converter";
import InputTemperature from "./components/InputTemperature";
import Output from "./components/Output";
import Select from "./components/Select";

function App() {
	return (
		<div>
			<InputTemperature
				value={initialTemperature}
				onChange={handleInputChange}
			/>
			<Select unit={unit} onChange={handleUnitChange} />
			<Converter initialTemperature={initialTemperature} unit={unit} />
			<Output convertedValue={convertedValue} unit={unit} />
		</div>
	);
}

export default App;
