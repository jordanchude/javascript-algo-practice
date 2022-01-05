let string = "JordanWilliams"
let map = {}

for (let i = 0; i < string.length; i++) {
   if (!(string[i] in map)) {
       map[string[i]] = 0;
   } 
   map[string[i]] += 1
}

console.log(map);