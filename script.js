//=====================================================================
// Ввід/вивід данних
// ====================================================================

// const message = "JavaScript is awesome!";

// Введення

// alert(message);
// console.log(message);

// Отримання

// confirm
// const isConfirm = confirm("To be or not to be");
// console.log(isConfirm);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

//=====================================================================
// Перетворення типу
//=====================================================================
// -----Number-----
// const value = prompt("Please enter a number");
// console.log(typeof parseInt(value));
// console.log(Number(value));
// const newValue = "123";
// console.log(typeof +newValue);

// -----String-----
// let value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// -----Boolean-----
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean("No"));
// console.log(Boolean(""));
// console.log(Boolean());

//=====================================================================
// Оператори математичні
//=====================================================================

// Терміни: "унарний", "бінарний", "операнд"
// Операнед - це те, до чого застосовуються оператори,
// іноді їх назівають аргументами

// let x = "45";
// console.log(-x);
// console.log(+x);
// console.log(typeof x);
// console.log(typeof -x);

// Залишок віж ділення %
// console.log(5 % 2); // у консолі 1
// console.log(8 % 3); // у консолі 2
// console.log(15 % 10); // у консолі 5
// console.log(8 % 2); // у консолі 0

// Піднесення до степеня **
// console.log(5 ** 2); // у консолі 25
// console.log(4 ** 4); // у консолі 25

//=====================================================================
// Оператори логічні (результатом повертають буль)
//=====================================================================

// a > b (a < b) // більше(менше)
// a >= b (a <= b) // більше(менше) або дорівнює
// a == b  // дорівнює
// a != b  // не дорівнює
// a === b  // строго дорівнює
// a !== b  // строго не дорівнює

// приведення до типу

//=====================================================================
// or -and -not
//=====================================================================

// ----- and (&&) -----
// console.log(5 === 5 && 6 > 3); // true // запинається на брехні

// ----- or (||) -----
// console.log(5 !== 5 || 2 > 3); // false // запинається на правді
// інакше false

// ----- not (!) -----
// console.log(!(5 === 5)); // false // міняє true на false
// console.log(!false); // true // міняє false на true

//=====================================================================
// Умови is/else
//=====================================================================

// if (5 * 5 === 10) {
//   console.log("Hello");
// } else if (5 + 5 !== 10) {
//   console.log("Done");
// } else {
//   console.log("Error");
// }

//=====================================================================
// Тернарний оператор
//=====================================================================

// 5 * 5 === 10 ? console.log("Hello") : console.log("Error");

//=====================================================================
// switch/case
//=====================================================================

// let num = 9;

// switch (num) {
//   case 0:
//     console.log("0");
//     break;
//   case 5:
//     console.log("5");
//     break;
//   case 8:
//     console.log("8");
//     break;
//   default:
//     console.log("777");
//     break;
// }

// let cost;
// const subscribe = "premium";

// switch (subscribe) {
//   case "free":
//     cost = 0;
//   case "easy":
//     cost = 20;
//     break;
//   case "standart":
//     cost = 30;
//     break;
//   case "premium":
//     cost = 50;
//     break;
//   default:
//     console.log("Виникла помилка");
// }

// console.log(`Ваша підписка коштує ${cost}$`);

//=====================================================================
// Вирішення логічних задач і побудова алгоритмів
//=====================================================================

// let min = prompt("Введіть кількість хвилин від 0 до 60");

// if (min <= 15) {
//   console.log("Перша чверть години");
// } else if (min <= 30) {
//   console.log("Друга чверть години");
// } else if (min <= 45) {
//   console.log("Третя чверть години");
// } else if (min <= 60) {
//   console.log("Четверта чверть години");
// } else {
//   console.log("Введіть коректні дані");
// }

//=====================================================================

// const value = prompt(
//   "Введіть назву товару (яйце, молоко, хліб, піца)"
// ).toLowerCase();
// let cost;

// switch (value) {
//   case "яйце":
//     cost = 10;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "молоко":
//     cost = 50;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "хліб":
//     cost = 25;
//     alert(`${value} коштує ${cost} гривень`);
//     break;
//   case "піца":
//     cost = 180;
//     break;
//   default:
//     alert(`Такого товару ${value} немає в наявності або не існує`);
// }
