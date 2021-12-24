// Problem Statement
// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function(s, arr) {
    // initialize subarray to measure
    let subArray = []

    // initialize minLength for testing
    let minLength = Infinity;

    // initialize window sum
    let windowSum = 0.0;

    // initialize window start
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd] // add next element

        // if item in array is bigger than s
        // return 1
        if (Math.max(...arr) >= s) {
            return 1

        // if window sum is less than or equal to s
        // add it to sub array
        } else if (windowSum < s) {
            subArray.push(arr[windowEnd])

        // if s is bigger than or equal to windowSum
        // return subarray length
        } else {
            // *original answer*
            // return subArray.length
            // shrink window as small as possible
            while (windowSum >= s) {
                minLength = Math.min(minLength, windowEnd - windowStart + 1);
                windowSum -= arr[windowStart];
                windowStart += 1;
            }
        }
    }
    
    if (minLength === Infinity) {
        return 0;
      }
      return minLength;
    //   return 0;
  };

//   tests
//   const result = smallest_subarray_with_given_sum(7, [2,1,5,2,8]);

//   const result = smallest_subarray_with_given_sum(7, [2,1,5,2,3,2])

  const result = smallest_subarray_with_given_sum(8, [3,1,1,3,1,7,6])

console.log(`Smallest subarray: ${result}`);

// solution adds items together until bigger than s, but doesn't find the smallest array

// EDUCATIVE ANSWER
// function smallest_subarray_with_given_sum(s, arr) {
//     let windowSum = 0,
//       minLength = Infinity,
//       windowStart = 0;
  
//     for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//       windowSum += arr[windowEnd]; // add the next element
//       // shrink the window as small as possible until the 'window_sum' is smaller than 's'
//       while (windowSum >= s) {
//         minLength = Math.min(minLength, windowEnd - windowStart + 1);
//         windowSum -= arr[windowStart];
//         windowStart += 1;
//       }
//     }
  
//     if (minLength === Infinity) {
//       return 0;
//     }
//     return minLength;
//   }

// time complexity: 0(n)
// space complexity: 0(1)