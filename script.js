function startGame() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	const maxAttempts = 10;
	alert("Игра началась! Угадайте число от 1 до 100. У вас есть 10 попыток.");

	function game(attemptsLeft) {
		const userInput = prompt(`Угадайте число от 1 до 100 (осталось попыток: ${attemptsLeft}):`);

		if (userInput === null) {
			alert("Игра окончена. Спасибо за игру!");
			return;
		}

		const userNumber = Number(userInput);

		if (isNaN(userNumber)) {
			alert("Введи число!");
			return game(attemptsLeft);
		}

		if (userNumber < 1 || userNumber > 100) {
			alert("Число должно быть от 1 до 100.");
			return game(attemptsLeft);
		}

		if (userNumber > randomNumber) {
			if (attemptsLeft - 1 === 0) {
				if (confirm("Попытки закончились, хотите сыграть еще?")) {
					return startGame();
				} else {
					alert("Игра окончена. Спасибо за игру!");
					return;
				}
			}
			alert(`Загаданное число меньше, осталось попыток: ${attemptsLeft - 1}`);
			return game(attemptsLeft - 1);
		}

		if (userNumber < randomNumber) {
			if (attemptsLeft - 1 === 0) {
				if (confirm("Попытки закончились, хотите сыграть еще?")) {
					return startGame();
				} else {
					alert("Игра окончена. Спасибо за игру!");
					return;
				}
			}
			alert(`Загаданное число больше, осталось попыток: ${attemptsLeft - 1}`);
			return game(attemptsLeft - 1);
		}

		if (userNumber === randomNumber) {
			if (confirm(`Поздравляю, Вы угадали!!! Это было число: ${randomNumber}. Хотите сыграть еще?`)) {
				return startGame();
			} else {
				alert("Спасибо за игру!");
				return;
			}
		}
	}
	game(maxAttempts);
}
startGame();
