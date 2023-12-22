const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let newArr = [1];
    for (let el of arr) {
      if (Array.isArray(el)) {
        this.calculateDepth(el);
        newArr.push(1);
      }
      // else newArr.push(1);
    }
    console.log(newArr);
    return newArr.length;
  }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // }
}

module.exports = {
  DepthCalculator
};
