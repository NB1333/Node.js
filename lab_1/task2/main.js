// Task 2
function isAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }

  const charCount = {};

  for (const element of firstString) {
    const char = element;
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const element of secondString) {
    const char = element;
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("hello", "olleh")); // true
console.log(isAnagram("hello", "olle")); // false
console.log(isAnagram("hello", "handle")); // false
