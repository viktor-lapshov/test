let money,
    time;

money = +prompt("Ваш бюджет на месяц?");
time = prompt ("Введите дату в формате YYYY-MM-DD");

 let income;
 let appData = {
  budget:money,
  timeData:time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings:false 

  };

  let a,b;


for(let i = 0; i < 2; i++) {
  a = prompt("Введите обязательную статью расходов в этом месяце", ""),
  b = prompt("Во сколько обойдется?","");
  if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
  && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;

  } else{

  }
  
};
let oneday;
appData.moneyPerDay=oneday/30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay <100) {
  console.log ("Минимальный уровень достактка")
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достактка");
} else if (appData.moneyPerDay > 2000) {
  console.log ("Высокий уровень достатка");
} else{
  console.log("Произошла ошибка");
}



   
