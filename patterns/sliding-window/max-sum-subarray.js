const max_sub_array_of_size_k = function(k, arr) {
    // array to store max sub array
    let result = 0;

    // initialize window sum to compare
    let windowSum = 0.0

    //initialize beginning of search window
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd <= arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // add next element

        if (windowEnd >= k - 1) { // slide window if k isn't hit
            
            // if current window is bigger than previous biggest window
            // assign windowSum to result
            if (windowSum >= result) {
                result = windowSum
            }

            // Math.max alternative
            // result = Math.max(maxSum, windowSum)
            
            windowSum -= arr[windowStart] // subtract outgoing element
            windowStart += 1; // slide window ahead
        }
    }

    return result;
};


const result = max_sub_array_of_size_k(3, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Subarray with maximum sum is: ${result}`);

// Time Complexity: O(N)
// Space Complexity: O(1)