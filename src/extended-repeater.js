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
  const repeat = options.repeatTimes;
  const separ = options.separator;
  const add = options.addition;
  const addRepeat = options.additionaRepeatTimes;
  const addSepar = options.additionSeparator;
  let arr = [];
  let newArr = [];
  let newStr;
  let i;
  if (!repeat && !addRepeat) {
    arr.push(str, add);
    newStr = arr.join('');
    return newStr;
  }

  if (!repeat) {
    for(i = 0; i < addRepeat; i += 1){
      arr.push(add, addSepar);
    }
    arr.splice(arr.length - 1, 1);
    newStr = arr.join('');
    return newStr;
  }

  if (!separ && !add && !addRepeat && !addSepar) {
    for(i = 0; i < repeat; i += 1) {
      arr.push(str); 
    };
    newStr = arr.join('+');
    return newStr;
  }

  if (!add && !addRepeat && !addSepar) {
    for(i = 0; i < repeat; i += 1) {
      arr.push(str, separ); 
    };
    arr.splice(arr.length - 1, 1);
    newStr = arr.join('');
    return newStr;
  };
  
  if (!separ && !addRepeat && !addSepar) {
    for(let i = 0; i < repeat; i += 1) {
      arr.push(str, add);
      arr.join('');
    };
    newStr = arr.join('+');
    return newStr;
  };

  if(!separ && !addSepar) {
    for(i = 0; i < repeat; i += 1) {
      for(let j = 0; j < addRepeat; j += 1) {
        arr.push(add);
      }
      newStr = str + arr.join('|');
      newArr.push(newStr);
    }
    newStr = newArr.join('+');
    return newStr;
  }
  if(!addSepar) {
    for(i = 0; i < repeat; i += 1) {
      for(let j = 0; j < addRepeat; j += 1) {
        str = str.concat(add);
        arr.push(str);
      }
      // arr.splice(arr.length - 1, 1);
      // newStr = arr.join('');
      newArr.push(arr, separ);
    }
    newArr.splice(arr.length - 1, 1);
    newStr = newArr.join('');
    return newStr;
  } else {
    for(let j = 0; j < repeat; j += 1) {
      for(i = 0; i < addRepeat; i += 1) {
        arr.push(add, addSepar);
      };
      arr.splice(arr.length - 1, 1);
      arr[0] = str;
      newStr = arr.join('');
      newArr.push(newStr);
    }
    newArr.splice(arr.length - 1, 1)
    newStr = newArr.join('');
    return newStr;
  };
}
module.exports = {
  repeater
};
