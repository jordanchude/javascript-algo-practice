const length_of_longest_substring = function(str, k) {
    let maxLength = 0;
    let windowStart = 0;
    // let charCount = {};
    
    console.log(str);
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      
      // create the end of the sliding window
      let rightChar = str[windowEnd];
  
      let extraChar = 0;
      // loop through window
      for (let i = windowEnd; i < str.length; i++) {
        // rightChar
        if (rightChar !== str[i]) {
          extraChar++;
        }
  
        // console.log(extraChar);
  
        if (extraChar > k) {
          // console.log(i, windowEnd);
          maxLength = Math.max(maxLength, i - windowEnd);
          break;
        } else if (i === str.length - 1) {
          maxLength = Math.max(maxLength, 1 - windowEnd + 1)
        }
      }
    }
    
  
    return maxLength;
  };
  
  // Input: String="aabccbb", k=2
  // Output: 5
  // Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
  