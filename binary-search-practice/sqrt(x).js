// Understand the Problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs?
// 5. How should I label the important pieces of data that are a part of the problem?

// @param {number} x
// @return {number}

 var mySqrt = function(x) {
    var start = 0;
    var end = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
        var middle = (start + end)/2
        var num = middle * middle;

        if (x < 2) {
            return x;
        } else if (num === x) {
            return middle;
            end = middle - 1;
        } else if (num < x) {
            start = middle + 1;
        }
    }
    return middle;
};

console.log(mySqrt(50))