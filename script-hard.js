// let lang = 'ru'
let lang = 'eng'

if (lang === 'ru') {
	console.log(`
Понедельник

Вторник

Среда

Четверг

Пятница

Суббота

Воскресенье`);
} else if (lang === 'eng') {
	console.log(`
Monday

Tuesday

Wednesday

Thursday

Friday

Saturday

Sunday`);
}

let namePerson = "Александр"; // или другое значение
console.log(namePerson === "Артем" ? "директор" : (namePerson === "Александр" ? "преподаватель" : "студент"));
