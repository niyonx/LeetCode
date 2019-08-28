/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var str = s;
  var tempStr;
  var palinStr = s.substring(0, 1);
  var lenStr = s.length;
  if (s.length == 1) {
    return s;
  }
  for (var i = 0; i < lenStr; i++) {
    tempStr = "";
    if (palinStr.length > lenStr - i)
      return palinStr;
    for (var j = i; j < lenStr; j++) {
      tempStr += str.substring(j, j + 1);
        if (tempStr.length > 1 && tempStr.length > palinStr.length && tempStr.substring(0, tempStr.length / 2) == tempStr.substring((tempStr.length / 2) + tempStr.length % 2, tempStr.length).split("").reverse().join("")) {
          palinStr = tempStr;
        }
    }
  }
  return palinStr;
};



console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));