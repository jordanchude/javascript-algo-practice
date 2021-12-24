// Problem Statement: 
// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// Psuedocode
    // create window for search
    // loop through string
    // while result is less than k
    // if current character is distinct, hold it in new string (or array) and add one to result
    // if current character isn't distinct, keep looping
    // if result is equal to k, return return length of new string

const longest_substring_with_k_distinct = function(str, k) {
    // initialize variable with answer
    let result = 0;
    
    // create array of old string for loop
    let oldStr = str.split('');
    
    // create array for new string for result
    let newStr = [];

    return -1;
  };  