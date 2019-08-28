/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  var strLen = s.length;
  var str = s;
  var int = 0;
  for (var i = 0; i < strLen; i++) {
    switch (str.charAt(i)) {
      case "I":
        if (str.charAt(i + 1) == "V") {
          int += 4;
          i++;
        } else if (str.charAt(i + 1) == "X") {
          int += 9;
          i++;
        } else {
          int++;
        }
        break;
      case "V":
        int += 5;
        break;
      case "X":
        if (str.charAt(i + 1) == "L") {
          int += 40;
          i++;
        } else if (str.charAt(i + 1) == "C") {
          int += 90;
          i++;
        } else {
          int += 10;
        }
        break;
      case "L":
        int += 50;
        break;
      case "C":
        if (str.charAt(i + 1) == "D") {
          int += 400;
          i++;
        } else if (str.charAt(i + 1) == "M") {
          int += 900;
          i++;
        } else {
          int += 100;
        }
        break;
      case "D":
        int += 500;
        break;
      case "M":
        int += 1000;
        break;
    }
  }
  return int;
};

console.log(romanToInt("IX"));