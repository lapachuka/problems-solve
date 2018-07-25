/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (isPalindrome(s)) {
    return s;
  }

  if (s.length === 1) {
    return s;
  }

  let strPointer = 1;
  let counter = 0;
  let polydrome = s[0];
  let hasPolydrome = false;

  while (strPointer <= s.length) {
    hasPolydrome = false;
    for (let i = 0; i < s.length - strPointer + 1; i++) {
      if (isPalindrome(s.substring(i, i + strPointer))) {
        polydrome = s.substring(i, i + strPointer);
        hasPolydrome = true;
        let start = i - 1;
        let end = i + strPointer + 1;
        while (isPalindrome(s.substring(start, end))) {
          polydrome = s.substring(start, end);
          start--;
          end++;
          strPointer++;
        }
      }
    }

    if (hasPolydrome) {
      counter = 0;
    } else {
      counter++;
      if (counter === 2) {
        return polydrome;
        break;
      }
    }
    strPointer++;
  }

  return polydrome;

  function isPalindrome(str) {
    if (str.length < 0) {
      return false;
    }

    let res = true;
    let arrX = str.split('');

    for (let i = 0; i < Math.floor(arrX.length / 2); i++) {
      if (arrX[i] !== arrX[arrX.length - i - 1]) {
        res = false;
        break;
      }
    }

    return res;
  }
};

var str = `cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj`;
var strP = 'abba';

console.time('longestPalindrome');
console.log(longestPalindrome(str));

console.timeEnd('longestPalindrome');
