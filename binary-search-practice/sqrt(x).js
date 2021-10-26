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
    IF x is smaller than 2
        RETURN x
    ENDIF

    VARIABLE start equals 2
    VARITABLE end equals last possible integer

    WHILE end is bigger than or equal to start
        VARIABLE middle equals math floor start plus end divided by two
        VARIABLE num equals middle multipled by middle

        IF num is bigger than x
            end equals middle minus one
        ELSE IF num is less than x
            start equals middle plus one
        ELSE
            return middle
        ENDIF
    ENDWHILE
    return end
END FUNCTION

*/

 var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }

    var start = 2;
    var end = Number.MAX_SAFE_INTEGER;

    while (start <= end) {
        var middle = Math.floor((start + end)/2);
        var num = middle * middle;

        if (num > x) {
            end = middle - 1;
        } else if (num < x) {
            start = middle + 1;
        } else {
            return middle;
        }
    }
    return end;
};

console.log(mySqrt(36))