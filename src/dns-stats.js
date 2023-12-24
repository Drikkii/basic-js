const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const object = {};

  for (let domain of domains) {
    const domainLevelsArr = domain.split(".").reverse();
    domainLevelsArr.forEach((level, index) => {
      const dns = `.${domainLevelsArr.slice(0, index + 1).join(".")}`;
      object[dns] = object[dns] ?? 0;
      object[dns] += 1;
    });
  }
  return object;
}

module.exports = {
  getDNSStats,
};
