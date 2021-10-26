/* 
Understand the Problem
1. Can I restate the problem in my own words?
- What closest rounded number multiplied by itself gives us x? 
2. What are the inputs that go into the problem?
- The squared output of the problem.
3. What are the outputs that should come from the solution to the problem?
- The rounded square root of x.  
4. Can the outputs be determined from the inputs?
- Yes.
5. How should I label the important pieces of data that are a part of the problem?
- start, end, middle
*/ 

// @param {number} x
// @return {number}

/* PSUEDOCODE

FUNCTION (x) 
    VARIABLE start equals 0
    VARITABLE end = last possible integer

    WHILE end is bigger than or equal to start
        VARIABLE middle equals start plus end divided by two
        VARIABLE num equals middle multipled by middle

        IF x is equal to two
            return one
        ELSEIF num is bigger than x
            end equals middle minus one
        ELSEIF num is smaller than x
            start equals middle plus one
        ELSE
            return middle
        ENDIF
    ENDWHILE
END FUNCTION

*/

 var mySqrt = function(x) {
    var start = 0;
    var end = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
        var middle = (start + end)/2;
        var num = middle * middle;

        if (x === num) {
            return middle;
        } else if (num > x) {
            end = middle - 1;
        } else if (num < x) {
            start = middle + 1;
        } 
    }
};

console.log(mySqrt(25))