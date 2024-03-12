//===============================================================================
// Замикання // Closure
// ==============================================================================

// // Приклад
// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// const calc = createNewSum(5);
// calc();

// ==============================================================================
// // Приклад ще:

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }
// const addFive = createNewNumber(5);
// console.log(addFive(10));

// ==============================================================================
// // Приклад на посиланнях ще:

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = createUrl("com");
// const comUa = createUrl("com.ua");

// console.log(comUrl("google"));
// console.log(comUrl("fb"));
// console.log(comUa("rozetka"));

//===============================================================================
// THIS // контекст
// ==============================================================================

// function hello() {
//   console.log("Hello", this);
// }
// hello();

// const user = {
//   name: "Ivan",
//   city: "Odessa",
//   sayHello: hello,
// };
// user.sayHello();

// ==============================================================================
// function abc() {
//   console.log("В функції");
//   console.log(this);
// }
// abc();

// document.querySelector(".hello").onclick = abc;

// ==============================================================================
// function changeColor() {
//   console.log(this);
//   this.style.background = "green";
// }
// document.querySelector(".div").onclick = changeColor;

// ==============================================================================
// function changeColor() {
//   this.style.background = "green";
// }

// let user = document.querySelectorAll(".names");

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

// ==============================================================================
// в стрілочної функції немає this, буде відобраджатись об'єкт Window
// const showList = () => {
//   console.log(this);
// };
// showList();

// const list = {
//   name: ["Ann", "Olga", "Ivan"],
//   showList: showList,
// };
// list.showList();

// ==============================================================================
// вбудовані методи

// // метод bind - прив'язує потрібний контекст, треба викликати, бо він створює
// // нову змінну і копіює туди вже функцію з новими данними

// function hello() {
//   console.log(this);
// }

// user = {
//   name: "Ivan",
//   age: 45,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };
// // user.hello();
// // user.sayHelloWindow();
// // user.info();

// const valera = {
//   name: "Valera",
//   age: 24,
// };
// const ibragim = {
//   name: "Ibragim",
//   age: 33,
// };
// user.info.bind(valera)("Kyiv");            !!! метод
// user.info.bind(ibragim, "Dnipro")();           !!! метод

// ==============================================================================
// метод call - прив'язує потрібний контекст, одразу, не треба викликати,
// після через кому додаємо безкінечну кількість додаткових аргументів

// const userInfo = {
//   name: "name",
//   age: 77,
//   logInfo: function (job) {
//     console.group(`${name} info: `);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const vano = {
//   name: "Ivan",
//   age: 44,
// };

// userInfo.logInfo.call(vano, "developer"); // !!! метод

// ==============================================================================
// метод apply - прив'язує потрібний контекст, після через кому два аргументи,
// де перший - це об'єкт, а другий масив додаткових аргументів

// const showUserInfo = {
//   name: name,
//   age: 83,
//   logInfo: function (job, city) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Ivan = {
//   name: "Ivan",
//   age: 44,
// };

// showUserInfo.logInfo.apply(Ivan, ["One", "Two"]);

// ==============================================================================
// практичні задачки

// // зробити програму, котра буде вітати людину в якомусь готелі і вказувати
// // кількість його зірок

// const massage = function (name, stars) {
//   console.log(`Hello ${name}, Welcome to ${this.hotel}, stars ${stars}*`);
// };

// const bukovel = { hotel: "Buka" };
// const dnipro = { hotel: "Dnipro" };
// const goodzone = { hotel: "Goodzone" };

// massage.call(bukovel, "Miha", 5); // метод call
// massage.call(dnipro, "Ksu", 3); // метод call
// massage.call(goodzone, "Lerka", 4); // метод call

// massage.apply(goodzone, ["Valentin", 4]); // метод apply

// massage.bind(dnipro, "Yan", 3)(); // метод bind

// ==============================================================================
// зробимо кілька задачек по натисканню інтерфейсу, зробимо кілька кнопок,
// по натисканню на які буде показуватисб що там у нас в корзині

// const cart = {
//   showItems() {
//     console.log(`В корзині: `, this.items);
//   },
// };

// const woman = {
//   items: ["Сукня, туфлі"],
// };
// const man = {
//   items: ["Піджак, носки"],
// };
// const kids = {
//   items: ["Іграшка, щоденник"],
// };

// document
//   .querySelector(".woman")
//   .addEventListener("click", cart.showItems.bind(woman));
// document
//   .querySelector(".man")
//   .addEventListener("click", cart.showItems.bind(man));
// document
//   .querySelector(".kids")
//   .addEventListener("click", cart.showItems.bind(kids));

// ==============================================================================
// зробимо програму котра буде виводити інформацію про автомобіль

const infoCar = {
  name: "BMW",
  model: "X5",
  color: "grey",
  showInfo: function () {
    console.log(
      "Car: " + this.name + ", model: " + this.model + ", color: " + this.color
    );
  },
};

const car2 = {
  name: "Opel",
  model: "Omega",
  color: "blue",
};

infoCar.showInfo();
infoCar.showInfo.bind(car2)(); // bind
infoCar.showInfo.call(car2); // call
infoCar.showInfo.apply(car2); // apply
