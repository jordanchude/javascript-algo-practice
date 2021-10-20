// @param {number} x
// @return {number}

 var mySqrt = function(x) {
    var start = 0;
    var end = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
        var middle = Math.floor((start + end)/2)
        var num = middle * middle;

        if (x < 2) {
            return x;
        } else if (num > x) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
};

console.log(mySqrt(16))