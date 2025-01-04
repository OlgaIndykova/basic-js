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
  if (!Array.isArray(arr)) throw Error('\'arr\' parameter must be an instance of the Array!');
  if (Array.isArray(arr)) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      switch (arr[i]) {
        case '--discard-prev':
          if (arr[i - 2] !== '--discard-next' && i > 0) {
            newArr.pop();
          };
          break;
        case '--double-prev':
          if (i > 0) {
            newArr.push(arr[i - 1]);
          };
          break;
        case '--double-next':
          if (i < arr.length - 1) {
            newArr.push(arr[i + 1]);
          };
          break;
        case '--discard-next':
          if (arr[i - 1] === '--discard-next' && i < arr.length - 1) {
            newArr.pop();
          };
          break;
        default:
          newArr.push(arr[i]);
      }
    }
    return newArr;
  };
}

module.exports = {
  transform
};
