const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error();
  } else if (
    arr === '' ||
    arr === undefined ||
    arr === null
  ) {
    throw new Error();
  } else if (arr.length === 0) {
    return arr
  } else {
    if (
      arr[0] === '--discard-next' ||
      arr[0] === '--discard-prev' ||
      arr[0] === '--double-next' ||
      arr[0] === '--double-prev'
    ) {
      let result = []
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case ('--discard-next'):
            i++
            break
          case ('--discard-prev'):
            if (arr[i - 2] === '--discard-next') {
              break
            }
            result.pop()
            break
          case ('--double-prev'):
            if (arr[i] === '--double-prev') {
              if (i === 0 || arr[i - 2] === '--discard-next') {
                break
              } else {
                result.push(arr[i - 1])
              }
              break
            }
          case ('--double-next'):
            if (i === arr.length - 1) {
              break
            } else {
              result.push(arr[i + 1])
              break
            }
          default:
            result.push(arr[i])
        }
      }
      //console.log(result)
      return result
    } else {
      arr.forEach((i, index, a) => {
        if (i === '--double-prev') {
          if (index !== 0) {
            arr.splice(index, 1, arr[index - 1])
          } else {
            arr.splice(index, 1)
          }
        };
      });
      arr.forEach((i, index, a) => {
        if (i === '--double-next') {
          if (index !== a.length - 1) {
            arr.splice(index, 1, arr[index + 1])
          } else {
            arr.splice(index, 1)
          }
        };
      });
      arr.forEach((i, index, a) => {
        if (i === '--discard-next') {
          if (index !== a.length - 1) {
            arr.splice(index, 3)
          } else {
            arr.pop()
          }
        };
      });
      arr.forEach((i, index, a) => {
        if (i === '--discard-prev') {
          if (index !== 0) {
            arr.splice(index - 1, 2) // -1 2
          } else {
            arr.splice(index, 1)
          }
        };
      });
      //console.log(arr)
      return arr
    }
  }
};