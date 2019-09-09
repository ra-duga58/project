let money = prompt('Ваш бюдже за месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD');
let expenses = {};
let optionalExpenses = {};
let income = [];
let costs = prompt('Введите обязательную статью расходов в этом месяце'),
	price = prompt('Во сколько обойдется');
let appData = {money, time, expenses, income, saving: false};

expenses = {'costs': 'price'};
let budget = money/30;
alert(budget);