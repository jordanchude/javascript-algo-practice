// JUMPING ON THE CLOUDS

/* 
Input
1. Array of binary integers describing clouds

Outputs
1. Integer (minimum number of jumps from first to last cloud)

Constraints
1. N must be between 2 and 100
2. c[i] is either 0 or 1
3. c[0] is equal to c[n - 1] = 0

Pseudocode
PROCEDURE jumpingOnClouds(c)
    INITIALIZE steps equal to zero
    FOR loop through array while initializer is less than or equal to length of c
        IF c[i] and c[i-1] is equal to zero
            add one to steps
        ELSEIF c[i] is equal to zero and c[i-1] is equal to one
            add one to steps
        ELSEIF c[i] is equal to one
            steps
        ENDIF
    ENDLOOP
    RETURN steps
ENDPROCEDURE
*/

function jumpingOnClouds(c) {
    let steps = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] == 0 && c[i+1] == 0 && c[i+2] == 0) {
            i+=1
            steps++;
        }
        else if (c[i] == 0 && c[i+1] == 0) {
            steps++;
        }
        else if (c[i] == 0 && c[i+1] == 1) {
            steps++;
        }
        else if (c[i] == 1) {
            steps = steps;
        }
    }
    return steps;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
console.log(jumpingOnClouds([0,0,0,0,1,0]))
