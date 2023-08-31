/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseString = x.toString().split('').reverse().join('')
    // return reverseString
  if (x.toString() === reverseString) {
    return true
  } else {
    return false
  }
};
