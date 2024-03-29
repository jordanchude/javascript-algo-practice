// Problem Statement: 
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Psuedocode
    // create window for search
    // loop through string
    // if current character is distinct, hold it in new string (or array) and add one to result
    // if current character isn't distinct, keep looping
    // if result is equal to k, return length of new string

const longest_substring_with_k_distinct = function(str, k) {
    // initialize variable with answer
    let result = 0;
    
    // create array of old string for loop
    let oldStr = str.split('');
    
    // create array for new string for result
    let newStr = [];

    // initialize beginning of window
    let windowStart = 0;

    // if (!newStr.includes(oldStr[windowEnd])) {
    //     newStr.push(oldStr[windowEnd]);
    //     result++;
    // }

    for (let windowEnd = 0; windowEnd <= oldStr.length - 1; windowEnd++) {

        while (result <= k) {
            if (!newStr.includes(oldStr[windowEnd])) {
                newStr.push(oldStr[windowEnd])
            } else {
                newStr.push(oldStr[windowEnd])
                result++
            }
        }
    }
    console.log(newStr);
    console.log(result)
    return newStr;
  };  

  // create window for search
    // loop through string
    // while result is less than k
    // if current character is distinct, hold it in new string (or array) and add one to result
    // if current character isn't distinct, keep looping
    // if result is equal to k, return return length of new string

// longest_substring_with_k_distinct("araaci", 2)
longest_substring_with_k_distinct("cbbebi", 3)
// longest_substring_with_k_distinct("cbbebi", 10)