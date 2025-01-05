const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let newStr = '';
  // let count = 0;
  // let singleArr = Array.from(new Set(arr));
  // for (let i = 0; i < singleArr.length; i += 1) {
  //   for (let j = 0; j < arr.length; j += 1) {
  //     if (singleArr[i] === arr[j]) {
  //       count += 1;
  //     };
  //   }
  //   newStr += count + singleArr[i] ;
  //   count = 0;
  // }
  // return newStr;
  let count = 1;
  let i;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    }
    else {
      count = count > 1? count : '';
      newStr += count + arr[i];
      count = 1;
    }  
  }
  return newStr;
}

module.exports = {
  encodeLine
};
