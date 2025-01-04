const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = options.repeatTimes? options.repeatTimes : 1;
  const separ = options.separator? options.separator : '+';
  const add = options.addition !== undefined? options.addition : '';
  const addRepeat = options.additionRepeatTimes;
  const addSepar = options.additionSeparator? options.additionSeparator : '|';
  let subStr;
  let newStr;
  let arr = [];
  let newArr = [];
  let i;
  if (addRepeat) {
    for (i = 0; i < addRepeat; i += 1) {
      arr.push(String(add));
    }
    subStr = arr.join(`${addSepar}`);
  }
  if (repeat) {
    for (i = 0; i < repeat; i += 1) {
      if (subStr) {
        newArr.push(String(str) + subStr);
      } else newArr.push(String(str) + add); 
    }
    newStr = newArr.join(`${separ}`);
  }
  return newStr;
}
module.exports = {
  repeater
};
