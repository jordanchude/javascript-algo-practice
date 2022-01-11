// PROBLEM STATEMENT

// We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

// Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

// EXAMPLE
// Input: [3, 1, 5, 4, 2]
// Output: [1, 2, 3, 4, 5]

// EXAMPLE 2
// Input: [2, 6, 4, 3, 1, 5]
// Output: [1, 2, 3, 4, 5, 6]

// EXAMPLE 3
// Input: [1, 5, 6, 4, 3, 2]
// Output: [1, 2, 3, 4, 5, 6]

const cyclic_sort = function(nums) {
    // psedocode
    // if current index isn't in the correct place
    // swap it with the correct index

    // initialize counter
    let i = 0;

    // loop through nums array
    while (i < nums.length) {
        // initialize variable to compare current index
        const j = nums[i] - 1;
        console.log(nums[i], nums[j])

        // if current number at the correct index
        // i.e. if number isn't one higher than its index
        // swap the number that's one higher than its index with it
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            // increment
            i++;
        }
    }
    return nums;
  }
  
  
  console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
  console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
  console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)