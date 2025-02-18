const Test = () => {
	console.log('1 number');
	let a = 10;
	let b = -5;
	let c = 3.14;
	let d = Infinity;
	let e = NaN;
	console.log(a, b, c, d, e);

	console.log('2 bigint');
	let bigNum = 9007199254740992n;
	let anotherBigNum = BigInt('123456789012345678901234567890');
	console.log(bigNum, anotherBigNum);

	console.log('3 string');
	let str1 = 'Hello, world!';
	let str2 = 'Привіт!';
	let str3 = `Число: ${10 + 5}`;
	console.log(str1, str2, str3);

	console.log('4 boolean');
	let isOnline = true;
	let hasPermission = false;
	console.log(isOnline, hasPermission);

	console.log('5 symbol');
	let id1 = Symbol('userID');
	let id2 = Symbol('userID');
	console.log(id1 === id2); // false (унікальні символи)
	console.log(id1 == id2); // false (унікальні символи)
	console.log(id1, id2);
	let sym = Symbol('description');
	console.log(sym);

	console.log('6 null');
	let emptyValue = null;
	console.log(emptyValue);

	console.log('7 undefined');
	let notAssigned;
	console.log(notAssigned); // undefined
	function test() {}
	console.log(test()); // undefined

	console.log('8 obhect');
	let user = { name: 'Alice', age: 25, email: 'alice@example.com' };
	console.log(user);
	console.log(user.name, user.age, user.email);

	console.log('Array length');
	const arr = [1, 2, 3, 4, 5];

	console.log(arr);
	console.log(arr.length);

	// const text = 'Це дуже довгий текст, який потрібно обрізати.';
	// const maxLength = 18;

	const shortenText = (text, maxLength) => {
		if (text.length <= maxLength) return text;

		let trimmedText = text.slice(0, maxLength);

		// Знайти останній пробіл у межах обрізаного тексту
		let lastSpaceIndex = trimmedText.lastIndexOf(' ');

		// Якщо пробіл знайдено, обрізаємо до нього, інакше залишаємо як є
		if (lastSpaceIndex > 0) {
			trimmedText = trimmedText.slice(0, lastSpaceIndex);
		}

		return trimmedText + ' ...';
	};

	// Перевіряємо
	console.log(
		shortenText('Це дуже довгий текст, який потрібно обрізати.', 20)
	);
	// "Це дуже довгий..."
	console.log(shortenText('СловоБезПробілів', 10));
	// "СловоБезПр..."
	return (
		<>
			<pre>Результат</pre>
			<p>{arr.length}</p>
			<p>
				{shortenText(
					'Це дуже довгий текст, який потрібно обрізати.',
					20
				)}
			</p>
			<video
				controls
				width='200'>
				<source
					src='../../src/assets/video1.MOV'
					type='video/mp4'
				/>
				Ваш браузер не підтримує тег відео.
			</video>
		</>
	);
};

export default Test;
