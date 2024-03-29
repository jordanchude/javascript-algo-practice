// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// PSUEDO CODE
// search = function(nums, target) {
//     loop through array max nums times 
//     if array contains target, return index 
//     else return -1
// }


// LOOP
var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1;
};

// INDEX OF
var search = function(nums, target) {
    return nums.indexOf(target);
}

// BINARY SEARCH
var search = function(nums, target) {
    let lower = 0;
    let upper = nums.length - 1;
    
    while (lower <= upper) {
        let middle = lower + Math.floor((upper - lower) / 2)
        
        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
    }
    
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))