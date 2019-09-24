/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  for (var i = 0; i < address.length ; i++) {
    if (address.charAt(i)=='.') {
      address = address.substring(0, i) + "[" + address.substring(i, i + 1) + "]" + address.substring(i + 1, address.length);
      i +=2;
    }
  }
  return address;
}

console.log(defangIPaddr("1.1.1.1"));