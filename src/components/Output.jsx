function Output() {
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
