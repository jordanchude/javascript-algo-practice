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