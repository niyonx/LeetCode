/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0)
    return false
  var strNum = x.toString();
  var length = strNum.length;
  var reverse = "";
  for (var i = 0; i < length; i++) {
    reverse += strNum.substring(strNum.length - 1, strNum.length);
    strNum = strNum.substring(0, strNum.length - 1);
  }
  if (x.toString() === reverse)
    return true;
  else
    return false;
};

console.log(isPalindrome(1));