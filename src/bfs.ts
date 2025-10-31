import { graph } from "./static.js";
import type { Graph } from "./types.js";

interface BFSInput {
  graph: Graph;
  start: string;
  target: string;
}

function BFS({ graph, start, target }: BFSInput): boolean {
  // validation: check if the the start & target nodes are actually a part of the graph

  //   check if start & end are keys in the graph object
  if (!(start in graph) || !(target in graph)) {
    console.error(
      `Either the start node: ${start}, or target node: ${target} is not a part of the graph`
    );

    return false;
  }

  let queue: string[] = [start];
  //   the Set data structure ensures only distinct elements are stored, and it's more effecient for lookups O(1) especially with large data sets since it implements a hash table internally, which means it can compute the memory @ of the element using the hash function at a constant time
  let visited = new Set<string>([start]);

  while (queue.length > 0) {
    // shift(): if array is empty it returns undefined else it returns & removes the index 0 element of the array (used as dequeue)
    // we added the non-null assertion operator "!" to tell the TS compiler that the node is certainly not null or undefined because if the array had 0 elements the while loop would have exited earlier
    const node = queue.shift()!;

    // if dequeued node is the target => return true
    if (node === target) return true;

    // itterate over the node's neighbors
    // the empty array acts as a safety fallback in case graph[node] was undefined
    for (const neighbor of graph[node] || []) {
      // check if current neighbor is not visited
      if (!visited.has(neighbor)) {
        // mark enighbor as visisted and enqueue it
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}

const itemFound = BFS({ graph, start: "A", target: "E" });

console.log(itemFound);
