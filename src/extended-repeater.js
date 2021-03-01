module.exports = function repeater(str, options) {
  let resultStr = '', gapAddition = '';
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes !== undefined) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.additionSeparator !== undefined) {
          gapAddition += options.addition + options.additionSeparator;
        } else {
          gapAddition += options.addition + '|';
        }
      }
    } else {
      for (let i = 0; i < 1; i++) {
        gapAddition += options.addition + options.additionSeparator;
      }
    }
  }
  if (options.additionSeparator !== undefined) {
    gapAddition = gapAddition.substring(0, gapAddition.length - options.additionSeparator.length);
  } else {
    gapAddition = gapAddition.substring(0, gapAddition.length - 1);
  }
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.separator !== undefined) {
        resultStr += str + gapAddition + options.separator;
      } else {
        resultStr += str + gapAddition + '+';
      }
    }
  } else {
    for (let i = 0; i < 1; i++) {
      if (options.separator !== undefined) {
        resultStr += str + gapAddition + options.separator;
      } else {
        resultStr += str + gapAddition + '+';
      }
    }
  }
  if (options.separator !== undefined) {
    resultStr = resultStr.substring(0, resultStr.length - options.separator.length);
  } else {
    resultStr = resultStr.substring(0, resultStr.length - 1);
  }
  return resultStr;
};
