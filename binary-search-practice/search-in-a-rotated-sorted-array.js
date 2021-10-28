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
        ELSE IF target is bigger than pivot value minus one
            binary search below pivot
        ENDIF 
        return -1
    ENDFUNCTION
*/

// FIRST SOLUTION
// var search = function(nums, target) {
//     var start = 0;
//     var end = nums.length - 1;

//     // find pivot
//     var pivot = null;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[i+1]) {
//             pivot = i;
//         }
//     }

//     // make pivot start or end
//     if (target === nums[pivot]) {
//         return pivot;
//     } else if (target > nums[nums.length - 1]) {
//         end = pivot;
//     } else {
//         start = pivot;
//     }

//     console.log(nums[start], nums[end])
//     // binary search
//     while (start <= end) {
//         var middle = Math.floor((start + end)/2);
//         console.log(nums[middle])
//         if (target === nums[end]) {
//             return end;
//         }

//         if (target === nums[middle]) {
//             return middle;
//         } else if (target > nums[middle]) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return -1;
// };

/* OPTIMIZED PSUEDOCODE
FUNCTION (nums, target)
    VARIABLE start equals zero
    VARIABLE end equals length of array minus one

    WHILE start is bigger than or equal to end
        VARABLE middle equals start plus end minus start divided by two

        IF middle of nums array equals target
            return middle
        ELSEIF middle of nums array is bigger than or equal to start
            IF target is bigger than or equal to start and target is less than middle
                end equals mid minus one
            ELSE
                start equals mid plus one
            ENDIF
        ELSE
            IF target is less than or equal to end and target is bigger than mid
                start = mid + 1
            ELSE
                end = mid - 1
            ENDIF
        ENDIF
    ENDWHILE
    RETURN negative one
END FUNCTION
*/ 

// OPTIMIZED SOLUTION
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while (start <= end) {
        var mid = Math.floor((start + end) /2);

        if (target === nums[mid]) {
            return mid;
        } else if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target <= nums[end] && target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};


console.log(search([5,1,3], 3));