// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

/*
Inputs: sorted array, target value
Outputs: Location of target value in sorted array

PSEUDOCODE
FUNCTION searchInsert EQUALS function(nums, target) {
    FOR LOOP through array
        IF target is in array 
            return index
    END LOOP 
    
    insert target into array
    sort array
    return index of target
};

*/

// INEFFICIENT SOLUTION
// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//        if (nums[i] == target) {
//            return i;
//        }
//     }
//     nums.push(target);
//     nums.sort(function(a, b) {return a-b})
//     return nums.indexOf(target);
// };

console.log(searchInsert([1,3,5,6], 5))