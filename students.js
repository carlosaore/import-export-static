const students = ["Jana", "Pierre", "Gauthier", "Tim"];

/**
 * Logs a text to the console
 * @param {String} text
 */
function logger(text) {
  console.log(text);
}

/**
 * Sums the two provided arguments and returns the result
 * @param {Number} number1
 * @param {Number} number2
 */
const sum = (number1, number2) => number1 + number2;

export { students, logger, sum };
