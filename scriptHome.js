//===========================================================================
// // 1 // Якщо змінна більше нуля - виведіть true, менше - false
// // Перевірте це на варіантах 1, 0, -3.

// let variable = -3;
// if (variable > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//===========================================================================
// // 2 // Якщо змінна ="test" - виведіть true,
// // Перевірте це на варіантах 'test', "qwerty", true

// let test = "test";

// if (test === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//===========================================================================
// // 3 // Якщо змінна більше 10 - відніміть 5,
// //менше - додайте 5, результат виведіть в консоль
// //Перевірте це на варіантах 1, 10, 13.

// let variable = 13;

// if (variable > 10) {
//   console.log((variable -= 5));
// } else {
//   console.log((variable += 5));
// }

//===========================================================================
// // 4 // Зробіть сервіс який отримує число від 1 до 12
// // виведіть місяць який дорівнює числу

// let mounth = prompt();

// switch (+mounth) {
//   case 1:
//     console.log("січень");
//     break;
//   case 2:
//     console.log("лютий");
//     break;
//   case 3:
//     console.log("березень");
//     break;
//   case 4:
//     console.log("квітень");
//     break;
//   case 5:
//     console.log("травень");
//     break;
//   case 6:
//     console.log("червень");
//     break;
//   case 7:
//     console.log("липень");
//     break;
//   case 8:
//     console.log("серпень");
//     break;
//   case 9:
//     console.log("вересень");
//     break;
//   case 10:
//     console.log("жовтень");
//     break;
//   case 11:
//     console.log("листопад");
//     break;
//   case 12:
//     console.log("грудень");
//     break;
//   default:
//     console.log(
//       "Такого місяця немає, введіть в змінну число від 1 до 12 включно"
//     );
//     break;
// }

//===========================================================================
// // 5 // Зробіть сервіс який отримує тризначне число
// // Поверніть користувачу сумму цих чисел

// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();

// console.log(+num1 + +num2 + +num3);

//===========================================================================
// // 6 // У вас є масив об’єктів fruts, і в кожному з них є name
// // Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const arr = [];

// fruts.forEach((fruit) => {
//   arr.push(fruit.name);
// });

// console.log(arr);

//===========================================================================
// // 7 // Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//===========================================================================
// // 8 // Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let item = 0;
// while (item < 5) {
//   console.log(`цифра ${item}!`);
//   item++;
// }

//===========================================================================
// // 9 //Напишіть цикл, який пропонує prompt ввести число більше за 100.
// //Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
// //Цикл повинен запитувати число доти, доки відвідувач не введе число,
// // більше за 100, або не скасує ввід/введе порожній рядок.

// let num;

// for (let i = 0; i < 1; i++) {
//   num = prompt("Введіть число більше");
//   console.log(num);
//   console.log(typeof num);
//   if (parseInt(num) < 100 || num === null) {
//     i--;
//   }
// }

//===========================================================================
// // 10 // Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let sum = 0;

// girls.forEach((girl) => {
//   sum += girl.age;
// });

// console.log("Середній вік дівчат: " + sum / girls.length + " роки.");

//===========================================================================
// // 11 // Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
//   age > 18 ? true : confirm("Батьки дозволили?");
// }
// checkAge(17);

// function checkAge2(age) {
//   age > 18 || confirm("Батьки дозволили?");
// }
// checkAge2(15);

//===========================================================================
// // 12 // Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   if (a > b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(74, 111));

//===========================================================================
// // 13 // Перепишіть з використанням стрілкових функцій
// // Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// // function ask(question, yes, no) {
// // if (confirm(question)) yes();
// // else no();
// // }

// // ask(
// //     "Ви згодні?"
// //     ,
// //     function() { alert("Ви погодились."); },
// //     function() { alert("Ви скасували виконання."); }
// //     );

// ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );

//===========================================================================
// // 14 // 1) написати об`єкт студента який буде виводити ім`я, спеціальнісь, середній
// //          бал і кількість пропущених занять
// //       2) написати метод який буде виводити цю інформацію
// //       3) написати три варіанти студентів
// //       4) прикріпити знначення за допомогою call apply bind

// const studentAnton = {
//   name: "Anton",
//   education: "cook",
//   averageRaiting: "8.8",
//   missedClasses: "5",
// };
// const studentVactiria = {
//   name: "Victoria",
//   education: "economist",
//   averageRaiting: "8",
//   missedClasses: "9",
// };
// const studentAnn = {
//   name: "Ann",
//   education: "singer",
//   averageRaiting: "9.3",
//   missedClasses: "2",
// };

// const studentEgor = {
//   name: "Egor",
//   education: "developer",
//   averageRaiting: "8.5",
//   missedClasses: "7",
//   showStudent: function () {
//     console.log(
//       `Студент: ${this.name}, спеціальність: ${this.education}, середній рейтінг: ${this.averageRaiting}, пропущено занять: ${this.missedClasses}`
//     );
//   },
// };

// console.log(studentEgor.showStudent());
// console.log(studentEgor.showStudent.bind(studentAnton)());
// console.log(studentEgor.showStudent.call(studentVactiria));
// console.log(studentEgor.showStudent.apply(studentAnn));

//===========================================================================
// // 15 //
// // Написати дві кнопки і закріпити на них функції
// // при натисканні на кнопку html - має видати коротке визначення що це таке
// // при натисканні на кнопку css - має видати коротке визначення що це таке

// const btnHtml = document.querySelector(".btn-html");
// const btnCss = document.querySelector(".btn-css");
// const textDescription = document.querySelector(".description");

// btnHtml.addEventListener("click", () => {
//   textDescription.innerHTML = `<p>HTML - це мова розмітки веб-сторінок, <br>яка визначає структуру і зміст документа.</p>`;

//   console.log(
//     "HTML - це мова розмітки веб-сторінок, яка визначає структуру і зміст документа."
//   );
// });

// btnCss.addEventListener("click", () => {
//   textDescription.innerHTML = `<p>CSS - це мова стилізації, що використовується для задання <br> вигляду і оформлення елементів HTML, таких як кольори, <br> шрифти, розміри тощо.</p>`;

//   console.log(
//     "CSS - це мова стилізації, що використовується для задання вигляду і оформлення елементів HTML, таких як кольори, шрифти, розміри тощо."
//   );
// });

//===========================================================================
// // 16 // Написати функцію магазин, яка отримує назву товару, ціну за кг
// // і кількість товару функція має повертати назву товару і вартість
// // перевірити на варіантах:
// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4

// const shop = function (product, price, amount) {
//   product.toString();
//   console.log(`Товар: ${product} продається за ціною ${price} грн.`);
//   return [product, price];
// };
// shop("banana", 30, 4.5);
// shop("cherry", 58, 1.3);
// shop("jrange", 89, 3.4);

//===========================================================================
// // 17 // Створити телефонну книгу
// // - створити початковий клас Abonent, де зберігатимуться ім*я і номер
// // - створити set який прийматиме телефон і номер
// // - створити get який виводитиме данні про абонента
// // - створити три різних юзери
// // - вивести данні

// class Abonent {
//   constructor(userPhone) {
//     this.longName = userPhone.longName;
//   }

//   name = "";
//   number = "";

//   set longName(namePhone) {
//     const arrUser = namePhone.split(", ");
//     this.name = arrUser[0];
//     this.number = arrUser[1];
//   }

//   get longName() {
//     return `Person: ${this.name}, nomber: ${this.number}`;
//   }
// }

// const ivan = new Abonent({
//   longName: "Ivan, +380937777777",
// });
// const pedro = new Abonent({
//   longName: "Pedro, +38097777777",
// });
// const djazefina = new Abonent({
//   longName: "Djazefina, +380677777777",
// });

// console.log(ivan.longName);
// console.log(pedro.longName);
// console.log(djazefina.longName);

// ==========================================================================
// 18 // Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

//===========================================================================

// function Calculator(number1, number2) {
//   this.number1 = number1;
//   this.number2 = number2;

//   Calculator.prototype.read = function () {
//     this.number1 = +prompt("Введіть перше число");
//     this.number2 = +prompt("Введіть друге число");
//   };

//   Calculator.prototype.sum = function () {
//     return this.number1 + this.number2;
//   };

//   Calculator.prototype.mul = function () {
//     return this.number1 * this.number2;
//   };
// }

// const result1 = new Calculator();
// result1.read();
// console.log(result1);
// console.log(result1.sum());
// console.log(result1.mul());

// ==========================================================================
// // 19 // Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// // та прочитати його значення.
// // <!DOCTYPE html>
// // <html>
// // <body>
// // <div data-widget-name="menu">Виберіть жанр</div>
// // <script>/* ваш код */</script>
// // </body>
// // </html>

// const attributeWidget = document.querySelector("[data-widget-name]");
// const textWidget = attributeWidget.getAttribute("data-widget-name");

// console.log(attributeWidget);
// console.log(textWidget);

// // ==========================================================================
// // 20 // Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// // <div id="text"> зникав

// const text = document.querySelector("#text");
// const btnHidden = document.querySelector(".button-hidden");
// const btnReturn = document.querySelector(".button-return");

// btnHidden.addEventListener("click", () => {
//   text.style.visibility = "hidden";
// });

// btnReturn.addEventListener("click", () => {
//   text.style.visibility = "visible";
// });

// // ==========================================================================
// // 21 // Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btnHidden = document.querySelector(".button-hidden");
// const btnReturn = document.querySelector(".button-return");

// btnHidden.addEventListener("click", () => (btnHidden.style.display = "none"));
// btnReturn.addEventListener("click", () => (btnHidden.style.display = "block"));

// ==========================================================================
// 22 // Створіть дерево, яке показує/приховує дочірні вузли при кліці
// ДУЖЕ ЦФКАВА ЗАДАЧА, ТРЕБА ДОРОБИТИ, ЩОБ ВІРНО ПОКАЗУВАВСЯ ВМІСТ ЕЛЕМЕНТУ

// //
// const wrap = document.querySelector(".wrapper");

// // const div1 = document.querySelector(".div1");
// // const div2 = document.querySelector(".div2");
// // const div3 = document.querySelector(".div3");
// // const div4 = document.querySelector(".div4");

// const handleClick = (event) => {
//   let clickedItem = event.target;
//   // перевіряємо, елемент, на котрому відполась подія, є дочернім елементом .wrapper
//   if (wrap.contains(clickedItem) && clickedItem !== wrap) {
//     // збкрігаємо вміст елементу
//     const itemContent = clickedItem.textContent;

//     // видаляємо всіх дочерніх елементів у елемента, де відбулася подія
//     while (clickedItem.firstChild) {
//       clickedItem.removeChild(clickedItem.firstChild);
//     }

//     // відновлюємо вміст елементу, де відбулась подія
//     clickedItem.textContent = itemContent;
//   }
// };

// wrap.addEventListener("click", handleClick);

// // ==========================================================================
// // 23 // Напишіть функцію printNumbers(from, to) яка виводить число
// кожну секунду, починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// рішення використовуючи setInterval:

// function printNumbers(from, to) {
//   function showNumbers() {
//     if (from !== to + 1) {
//       console.log(from);
//       from++;
//     } else {
//       clearInterval(showNumbers);
//     }
//   }

//   let interval = setInterval(showNumbers, 1000);
// }

// printNumbers(8, 12);

// // рішення використовуючи використовуючи setInterval тільки трохи оптимізував:

// function printNumbers(from, to) {
//   function showNumbers() {
//     from !== to + 1 ? console.log(from++) : clearInterval(showNumbers);
//   }

//   let interval = setInterval(showNumbers, 1000);
// }

// printNumbers(7, 10);

// // рішення використовуючи вкладений setTimeout:
// // вдалось виконати задачу завдяки рекурсії

// function printNumbers(from, to) {
//   let number = from;

//   function recursion() {
//     console.log(number);

//     if (number < to) {
//       number++;
//       setTimeout(recursion, 1000);
//     }
//   }
//   recursion();
// }
// printNumbers(5, 10);

// // // ==========================================================================
// // // 24 // Вбудована функція setTimeout використовує колбек-функції. Створіть
// // альтернативу яка базується на промісах.
// // Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// // ms мілісекунд, так щоб ми могли додати до нього .then:
// // function delay(ms) {
// // // ваш код
// // }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//   // ваш код
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// delay(3000).then(() => alert("виконалось через 3 секунди"));

// // ==========================================================================
// // 25 //

// // ==========================================================================
// // 26 //

// // ==========================================================================
// // 27 //
