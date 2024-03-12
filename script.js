//===============================================================================
// ООП
// ==============================================================================

// Наприклад, розрахуємо суму кредиту, процедурне програмування:

// const sum = 20000;
// const month = 12;
// const paymentToBank = 1000;

// const creditAll = (sum, date, pay) => {
//   return sum + pay * date;
// };

// console.log(creditAll(sum, month, paymentToBank));

// ООП програмування:

// const creditAll = {
//   sum: 20000,
//   month: 12,
//   paymentToBank: 1000,
//   result() {
//     return this.sum + this.paymentToBank * this.month;
//   },
// };
// console.log(creditAll.result());

//===============================================================================
// Існують 4 парадигми ООП програмування:
//===============================================================================
// 1. Інкапсуляція
// Це властивість системи, яка дозвозяє об'єднати методи і данні, які працюють
// з цими методами, в один об'єкт та приховати цим деталі від зовнішнього світу.
//===============================================================================
// 2. Абстракція
// Це спосиб виділити виділити спільні характеристике об'єктів, та ігноруєте
// непотрібні деталі
//===============================================================================
// 3. Наслідування
// Це концепція ООП, яка дозволяє створювати нові класи на основі все існуючих.
//===============================================================================
// 4. Поліморфізм
// Це концепція ООП, яка дозволяє об'єктам реагувати на однаковий метод по-різному

//===============================================================================
// Навчимося працювати з класами:
//===============================================================================

// // той самий банк, утворюємо клас:
// class Bank {
//   static type = "Privat";
//   constructor(option) {
//     this.sum = option.sum;
//     this.month = option.month;
//     this.p = option.p;
//   }
//   creditAll() {
//     return console.log("I am Privat!");
//     // return this.sum + this.p * this.month;
//   }
// }
// // // а тепер ми видаємо комусь кредит:
// // const userBank = new Bank({
// //   sum: 30000,
// //   month: 5,
// //   p: 500,
// // });

// // console.log(userBank);
// // console.log(userBank.creditAll());
// // console.log(Bank.type);

// class NewBank extends Bank {
//   constructor(option) {
//     super(option);
//     this.card = option.card;
//   }
//   creditAll() {
//     super.creditAll();
//     return console.log("I am Aval!");
//   }
// }

// const bankAval = new NewBank({
//   sum: 20000,
//   month: 5,
//   p: 500,
//   card: true,
// });

// // console.log(bankAval.card);
// console.log(bankAval.creditAll());

//===============================================================================
// Гетери та Сетери //     get     set
//===============================================================================

// get-тери коли ми зчитуємо інформацію

// set-тери коли ми змінюємо інформацію

// class User {
//   constructor(props) {
//     this.name = props.name;
//   }

//   firstName = "";
//   lastName = "";
//   age = "";
//   city = "";

//   set name(NewName) {
//     const nameRow = NewName.split(" ");
//     this.firstName = nameRow[0];
//     this.lastName = nameRow[1];
//   }

//   get name() {
//     return ` First name: ${this.firstName} last name: ${this.lastName}`;
//   }
// }

// const vavyl = new User({
//   name: "Vasyl Karpovych",
// });
// const vika = new User({
//   name: "Victoria Mihailiva",
// });
// const vova = new User({
//   name: "Vova Zelensky",
// });

// console.log(vavyl);
// console.log(vika);
// console.log(vova);

//===============================================================================
// Прототипи //
//===============================================================================
// Prototype - це механізм, за допомогою якого об'єкти можуть спадковувати
// властивості та методи від інших об'єктів

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = Object.create(a);

// console.log(b);
// console.log(b.x);
// console.log(b.y);
// console.log(a);

//===============================================================================
// трохи практики
// у нас є магазин, там є менеджери. У кожного менеджера є своя знижка.
// Ця знижка росте кожне місяць на 1%

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   //   this.sale = function () {
//   //     this.sales += 1;
//   //   };
// };

// const ann = new Manager("Ann", 5);
// const nikita = new Manager("Nikita", 10);

// Manager.prototype.sale = function () {
//   this.sales += 1;
// };

// console.log(ann);
// ann.sale();
// console.log(ann);

// console.dir(Manager);

//===============================================================================
// приватні і захищені методи в класах
// _test - те що починається з нижнього підкреслення, це поля що заборонено
// змінювати, це домовленніть між розробниками, мовою не підтримується
// #test - те що починається з # це приватні поля і вони підтримуються у JS

// class CoffeMachine {
//   _water = 0;
//   #waterLimit = 500;

//   constructor(power) {
//     this.power = power;
//   }

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this._water = value;
//   }
// }

// let coffeMachine1 = new CoffeMachine(100);

// console.log(coffeMachine1);

// coffeMachine1.waterAmount = 20;
// console.log(coffeMachine1);

// coffeMachine1.waterAmount = -20;
// console.log(coffeMachine1);
