// DEPTH FIRST SEARCH (ITERATIVE)
// stack: remove from end, add to end (LIFO)
// const depthFirstPrint = (graph, source) => {
//     // initialize starting node with source node
//     const stack = [ source ];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);

//         // iterate through neighbors of current node
//         for (let neighbor of graph[current]) {
//             stack.push(neighbor);
//         }
//     }
// }

// DEPTH FIRST SEARCH (RECURSIVE)
// const depthFirstPrint = (graph, source) => {
   
//     console.log(source);

//     // base case isn't explicit
//     // base case is if the array to iterate is empty
//    for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor)
//    }
// }

// BREADTH FIRST SEARCH
// queue: remove from front, add to back (FIFO)
const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0) {
        // remove first element
        let current = queue.shift();
        console.log(current)

        for (let neighbor of graph[current]) {
            // add neighors to end of queue
            queue.push(neighbor);
        }
    }
}


// Why Use A HashMap to represent a graph?
// constant time
// lookup data structure
// key value pairings
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depthFirstPrint(graph, 'a'); // abdfce
breadthFirstPrint(graph, 'a') // acbedf