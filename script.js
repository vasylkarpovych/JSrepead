//===============================================================================
// Наслідування класів, приклад на кружочках
// ==============================================================================

// class CircleBox {
//   constructor(selector) {
//     this.$elemet = document.querySelector(selector);
//   }

//   show() {
//     this.$elemet.style.display = "block";
//   }

//   hide() {
//     this.$elemet.style.display = "none";
//   }
// }

// class CircleItem extends CircleBox {
//   constructor(options) {
//     super(options.selector);
//     this.$elemet.style.width = options.size + "px";
//     this.$elemet.style.height = options.size + "px";
//     this.$elemet.style.borderRadius = "50%";
//     this.$elemet.style.background = options.color;
//   }
// }

// const circleRed = new CircleItem({
//   selector: ".circleRed",
//   color: "red",
//   size: 50,
// });
// const circleGreen = new CircleItem({
//   selector: ".circleGreen",
//   color: "green",
//   size: 80,
// });
// const circleBluee = new CircleItem({
//   selector: ".circleBlue",
//   color: "blue",
//   size: 30,
// });

// circleRed.hide();
// circleRed.show();

//===============================================================================
// Записуємо метод в prototype
// ==============================================================================

// Записуємо метод в прототайт, щоб він там був за замовчуванням
// і ми їм могли користуватись

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Car.prototype.massege = function () {
//   console.log(`${this.name} is ${this.color}`);
// };

// Car.prototype.start = function () {
//   console.log(`${this.name} is start!!!`);
// };

// const tesla = new Car("Tesla", "white");
// const opel = new Car("Opel", "green");

//===============================================================================
// Міксини
// ==============================================================================

// ==============================================================================
// зробимо якийсь міксинчик

// let message = {
//   massegeHello() {
//     console.log(`Hello, ${this.name}`);
//   },

//   massegeGoodbye() {
//     console.log(`Bye,  ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, message);

// const ivan = new User("Ivan");
// ivan.massegeHello();

//===============================================================================
// Підтримка, щоб сайт був кросплатформенним
// ==============================================================================

// ==============================================================================
// Існують два інструменти, це транспілятори, або полефіли

// // ?? - війщов в JS 2020
// // нова специфікація:
// height = height ?? 100;
// // на старій специфікації це би виглядало так:
// height = height !== undefined && height !== mull ? height : 100;

// // один із найвідоміших транспіляторів - це Babel
// // поліфіли

// if (Math.trunc) {
//   // якщо такої функції немає
//   // тоді ми ручками прописуємо що воно повинно зробити
// }

//===============================================================================
// Коментарі в коді
// ==============================================================================
