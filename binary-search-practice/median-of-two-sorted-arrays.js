/* 
PROBLEM
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)). 
*/

/* UNDERSTAND THE PROBLEM
1. Can I restate the problem in my own words?
- Given two sorted arrays, once merged, return the median.

2. What are the inputs that go into the problem?
- Two sorted arrays, nums1 and nums2.

3. What are the outputs that should come from the solution to the problem?
- The median of the two merged arrays.

4. Can the outputs be determined from the inputs?
- Yes.

5. How should I label the important pieces of data that are a part of the problem?
- Label the first array, second array, their lengths, and final median.
*/

/* PSUEDOCODE
function findMedianSortedArrays(arr, arr2) {
    merge both arrays
    sort arrays
    find median of middle value(s)
}

function findMedianSortedArrays(arr1, arr2) {
    if arr is empty, return value of arr2
    if arr2 is empty, return value of arr1
    if last index in arr1 is less than first index in the second array, arr 3 is equal to push arr2 onto arr1
    if last index in arr2 is more than first index in second array, arr 3 is equal to push arr1 onto arr2

    
    return median of arr3
}
*/

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([1,2], [3]))
console.log(findMedianSortedArrays([3,4], [1,2]))