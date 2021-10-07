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

1ST PSUEDOCODE
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

// 1ST SOLUTION
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

/* 2ND PSUEDOCODE
FUNCTION  searchInsert EQUALS function(nums, target) {
    LET left EQUAL 0
    LET right EQUAL nums.length - 1

    WHILE  left is bigger than right
        LET middle EQUAL left + ROUNDED right MINUS left DIVDED BY 2

        IF middle index equals target
            return middle index
        ELSE IF target is lower than middle
            right equals middle - 1
        ELSE 
            left equals middle + 1
    END WHILE

    insert target into array
    sort array
    return index of target
};

*/

// 2ND SOLUTION
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = left + Math.floor((right - left / 2))

        if (nums[middle] == target) {
            return nums.indexOf(target);
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    nums.push(target);
    nums.sort(function(a, b) {return a-b})
    return nums.indexOf(target);
};

console.log(searchInsert([1,3,5,6], 5))