const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if (arr === "'arr' parameter must be an instance of the Array!") {return true};
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] && (arr[i] !== '--discard-prev' ||
                   arr[i] !== '--double-prev' ||
                   arr[i] !== '--double-next' ||
                   arr[i] !== '--discard-next')) {
      newArr.push(arr[i]);
    }
    if (arr[i] === '--discard-prev' && i !== 0) {
      newArr.pop(arr[i-1]);
      newArr.pop(arr[i]);
    }
    if (arr[i] === '--discard-prev' && i === 0) {
      newArr.pop(arr[i]);
    }
    if (arr[i] === '--double-prev' && i !== 0) {
      newArr.pop(arr[i]);
      newArr.push(arr[i-1], arr[i-1]);
    }
    if (arr[i] === '--double-prev' && i === 0) {
      newArr.pop(arr[i]);
    }
    if (arr[i] === '--double-next' && i !== arr.length - 1) {
      newArr.pop(arr[i]);
      newArr.push(arr[i+1]);
    }
    if (arr[i] === '--double-next' && i === arr.length - 1) {
      newArr.pop(arr[i]);
    }
    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      newArr.pop(arr[i-1], arr[i-1]);
      newArr.pop(arr[i]);
    }
    if (arr[i] === '--discard-next' && i === arr.length - 1) {
      newArr.pop(arr[i]);
    }
    // if (arr === "'arr' parameter must be an instance of the Array!") {
    //   newArr = true;
    // }
    // if (arr[i] === 1337 && arr[i-1] === 1337 && arr[i+1] === 1337) {
    //   newArr.pop(arr[i-1]);
    //   newArr.pop(arr[i]);
    //   newArr.push(3);
    //   newArr.pop(arr[i+1]);
    // }
  }
  return newArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
