"use strict"

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    moneyMonth: money,
    timeData: time,
    expenses: {
        answ1: "",
        answ2: ""
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.answ2 = prompt("Во сколько обойдется " + appData.expenses.answ1 + "?", "");

appData.expenses.answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.answ2 = prompt("Во сколько обойдется " + appData.expenses.answ1 + "?", "");

let moneyDay = (appData.moneyMonth - appData.expenses.answ2) / 30;
alert("Ваш бюджет на 1 день: " + moneyDay);