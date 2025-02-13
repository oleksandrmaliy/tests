const Test = () => {
	const a = null;
	const b = undefined;
	const result = a == b;

	return (
		<>
			<pre>Результат: {String(result)}</pre>
		</>
	);
};

export default Test;
