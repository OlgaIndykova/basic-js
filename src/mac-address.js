const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let str = n.split('-').join('');
  let res = parseInt(str, 10);
  if(Number(res)) return true;
  else return false;
  // if (!n || typeof n !== 'string') {
  //   return false;
  // } else {
  //   for (let i = 0; i < n.length; i += 1) {
  //     if ((0 <= +n[i] < 10) && (n[i] === 'A' || n[i] === 'B' || n[i] === 'C' || n[i] === 'D' || n[i] === 'E' || n[i] === 'F' || n[i] === '-')) {
  //       return true;
  //     } else return false;
  //   }
  // }
  }
  module.exports = {
    isMAC48Address
  };
