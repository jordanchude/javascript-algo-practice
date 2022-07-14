// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n!
// n! permutations.



const find_permutation = function(str, pattern) {
    let answer = null;
    let windowStart = 0;
    let charCount = {};

    // loop through string
        // create right boundary for window
        // count distinct characters in current window
        // if characters in hash map are equal to the pattern
        // return true
        // else, expand right boundary by one unit
        // and iterate again through window
    // return false (if the pattern isn't found)

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str[windowEnd];
        
        // add new characters to hash map
        if (!(rightChar in charCount)) {
            charCount[rightChar] = 0;
        }

        // increment current character in hash map
        charCount[rightChar]++

        // if current character is in pattern 
        // and window size is less than or equal to pattern length
        // increase window size

        // if window size is three and all characters match pattern
        // return true

        // if character isn't in pattern, shift window forward one
        // shift sliding window forward one

        
    }

    return false;
  };