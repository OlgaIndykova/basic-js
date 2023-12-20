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
function repeater(/* str, options */) {
  // let arr = [];
  // let newStr;
  // if ('repeatTimes' in options) {
  //   // newStr = arr.fill(str, 0, 3).join('+')
  //   arr.length = options[repeatTimes];
  //   arr = arr.fill(str, 0);
  //   newStr = arr.join('+');
  // };
  // if (options.repeatTimes == true && options.separator == true) {
  //   // arr.lenth = options.repeatTimes;
  //   for (i = 0; i < options.repeatTimes; i += 1) {
  //     arr.push(str);
  //   }
  //   newStr = arr.join(options.separator)};
  // }
  // // if (options.repeatTimes && options.separator) {return str.repeat(options.repeatTimes).join(options.separator)};
  // // const newStr = (str + options.addition.repeat(options.additionRepeatTimes).join(options.additionSeparator)) + .repeat(options.repeatTimes).join(options.separator);
  // // return newStr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  repeater
};
