//===============================================================================
// Синхронний та асинхронний JS
// ==============================================================================

// console.log("1");
// console.log("2");
// setTimeout(() => (console.log("3")), 0) // буде відображатись після синхронного коду
// console.log("4");
// console.log("5");

// const hello = () => {
//   console.log("Hello!");
// };

// const timeout = setTimeout(hello, 7000);
// // clearTimeout(timeout); // clearTimeout - синхронна, тому буде викликана першою і сет таймаут не виконається

// const intervsl = setInterval(hello, 5000);

// const btnStart = document.querySelector(".start");
// const btnStop = document.querySelector(".stop");

// let time = null;

// btnStart.addEventListener("click", () => {
//   time = setInterval(() => {
//     console.log("start timer");
//   }, 1000);
// });
// btnStop.addEventListener("click", () => {
//   console.log("timer stop");
//   clearInterval(time);
// });

// const a = {
//   classic() {
//     setTimeout(function () {
//       console.log(`${this}, classic function in object`);
//     }, 1000);
//   },
//   arrow() {
//     setTimeout(() => {
//       console.log(`${this}, arrow function in object`);
//     }, 1000);
//   },
// };

// a.classic();
// a.arrow();

// const data = new Date(1989, 5, 18, 15, 25, 45); // обов'язкові (рік, місяць, день), година, хвилина, секунда, мілісекунда
// console.log(data);

// const unixDate = new Date(1710970300228); // початок по Unix вважається 00:00 годин 1-го січня 1970 року
// console.log(unixDate);

// const newUnixDate = Date.now(); // показує кулькість мілісекунд від початку і до моменту виклика функції
// console.log(newUnixDate);

// const date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getTime());

// const date = new Date();

// const options = {
//   weekday: "short",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   // hour: "2-digit",
//   // minute: "2-digit",
// };

// const ukr = date.toLocaleString("Uk-uk", options);
// console.log(ukr);

//===============================================================================
// Promise
// ==============================================================================

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve"), 1000);
//   setTimeout(() => reject("reject"), 1000);
// });

// promise.then(
//   (resolve) => console.log(resolve),
//   (reject) => console.log(reject)
// );

// promise.catch(alert);

// promise.finally(); // не дужєе поки поняв

//===============================================================================
// Давайте зробимо функцію, що буде обробляти якесь завантаження
// ==============================================================================

// function loader(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Err ${script}`));

//     document.head.append(script);
//   });
// }

// let prom = loader(
//   "https://gist.githubusercontent.com/vasylkarpovych/cbf15256444eb88654dc32e7fad69dc9/raw/b230eac3aed9787745033a3edcdcf2a74a3fa872/vasek.js"
// );
// prom.then((script) => console.log(`Download ${script}`));

// prom.catch((error) => console.log(`Error ${error.message}`));

// prom.finally(console.log("Finally"));

//===============================================================================
// друга задачка
//==============================================================================

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + 5), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// ================================================================

// let a = 7;

// console.log(a);

// let b = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve((a = 99));
//   }, 2000);
// });

// b.then(function () {
//   console.log(a);
// });

// ===========================================================================
// callback
// ===========================================================================

// function myFunc(callback) {
//   const a = [4, 5, 6];
//   let element = document.querySelector(".out-1");
//   callback(element, a);
//   //   out(element, a);
// }

// function out(elem, arr) {
//   elem.innerHTML = arr.join("<br>");
// }
// function out2(elem, arr) {
//   elem.innerHTML = arr.join("---");
// }

// myFunc(out);
// myFunc(out2);

// запит про котят
// https://cat-fact.herokuapp.com/facts

// якщо жорстко визивати, все не гибко
// fetch("https://cat-fact.herokuapp.com/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((item) => console.log(item.text));
//   });
// якщо визивати за допомогою коллбеків

// function getCats(callback2) {
//   fetch("https://cat-fact.herokuapp.com/facts")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       callback2(data);
//       //   // console.log(data);
//       //   data.forEach((item) => console.log(item.text));
//     });
// }

// function showCats(d) {
//   d.forEach((item) => console.log(item.text));
// }

// function showCats2(d) {
//   d.forEach(
//     (item) => (document.querySelector(".out-2").innerHTML += item.text + "<br>")
//   );
// }

// getCats(showCats);
// getCats(showCats2);

// ===========================================================================

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     // fetch
//     const data = { id: 1, name: "Alex" };
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     // fetch games (id)
//     const data = ["game1", "game2", "game3"];
//     callback(data);
//   }, 1000);
// }

// function run() {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);
//     fetchUserGames(userInfo.id, (userGames) => {
//       console.log(userGames);
//     });
//   });
// }

// run();

// ===========================================================================
// перепишемо приклад що вище на промісах

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch
//       const data = { id: 1, name: "Ivan" };

//       resolve(data);
//       // reject('Error "then-1"');
//     }, 1000);
//   });
// }

// function fetchUserGames(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch games (id)
//       const data = ["game1", "game2", "game3"];

//       // resolve(data);
//       reject('Error "then-2"');
//     }, 1000);
//   });
// }

// function run() {
//   fetchUserData()
//     .then((userData) => {
//       console.log(userData);
//       return fetchUserGames(userData.id);
//     })
//     .then((userGames) => {
//       console.log(userGames);
//     })
//     .catch((message) => {
//       console.log(message);
//     });
// }

// run();

// ===========================================================================
// попрактикуємось трохи
// ===========================================================================

// function fetchGames() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch
//       const dataFromServer = "sdkfnjjkngvfjedknbgvjkedbngjkd";

//       // const gameFromServer = [
//       //   { id: 1, name: "Spider-man" },
//       //   { id: 2, name: "Mario" },
//       // ];

//       if (Array.isArray(dataFromServer)) {
//         resolve(gameFromServer);
//       } else {
//         reject("Так це ж я того, помилка я, щось явно не так пішло");
//       }
//     }, 2000);
//   });
// }

// function renderLoading() {
//   const body = document.querySelector("body");

//   const loading = document.createElement("div");
//   loading.id = "loading";
//   loading.textContent = "Loading...";

//   body.append(loading);
// }

// function renderGames(games) {
//   const body = document.querySelector("body");

//   const loading = document.querySelector("#loading");
//   loading.remove();

//   games.forEach((game) => {
//     const gameElement = document.createElement("div");
//     gameElement.innerText = `Game: ${game.name}`;
//     gameElement.classList = "game-element";

//     body.append(gameElement);
//   });
// }

// renderLoading();

// fetchGames()
//   .then((games) => {
//     renderGames(games);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// ===========================================================================
// методи промісів, щоб їх виконувати одночасно
// ===========================================================================

// Promise.all - чекаємо всі проміси, якщо ХОЧ ОДИН с помилкою то пападає в секцію catch, інакше then
// Promise.allSettled - просто чекаємо виконання всіх промісів (завжни then) не важливо з яким статусом
// Promise.race - отримуємо перший виконаний проміс (якщо він був з помилкою catch - )
// Promise.any - отримуємо перший УСПІШНО виконаний проміс

// function fetchVideos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch video
//       const data = ["video-1", "video-2"];
//       console.log("Data came 1");
//       // resolve(data);
//       reject("Error 1 promise");
//     }, 1000);
//   });
// }

// function fetchShorts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch video
//       const data = ["shorts-1", "shorts-2"];
//       console.log("Data came 2");
//       // resolve(data);
//       reject("Error 2 promise");
//     }, 2000);
//   });
// }

// function main() {
//   console.log("Loading...");

//   Promise.any([fetchVideos(), fetchShorts()])
//     .then((data) => {
//       console.log("OK", data);
//     })
//     .catch((message) => {
//       console.log("ERROR", message);
//     });
// }

// main();
