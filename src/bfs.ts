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

  //   initialize the queue with the start node
  const queue: string[] = [start];
  //   the Set data structure ensures only distinct elements are stored, and it's more effecient for lookups O(1) especially with large data sets since it implements a hash table internally, which means it can compute the memory @ of the element using the hash function at a constant time
  const visited = new Set<string>([start]);

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

// const itemFound = BFS({ graph, start: "A", target: "E" });

// console.log(itemFound);

// what to chnage in a bfs to return the shortest path from start to target??
// you must track the parent of each node in a Map
// once target is found, track back it's parent tree till you reach the starting node again

interface BFSWithPathReturn {
  path: string[];
  cost: number;
}

function BFSWithPath({
  graph,
  start,
  target,
}: BFSInput): BFSWithPathReturn | null {
  // validation: check if the the start & target nodes are actually a part of the graph

  //   check if start & end are keys in the graph object
  if (!(start in graph) || !(target in graph)) {
    console.error(
      `Either the start node: ${start}, or target node: ${target} is not a part of the graph`
    );

    return null;
  }

  //   initialize the queue & visited list with the start node
  const queue: string[] = [start];
  const visited = new Set<string>([start]);
  // initialize the parents tracking Map
  const parentsMap = new Map<string, string | null>([[start, null]]);

  while (queue.length > 0) {
    // shift(): if array is empty it returns undefined else it returns & removes the index 0 element of the array (used as dequeue)
    // we added the non-null assertion operator "!" to tell the TS compiler that the node is certainly not null or undefined because if the array had 0 elements the while loop would have exited earlier
    const node = queue.shift()!;

    // if dequeued node is the target:
    if (node === target) {
      // we will re-construct the path by tracking the parent of each node starting from the target
      // the current var shouldn't take an "undefined" value, but since the Map.get() method could return undefined we will add it here for the TS compiler
      let current: string | null | undefined = target;
      let path: string[] = [];

      while (typeof current === "string") {
        // as long as the current node is of type string we add it to the path until we reach the starting node with a "null" parent, that's when the excution flow breaks out of the while loop's scope
        path = [current, ...path];

        current = parentsMap.get(current);
      }

      // we return the path and cost, cost === number of edges === number of nodes in the path - 1
      return { path, cost: path.length - 1 };
    }

    // itterate over the node's neighbors
    // the empty array acts as a safety fallback in case graph[node] was undefined
    for (const neighbor of graph[node] || []) {
      // check if current neighbor is not visited
      if (!visited.has(neighbor)) {
        // mark enighbor as visisted, track it's parent and enqueue it
        visited.add(neighbor);
        queue.push(neighbor);
        parentsMap.set(neighbor, node);
      }
    }
  }

  return null;
}

const itemFound = BFSWithPath({ graph, start: "A", target: "I" });

console.log(itemFound);
