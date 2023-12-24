const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const basic = new Map();
  const basic2 = new Map();
  let Count = 0;

  for (const l of s1) {
    basic.set(l, (basic.get(l) || 0) + 1);
  }

  for (const m of s2) {
    basic2.set(m, (basic2.get(m) || 0) + 1);
  }

  for (const [key, value] of basic) {
    if (basic2.has(key)) {
      Count += Math.min(value, basic2.get(key));
    }
  }
  return Count;
}

module.exports = {
  getCommonCharacterCount,
};
