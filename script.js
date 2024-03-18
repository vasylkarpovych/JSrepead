//===============================================================================
// DOM Document Object Model
// ==============================================================================

// let element = document.getElementsByClassName("element");

// element[0].style.background = "green";

// let elementsUl = document.querySelectorAll("ul>li:last-child");

// for (elem of elementsUl) {
//   console.log(elem);
// }

// let elenetm = document.querySelector("li");
// console.log(elenetm);

// let elements = document.getElementsByTagName("div");
// console.log(elements);

// let textHidden = document.getElementsByClassName("text-hidden")[0];

// textHidden.hidden = true; // ховає текст

// let message = document.getElementById("message");
// console.log(message.value); // отримуємо той текст, що в середені документу

// let text = document.querySelector(".text-message");
// console.log(text); // отримуємо просто елемент p
// console.log(text.textContent); // отримуємо, текст, що в параграфі

// let text = document.querySelector(".text-message");
// text.textContent = "Hello Vasek!";
// console.log(text.textContent);

// let btn = document.querySelector(".button");
// btn.style.backgroundColor = "red";
// btn.style.width = 250 + "px";
// btn.style.height = 80 + "px";

//     <p id="p-text" class="text red big"></p>

// let text = document.querySelector("#p-text");

// console.log(text.classList);
// console.log(text.classList.contains("red"));
// text.classList.remove("red");
// console.log(text.classList);
// console.log(text.classList.contains("red"));
// text.classList.add("new-class");
// console.log(text.classList);

// let img = document.querySelector(".image");
// console.log(img.hasAttribute("src"));
// console.log(img.getAttribute("src"));
// img.remove();

// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "3";

// const nav = document.querySelector(".nav");
// nav.appendChild(item);

// const heading = document.createElement("h2");
// heading.textContent = "Heading";
// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);

// // nav.removeChild(item); // старійший метод
// item.remove(); // новий, більш зручний, але не всюди підтримується

// const text = document.querySelector(".text");
// const parent = document.querySelector(".parent");

// const clone = text.cloneNode(true);

// parent.appendChild(clone);

// const divContainer = document.querySelector(".container");

// const text = `<p>I am div</p>`;

// divContainer.innerHTML += text;

// const list = document.querySelector(".list");

// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
// list.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");
// list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
// list.insertAdjacentHTML("afterend", "<p>afterend</p>");

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");
// const btn4 = document.querySelector(".btn-4");
// const btn5 = document.querySelector(".btn-5");
// const btn6 = document.querySelector(".btn-6");

// btn1.addEventListener("click", () => console.log("event = click")); // ліва кнопка миші

// btn2.addEventListener("contextmenu", () => console.log("event = contextmenu")); // права кнопка миші

// btn3.addEventListener("mouseover", () => console.log("mouseover")); // курсор навівся на кнопку
// btn3.addEventListener("mouseout", () => console.log("mouseout")); // курсор покинув кнопку

// btn4.addEventListener("mousedown", () => console.log("mousedown")); // натиснули на кнопку
// btn4.addEventListener("mouseup", () => console.log("mouseup")); // відпустили натиск на кнопку

// btn5.addEventListener("mousemove", () => console.log("mousemove")); // натиснули на кнопку

// btn6.addEventListener("keyup", () => console.log("keyup"));
// btn6.addEventListener("keydown", () => console.log("keydown"));

// const addButton = document.querySelector(".btn-add");
// const removeButton = document.querySelector(".btn-remove");
// const clickButton = document.querySelector(".btn-click");

// const handleClick = () => {
//   console.log("Hello, I am handleClick");
// };

// addButton.addEventListener("click", () => {
//   clickButton.removeAttribute("disabled");
//   clickButton.addEventListener("click", handleClick);
// });
// removeButton.addEventListener("click", () => {
//   //   clickButton.setAttribute("disabled", true); // зробити кнопку не активною
//   clickButton.removeEventListener("click", handleClick);
// });

// const clickBtn = document.querySelector(".buttonItem");

// const infoClick = (event) => {
//   console.log("event", event.target);
// };

// clickBtn.addEventListener("click", infoClick);

// // робота с формами, цікаво-корисно
// const form = document.querySelector(".form");
// const logonInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const login = logonInput;
//   const password = passInput;

//   console.log(`Login: ${login.value}, password: ${password.value}`);
//   form.reset();
// }

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const item = document.querySelector(".item");

// parent.addEventListener("click", () => console.log("Click parent"));
// child.addEventListener("click", () => console.log("Click child"));
// item.addEventListener("click", () => console.log("Click item"));

// const handleClick = (event) => {
//   console.log("event: ", event.target);
// };

// parent.addEventListener("click", handleClick);

// const itemClick = (event) => {
//   console.log("itemClick stop");
//   event.stopPropagation();
// };
// const childClick = (event) => {
//   console.log("childClick stop");
//   event.stopPropagation();
// };
// const parentClick = (event) => {
//   console.log("parentClick stop");
//   event.stopPropagation();
// };

// parent.addEventListener("click", parentClick);
// child.addEventListener("click", childClick);
// item.addEventListener("click", itemClick);

// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//   const checkClass = nav.querySelector("li.active");

//   //   if (checkClass) {
//   //     event.target.classList.remove("active");
//   //   } else {
//   //     event.target.classList.add("active");
//   //   }

//   checkClass
//     ? event.target.classList.remove("active")
//     : event.target.classList.add("active");
// }

// // дорозібратись, цікава тема
// const ball = document.querySelector(".ball");

// ball.onmousedown = function (event) {
//   function move(pageX, pageY) {
//     ball.style.left = pageX - ball.offsetWidth / 2 + "px";
//     ball.style.top = pageY - ball.offsetWidth / 2 + "px";
//   }

//   move(event.pageX, event.pageY);

//   function onMouseMove(event) {
//     move(event.pageX, event.pageY);
//   }

//   document.addEventListener("mousemove", onMouseMove);

//   // коли шишку відпускаємо, то мачик залишається на місці
//   ball.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//   };
// };
