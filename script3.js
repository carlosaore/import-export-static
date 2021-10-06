import { users, logger } from './user.js';
import magicNumber from './magicNumber.js';

const myButton = document.getElementById("myButton");
const myStudentButton = document.getElementById("myStudentsButton");
const demo = document.getElementById("demo")

myButton.addEventListener("click", () => {
  logger(`hello ${magicNumber}`);
  demo.innerHTML = `hello ${magicNumber}`;
  demo.style.color = "purple"
})

myStudentButton.addEventListener("click", () => {
  demo.style.color = "black"
  demo.innerHTML = users.join(", ") + ".";
});