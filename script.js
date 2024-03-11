// let a = "5";
// let b = "13sdf";
// let c = "12.9fdghhgf";

// console.log(Number(a));
// console.log(parseInt(b));
// console.log(parseFloat(c));

// console.log(typeof Number(a));
// console.log(typeof Number.parseInt(b));
// console.log(typeof Number.parseFloat(c));

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.max(12, 25, 46));

// console.log(Math.random() * (110 - 40) + 40);

// console.log("Welcome to Bahamas".toLocaleUpperCase());

const user = {};

// console.log(user);
user.name = "Goga";
user.age = 19;
user.city = "Tbilisy";
// console.log(user);
delete user.city;
user["like flowers"] = true;

// console.log(user);

for (key in user) {
  console.log(`${key}: ${user[key]}`);
}
