/*
# Given an unsorted list containing appointment dates (represented as an integer), determine the date at which we had the highest amount of visits in a single day.
  
# test_case_one = [14, 14, 1, 2] [[14, 14], [1], [2]]
# test_case_two = [2, 1]
# test_case_three = [10, 10, 10, 1, 2]
# test_case_four = [4, 4, 4, 2, 2, 1]
  
# find_most_appointment_day(test_case_one) == 14
# find_most_appointment_day(test_case_two) == either 1 or 2
*/

// pseudocode
// loop through the array
// count the amount of each entry
// return the entry with the most amount

let find_most_appointment_day = (arr) => {
    let newArr = [];
    
   // pseudocode
   // loop through the array
   // if the current element is not in the newArr
   // create an array, add it newArr
   
   for (let i = 0; i < arr.length; i++) {
       if (newArr.length < 1) {
           newArr.push([arr[i]])
           continue;
       }
       
       // take the current element of arr
       // compare it to items in the newArrs arrays
       // if the current element is in any of the arrays
       // add it to the relevant array
       // if not, create a new array and push it to newArr
       
       // check each length of subarray and return the first item in the longest subarray
   }
   
   return newArr;
}

console.log(find_most_appointment_day([14,14,1,2]))