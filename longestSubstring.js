/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var temp = s.substring(0, 1);
  var strLen = s.length;
  var max = 0;
  if (s === "") {
    return 0;
  } else if (s.length == 1) {
    return 1;
  } else {
    for (var i = 0; i < strLen; i++) {
      if (temp.includes(s.substring(1, 2))) {
        temp = temp.substring(temp.lastIndexOf(s.substring(1, 2)) + 1, temp.length);
      }
      s = s.substring(1, s.length);
      temp += s.substring(0, 1);
      if (temp.length > max) {
        max = temp.length;
      }
    }
    return max;
  }
}

console.log(lengthOfLongestSubstring("abcabcbb"));