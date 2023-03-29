# Description of the second task of the first laboratory work.

## The isAnagram function

The `isAnagram(firstString, secondString)` function checks if the two strings `firstString` and `secondString` are anagrams of each other.

### Parameters:

`firstString`: String, the first of the two strings to be checked.
`secondString`: String, the second of the two strings to be checked.
Returns:

true if `firstString` and `secondString` are anagrams of each other, false otherwise.

### Algorithm:

1. First, the function checks if `firstString` and `secondString` have the same length. If the lengths of the strings do not match, then they cannot be anagrams, so the function returns `false`.
2. The function converts both strings to arrays of characters, sorts them, and connects the characters back to strings.
3. The function compares the sorted strings and returns true if they match or `false` if they do not.

### Example of usage:
    isAnagram("listen", "silent"); // returns true
    isAnagram("hello", "handle"); // returns false

### Result:
![Example of isAnagram](/lab_1/images/example_isAnagram.jpeg)
![Result of isAnagram](/lab_1/images/result_of_isAnagram.jpeg)
