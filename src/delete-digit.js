const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const Numberss = String(n).split("").map(Number);
  let max = 0;
  for (let i = 0; i < Numberss.length; i++) {
    const remainingNumberss = Numberss.slice(0, i).concat(Numberss.slice(i + 1));
    const newNumber = Number(remainingNumberss.join(""));
    max = Math.max(max, newNumber);
  }
  return max;
}

module.exports = {
  deleteDigit,
};
