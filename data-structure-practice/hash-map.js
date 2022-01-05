let string = "JordanWilliams"
let map = {}

// fill map
for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

   if (!(currentChar in map)) {
       map[currentChar] = 0;
   } 
   map[currentChar] += 1
}

// retrieve all characters with at least one duplicate
for (property in map) {
    if (map[property] <= 1) {
        delete map[property]
    }
}


console.log(map);

