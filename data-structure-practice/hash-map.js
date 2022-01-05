let string = "JordanWilliams"
let map = {}

for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

   if (!(currentChar in map)) {
       map[currentChar] = 0;
   } 
   map[currentChar] += 1
}

console.log(map);