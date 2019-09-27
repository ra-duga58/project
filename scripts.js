let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
				b = prompt("Во сколько обойдется?", "");

			if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

				console.log("done");

				appData.expenses[a] = b;
			} else {
				console.log("bad result");
				i--;
			}

		}
	},

	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			appData.mounthIncome = save / 100 / 12 * percent;
			alert("Доход за этот месяц составил " + appData.mounthIncome);

		}
	},

	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");

		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");

		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},

	chooseOptExpenses: function () {
		let opt;
		for (let i = 1; i < 3; i++) {
			answer = prompt("Статья необязательных расходов?");
			if (isNaN(answer) && answer != null && answer != '') {
				appData.optionalExpenses[i] = opt;
			}
		}
	},
	chooseIncome: function () {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		if (isNaN(items) && items !== '' && items !== null) {
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
			
			}
			appData.income.forEach(function (item, i, arr) {
				alert("Споcобы доп заработка: " + (i+1) + ": " + item);
		})
		//		 
	}

};

for (let prop in appData) {
 console.log("Наша программа включает в себя данные: " + prop + " - " + appData[prop]);
}

//console.log(appData);
