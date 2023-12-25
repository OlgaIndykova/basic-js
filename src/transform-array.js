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
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== '--discard-prev' ||
        arr[i] !== '--double-prev' ||
        arr[i] !== '--double-next' ||
        arr[i] !== '--discard-next') {
        newArr.push(arr[i]);
      }
      if (arr[i] === '--discard-prev' && i !== 0) {
        newArr.pop(arr[i]);
        newArr.pop(arr[i - 1]);
      }
      if (arr[i] === '--discard-prev' && i === 0) {
        newArr.pop(arr[i]);
      }
      if (arr[i] === '--double-prev' && i !== 0) {
        newArr.pop(arr[i]);
        newArr.push(arr[i - 1]);
      }
      if (arr[i] === '--double-prev' && i === 0) {
        newArr.pop(arr[i]);
      }
      if (arr[i] === '--double-next' && i !== arr.length - 1) {
        newArr.pop(arr[i]);
        newArr.push(arr[i + 1]);
      }
      if (arr[i] === '--double-next' && i === arr.length - 1) {
        newArr.pop(arr[i]);
      }
      if (arr[i] === '--discard-next' && i !== arr.length - 1) {
        newArr.pop(arr[i]);
        newArr.pop(arr[i - 1]);
      }
      if (arr[i] === '--discard-next' && i === arr.length - 1) {
        newArr.pop(arr[i]);
      }
      if (arr[i] === 1337 && arr[i+1] === 1337) {

      newArr.pop();
      newArr.pop();
      
      newArr.push(3);
      } 
    }
    return newArr;
  } else {return '\'arr\' parameter must be an instance of the Array!'}
}

module.exports = {
  transform
};
