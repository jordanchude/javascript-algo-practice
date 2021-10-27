/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */

/* 
Understand the Problem
1. Can I restate the problem in my own words?
In an unsorted array based on a pivot value, is target in nums?

2. What are the inputs that go into the problem?
- An unsorted array based on a pivot value.
- A target value to check our array for.

3. What are the outputs that should come from the solution to the problem? 
The index of the target value in the nums array.

4. Can the outputs be determined from the inputs?
Yes.

5. How should I label the important pieces of data that are a part of the problem?
Label the pivot, the target, and the num as their own variables.
*/ 

/* PSUEDOCODE
    FUNCTION (nums, target)
        find pivot value
        IF target is equal to pivot index in nums
            return pivot
        ELSE IF target is bigger than end of array
            binary search above pivot
        ELSE IFtarget is bigger than pivot value minus one
            binary search below pivot
        ENDIF 
        return -1
    ENDFUNCTION
*/
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    // find pivot
    var pivot = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            pivot = i;
        }
    }
    
    // binary searches
    while (start <= end) {
        var middle = null;
        if (target === nums[pivot]) {
            return pivot;
        } else if (target > nums[nums.length -1]) {
            end = pivot;
            middle = Math.floor((start + end)/2)
            console.log(start, middle, end);
            if (target === nums[middle]) {
                return nums[middle];
            } 
            // else if (target > nums[middle]) {
            //     start = middle + 1;
            // } else {
            //     end = middle - 1;
            // }
        }
    }
};

console.log(search([4,5,6,7,0,1,2], 5));