// Problem Statement
// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function(s, arr) {
    // initialize subarray to measure
    let subArray = []

    // initialize window sum
    let windowSum = 0.0;

    // initialize window start
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]

        if (Math.max(...arr) >= s) {
            return 1
        } else if (windowSum <= s) {
            subArray.push(arr[windowEnd])
        } else {
            return subArray.length;
        }
    }
    
    return 0;
  };

  // tests
//   const result = smallest_subarray_with_given_sum(7, [2,1,5,2,8]);

//   const result = smallest_subarray_with_given_sum(7, [2,1,5,2,3,2])

  const result = smallest_subarray_with_given_sum(8, [3,4,1,1,6])

console.log(`Smallest subarray: ${result}`);