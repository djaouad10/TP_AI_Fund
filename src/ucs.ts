// my main goal is finding the lowest cost path + it's cost

// # my entities are
//  -nodes
//  -paths (set of nodes)

// # the relationships are
//  -a cost going from current node to neighbor node

// # my constraints are:
//  -I must start from start_node and reach target_node by finding the lowest cost path

// # how am I going to do that?

//  -I must keep track of the lowest cost path explored so far, which means for every node I have to calculate the total
//  cost it will take to reach that node starting from start_node. and then each time I have to take the lowest cost
//  path and calculate the cost of the new paths to it's neighbors.

//  -so what I'm essentially doing here is that I'm exploring all the possible paths in my weighted graph, and
//  the exploration order is from lowest cost to highest cost, so my goal then is making an algorithm that takes
//  a weighted graph and explores all possible paths from lowest cost to highest cost starting from start_node until
//  it finds the target_node so it returns the currently explored path and it's cost

import { weightedGraph } from "./static.js";
import type { WeightedGraph } from "./types.js";

interface UCSInput {
  weightedGraph: WeightedGraph;
  start: string;
  target: string;
}

type PathCostKV = { path: string[]; cost: number };

interface USCReturn {
  shortestPath: string[];
  cost: number;
}

function UCS({ weightedGraph, start, target }: UCSInput): USCReturn | null {
  // create a list(priority queue) to store all paths explored [{path: [start],cost: 0}]
  const allPathsExplored: PathCostKV[] = [{ path: [start], cost: 0 }];
  // create a set to keep track of visited nodes
  const visited = new Set<string>([]);

  // as long as we have paths stored:
  while (allPathsExplored.length > 0) {
    // sort the priority queue from lowest cost to highest cost paths
    allPathsExplored.sort((a, b) => a.cost - b.cost);

    // pop the lowest cost {path: currentPath, cost: currentCost} stored
    const { path: currentPath, cost: currentCost } = allPathsExplored.shift()!;

    // take the last node of current path,
    const currentNode = currentPath[currentPath.length - 1]!;

    // mark current node as visited
    visited.add(currentNode);

    // if it's the target => return current path + it's cost
    if (currentNode === target) {
      return {
        shortestPath: currentPath,
        cost: currentCost,
      };
    }

    // else for each unvisited neighbor of the current_node
    for (const neighbor of weightedGraph[currentNode] || []) {
      if (!visited.has(neighbor.node)) {
        // store a new explored path with it's cost
        allPathsExplored.push({
          path: [...currentPath, neighbor.node],
          cost: currentCost + neighbor.cost,
        });
      }
    }
  }

  // if all possible paths are explored and the target node wasn't found yet, return null
  return null;
}

const itemFound = UCS({ weightedGraph, start: "A", target: "I" });
console.log(itemFound);
