const { NotImplementedError } = require('../extensions/index.js');

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
  const s11 = s1.split('');
  const s22 = s2.split('');
  const res = [];

  if (s11.length <= s22.length) {
    s11.forEach((symbol) => {
      if (s22.includes(symbol)) {
        res.push(symbol);
        let indexOfSymbol = s22.indexOf(symbol);
        s22.splice(indexOfSymbol, 1)
      }
    });
  }
  else {
    s22.forEach((symbol) => {
      if (s11.includes(symbol)) {
        res.push(symbol);
        let indexOfSymbol = s11.indexOf(symbol);
        s11.splice(indexOfSymbol, 1)
      }
    });
  }
  return res.length;
}

module.exports = {
  getCommonCharacterCount
};
