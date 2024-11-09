const lang = 'ru'
// const lang = 'eng'

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

const namePerson = "Александр";
// const namePerson = "Артем";
console.log(namePerson === "Артем" ? "директор" : (namePerson === "Александр" ? "преподаватель" : "студент"));
