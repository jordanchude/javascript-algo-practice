/* 
REPEAT THE PROBLEM
- Given a string and an integer that represents how many times the string is repeated, how many a's are there in the newly repeated string?

INPUTS
1. A string
2. An integer

OUTPUTS
1. An integer representing how many a's are in the repeated string

IS IT POSSIBLE?
- Yes

HOW SHOULD I LABEL THE DATA?
- amountOfA = integer representing how many a's are in repeated string

BASE CASES/QUESTIONS
1. What happens when there are no a's in the repeated string?
2. Is there an upper limit for how many times the string can repeat?
3. What does the user see if they enter an invalid number (e.g. a negative number)?

PSUEDOCODE
function repeatedString(s, n) {
    initialize counter
    repeat the characters in s n times
    count a's in new string
    return counter
}

PROCEDURE repeatedString(s, n)
    INITIALIZE amountOfA 
    INITIALIZE newString array

    LOOP through s
        IF current index is above length of s
            subtract length of s for valid index
            add current index to newString array
        ENDIF
    ENDLOOP

    FOR LOOP through newString array for length of newString
        IF current index is equal to "a"
            add one to amountOfA
        ENDIF
    END LOOP
    return amountOfA
ENDPROCEDURE

*/

function repeatedString(s, n) {
    s = s.split('');
    console.log(s);
    let amountOfA = 0;
    let newString = [];
    
//    for (let i = 0; i < n; i++) {
//        if (i > s.length) {
//             newString.push(s);
//        }
//    }

    // console.log(newString);
}

console.log(repeatedString('aba', 10))