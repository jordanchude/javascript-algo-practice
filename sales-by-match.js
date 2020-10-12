//SALES BY MATCH
/*
Input
1. Length of array - n
2. Array with matches

Output
1. Number of pairs (integer)

Constraints
1. N is between 1 and 100
2. Socks are between 1 and 100 where i is less than n andn bigger than 0

Pseudocode
PROCEDURE sockMerchant(n, ar)
    INITIALIZE pairs equal to zero
    SORT ar
    FOR loop through ar
        IF current index is the same as the next index
            add one to pairs
            skip to index two indices away
        ELSE
            pairs is equal to pairs
        ENDIF
    ENDLOOP
ENDPROCEDURE
*/

function sockMerchant(n, ar) {
    let pairs = 0;
    ar = ar.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
            i++;
        } else {
            continue;
        }
    }
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))