/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0)
    return false;
  var number = x;
  var reverse = 0;
  var mult = 10;
  var digits = 0;
  while (number != 0) {
    number = number - number % mult;
    mult *= 10;
    digits++;
  }
  number = x;
  mult = 10;
  while (number != 0) {
    reverse += (number % mult) * Math.pow(10, digits - 1);
    number = number - number % mult;
    mult *= 10;
    digits = digits - 2;
  }
  if (reverse == x)
    return true;
  else
    return false;
};

console.log(isPalindrome(1001));