function Output({ convertedValue, unit }) {
	return (
		<div>
			{convertedValue !== null && (
				<p>
					Converted value: {convertedValue} {unit}
				</p>
			)}
		</div>
	);
}

export default Output;
