// DEPTH FIRST SEARCH
const depthFirstPrint = (graph, source) => {
    // initialize starting node with source node
    const stack = [ source ];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        // iterate through neighbors of current node
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstPrint(graph, 'a'); // abdfce
// breadthFirstPrint(graph, 'a') // acbedf