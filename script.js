let money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt ("Введите дату в формате YYYY-MM-DD");

let var1,var2;
var1 = prompt("Введите обязательную статью расходов в этом месяце");
var2 = prompt("Во сколько обойдется?");
 let income;
 let appData = {
   money,
   time,
  
  expenses: {
  var1,
  var2,
  },
  optionalExpenses: {

   },
   income,
  savings:false 
    
  };
    
    let oneday = (money / 30);
    alert (oneday);
