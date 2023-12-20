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
function encodeLine(/* str */) {
  // const arr = str.split('');
  // let newArr = [];
  // let count = 0;
  // for (let i = 0; i < arr.length; i += 1) {
  //   while (arr[i+1] = arr[i]) {
  //     count += 1;
  //     arr[i] = arr[i+1];
      
  //   }
  // newArr.push(count).push(arr[i]);
  // }
  // return newArr.join('');
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
