function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
