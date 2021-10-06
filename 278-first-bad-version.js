// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// LINEAR PSEUDOCODE
// var solution = function(isBadVersion) {
//     
//     return function(n) {
//     loop through array n times
//     if array contains bad version, return index of bad version
//     };
// };


// LINEAR SOLUTION
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         for (let i = 0; i < n; i++)  {
//             if (isBadVersion(i)) {
//                 return i;
//             }
//         }
//         return n;
//     };
// };

// ITERATIVE PSEUDOCODE
// var solution = function(isBadVersion) {
    
//     return function(n) {
//       create left variable
//       create right variable
//       while left is bigger than or equal to right
//         create mid variable
//         if middle of array isBadVersion(n)
//             return index of middle of array
//         else if middle of array is bigger than n
//             right equals mid minus 1
//         else 
//             left mid plus 1
//     };
// };

// ITERATIVE SOLUTION [TIME LIMIT EXCEEDED]
// // var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//      return function(n) {
//         let lower = 1;
//         let upper = n;
        
//         while (lower <= upper) {
//             let middle = lower + Math.floor((upper - lower) / 2)
            
//             if (isBadVersion(middle)) {
//                 upper = middle;
//             } else {
//                 lower = middle + 1;
//             }
//         }
        
//         return lower;
//     };
// };
