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
