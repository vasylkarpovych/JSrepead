//===============================================================================
// Області видимості
// ==============================================================================

// змінну або константу можна викликати тільки після її ініціалізації
// тобто спочатку ми оголошуємо, а потім викликаємо

// const a = 5;

// if (true) {
//   console.log("Block", a);
//   const b = 10;
//   console.log("Block", b);
// }
// console.log("Global", a);
// console.log("Global", b); // не доступна b, так як вона в блоці, а не глобально

//===============================================================================
// Цикли
//===============================================================================

// while:

// let a = 0;
// while (a < 5) {
//   a++;
//   console.log("a", a);
// }

// let a = 3;
// while (a) {
//   console.log("a", a);
//   a--;
// }

// // Якщо у нас одна умова:
// let a = 5;
// while (a) console.log(a--);

// // do while :

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 5);

// for

// for (let a = 0; a < 3; a++) {
//   console.log(a);
// }

// Може бути те саме, записано ось так:

// let a = 0;

// for (; a < 3; ) {
//   console.log(a);
//   a++;
// }

// break && continue

// let sum = 0;

// while (true) {
//   let value = +prompt("Введіть любе число");
//   if (!value) break;
//   sum += value;
// }

// console.log(`Сума`, sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

//===============================================================================
// Масиви
//===============================================================================

// const arr = [1, 2, 3, 4, 5]; // Создали масив, індекс починається з 0
// console.log(arr[2]); // єлемент з індексом 2 буде 3 в нашому мвсиві
// arr[2] = "Lemon"; // перезаписуємо елемент з індексом 2 на строку Lemon
// console.log(arr); // вивід всього масиву
// arr[5] = "Cherry"; // додаємо елемент з індексом 5 на строку Cherry
// console.log(arr[5]); // єлемент з індексом 5 буде Cherry в нашому мвсиві1
// console.log(arr.length); // виводить 6, це довжина нашого масиву
// const arr2 = [1, "hello", { key: "qqq" }]; // в масиві може бути любий тип даних

// push та pop працюють з останнім елементом масиву
// console.log(arr);
// arr.push("Tomat"); // додає елемент Tomat у кінець масиву
// console.log(arr[6]); // Tomat

// arr.pop(); // видаляємо останній елемент з масиву
// console.log(arr[6]); // undefined так як ми видалили його

// // shift та unshift працюють з останнім елементом масиву

// arr.shift(); // видаляє перший елемент масиву
// console.log(arr);
// arr.unshift("One"); // додає елемент на початок масиву
// console.log(arr);

// const arr3 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr3.length; i++) {
//   // перебір звичайним циклом
//   console.log(arr3[i]);
// }

// for (let item of arr3) {
//   // більш нова версія перебору, FOR-OF
//   console.log(item);
// }

// метод FOR-OF не надає доступ до індексу, якщо він нам треба, то FOR-IN
// for (key in arr3) {
//   console.log(key); // виводить індекси масиву
//   console.log(arr3[key]); // виводить значення масиву
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]); // дістались до цифри 5

//===============================================================================
// Методи присвоєння
//===============================================================================

// // примітиви копіюються по значенню, а складні типи по посиланню
// let arr = [1, 2, 3];
// let arr2 = arr;
// arr.push(4);
// console.log(arr, arr2);

//===============================================================================
// Методи масиву
//===============================================================================

// let arr = ["a", "b", "c", "d", "f"];
// // splice - видаляє елемент масиву, де перший аргумет index а другий - скільки
// // елементів видалити
// arr.splice(2, 1);
// console.log(arr);

// let arr = ["a", "b", "c", "d", "f"];
// // slice - копіює в новий масив від початкового до останнього індексу
// // який ми передамо
// let arr2 = arr.slice(2, 3); // виводить тільки елемент "с"
// console.log(arr2);

// // Метод concat()
// let a = [1, 2, 3];
// let b = [10, 20, 30];
// let c = a.concat(b);
// console.log(c); // у консолі: [1, 2, 3, 10, 20, 30]
// let d = a.concat(b, "test", 77, "ok");
// console.log(d); // у консолі: [1, 2, 3, 10, 20, 30, 'test', 77, 'ok']

// пошук по масиву, є три методи: indexOf, lastIndexOf, includes
// let arr = ["a", "b", "c", "d", "f"];

// // indexOf() - перший аргумент, це то, що ми шукаємо
// // другий аргумент не обов'язковий, це з якого індексу шукати
// console.log(arr.indexOf("c")); // повертає index елементу // 2
// console.log(arr.indexOf("c", 3)); // повертає index елементу або -1 // -1

// варіант lastIndexOf() шукає те саме, тільки з іншого боку
// console.log(arr.lastIndexOf("d")); // 3

// // варіант includes() показує true/false є елемент в масиві чи ні
// console.log(arr.includes("c")); // true

// // шукати фрукт по ID методом find(), мінус, що закінчується як знайшов перший
// const fruit = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// console.log(fruit.find((item) => item.id === 2)); // {id: 2, name: 'Cherry'}
// console.log(fruit.find((item) => item.id === 0)); // {id: 0, name: 'Apple'}

// // якщо треба знайти всі елементи, то в нас є filter():
// console.log(fruit.filter((item) => item.id >= 2)); // на виході масив [{…}, {…}]
// // з двох останніх елементів

// // map() - викликає функцію для кожного елементу масиву і повертає масив з результатом
// let result = fruit.map((item) => item.name.length);
// console.log(result); // на виході масив з довжинами [5, 5, 6, 6]

// // split() - розділяє строку на масив по якомусь з розділителів (у дужках)
// let names = "Оля, Юля, Аня, Петя";
// let arrNames = names.split(", ");
// console.log(arrNames); // ['Оля', 'Юля', 'Аня', 'Петя']

// // join() - поєднує массив елементів у строку по якомусь з елементів (у дужках)
// let newArrNamess = arrNames.join(" === ");
// console.log(newArrNamess); // Оля === Юля === Аня === Петя

// reduce() - якщо нам треба порахувати якесь значення на основі всього масиву
// let arr = [1, 2, 3, 4, 5];
// let summa = arr.reduce((sum, item) => sum + item);
// console.log(summa); // 15

// наприклад треба порахувати середнє число з елементів масиву:
// let arr = [23, 45, 30];

// let summ = arr.reduce((sum, item) => sum + item);
// console.log(summ / arr.length); // середнє значення = 32.666666666666664

//===============================================================================
// Функції
//===============================================================================

// // function declarations
// function showMessage(name, city) {
//   console.log(`Привіт, мене звати ${name} я живу в місті ${city}`);
// }
// showMessage("Василь", "Київ");
// showMessage("Оля", "Львів");
// showMessage("Віталя", "Кам'янське");

// // Function Expressions
// const sayHi = function (name) {
//   console.log("Hi " + name + "!");
// };
// sayHi("Ann");
// sayHi("Ivan");

// про локальні та глобальні змінні
// const userName = "Ann";
// const sayHi = function () {
//   let message = "Hello, my name Ivan!";
//   console.log(message + userName);
// };
// sayHi();

// // повернення значень функції, return
// function sum(a, b) {
//   let c = a + b;
//   return c;
// }
// let result = sum(7, 8);
// console.log(result);

// // аргументи функцій // а коли ми додаємо до фцнкції - параметри
// const testFunk = function (a, b) {
//   console.log("a :", a);
//   console.log("b :", b);
//   let c = a + b;
//   return c;
// };
// testFunk(5, 8);

// порядок виконання коду, як працює інтерпритатор
// const a = function () {
//   c();
//   console.log("function a");
//   b();
// };
// const b = function () {
//   console.log("function b");
// };
// const c = function () {
//   console.log("function c");
// };
// a();

// кожна функція, крім стрілкових, має свій псевдомасив arguments
// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arg);
// };
// addName(1, 3, 5);

// // rest оператор ...
// const addName = function (...arg) {
//   console.log(arg);
// };
// addName(1, 3, 5);
// addName(1, 3, 5, 7, 12);

// callback - це функції зворотнього виклику
// callback - це функції, що будуть викликані пізніше, іншою функцією

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   console.log("You say OK");
// }
// function showNo() {
//   console.log("You say Cancel");
// }
// ask("Yes or no?", showOk, showNo);

// // higher-order function (HOF) - функції вищого порядка, це функція, що приймає в себе
// // функцію в якості аргументів, апо повертає як результат інші функції

// const hello = function (name) {
//   console.log(`Hello, ${name}!`);
// };

// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);

// // return // тут можна без блоку else
// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   return console.log("Goodbye");
// }
// checkAge(12);
// checkAge(9);
// checkAge(21);

// return може нічого не повертати, просто закінчувати роботу функції
// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   console.log("Go to cinema");
// }
// showMovie(12);
// showMovie(34);

//===============================================================================
// Стрілкові функції // =>
//===============================================================================
// в стрілкових функціях немає псевдомасиву arguments та контексту THIS
// const test = (arg) => {
//   console.log(arg);
// };
// test("Hello");

// const showMovie = (age) => {
//   if (age < 21) {
//     return console.log("Вам ще рано дивитись таке кіно");
//   }
//   console.log("Купуйте попкорн, скоро все почнеться!");
// };
// showMovie(45);

//===============================================================================
// Контексти і виклики функції
//===============================================================================

// const a = () => {
//   console.log("a");
// };
// const b = () => {
//   console.log("b");
// };
// const c = () => {
//   console.log("c");
//   a();
//   b();
// };
// c(); // в консолі спочатку буде: с, потім a та b

//===============================================================================
// DOM Documet Object Model
//===============================================================================

const addNumber = (number) => {
  let sum = +number + 10;
  return console.log(sum);
};

const inputNumberRef = document.querySelector("input[name='number']");

const buttonNumberRef = document.querySelector("button");

buttonNumberRef.addEventListener("click", () =>
  addNumber(inputNumberRef.value)
);
