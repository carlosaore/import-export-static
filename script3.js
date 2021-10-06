import { students, logger, sum } from "./script1";

const myButton = document.getElementById("myButton");
const myStudentButton = document.getElementById("myStudentButton");
const demo = document.getElementById("demo");

myButton.addEventListener("click", () => {
  console.log("hello");
});

myStudentButton.addEventListener("click", () => {
  const list = students.join(", ") + ".";
  demo.innerHTML = list;
});

document.getElementById("myButton").addEventListener("click", function () {
  demo.innerHTML = "Hello World";
});
