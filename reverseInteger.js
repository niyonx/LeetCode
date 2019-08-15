/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var sign = 1;
  if (x < 0)
    var sign = -1;
  var xString = x.toString();
  var strLen = xString.length;
  var reverse = "";
  for(var i = 0; i < strLen; i++){
    reverse = reverse + "" + xString.slice(-1) ;
    xString = xString.substring(0,xString.length-1);
  }
  reverse = parseInt(reverse)*sign;
  if(reverse > Math.pow(2,31)-1 || reverse < -Math.pow(2,31))
    return 0;
  return reverse;
};