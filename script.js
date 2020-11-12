let money,time;
function start() {
  money= +prompt("Ваш бюджет на месяц?", "");
  time = prompt('ВВедите дату в формате YYYY-MM-DD', '');

  while(isNaN(money)|| money =="" || money == null ) {
    money= +prompt("Ваш бюджет на месяц?", "");
  }
}
start();
  

let appData = {
  budget: money,
  expenses: {},
  income: [],
  timeData: time,
  savings: true
};



let a,b;

function chooseExpenses() {
for(let i = 0; i < 2; i++) {
  a = prompt("Введите обязательную статью расходов в этом месяце", ""),
  b = prompt("Во сколько обойдется?","");
  if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
  && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;

  } else{
     i = i -1;
  }

}
}
chooseExpenses();

function detectDayBudget() {
let oneday;
appData.moneyPerDay=(oneday/30).toFixed();
alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
if(appData.moneyPerDay <100) {
  console.log ("Минимальный уровень достактка")
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достактка");
} else if (appData.moneyPerDay > 2000) {
  console.log ("Высокий уровень достатка");
} else{
  console.log("Произошла ошибка");
}
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
  appData.mothIncome = save/100/12*percent;
  alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
  }
}
checkSavings();


function chooseOptExpenses() {
  let q1 = prompt("Статья необязательных расходов?"),
      q2 = prompt("Статья необязательных расходов?"),
      q3 = prompt("Статья необязательных расходов?");
      optionalExpenses: {
        console.log('1',q1),
        console.log('2',q2),
        console.log('3',q3);
      }
  
}
chooseOptExpenses();
