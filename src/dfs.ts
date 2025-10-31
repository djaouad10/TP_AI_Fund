import { graph } from "./static.js";
import type { Graph } from "./types.js";

interface DFSInput {
  graph: Graph;
  start: string;
  target: string;
}

function DFS({ graph, start, target }: DFSInput): boolean {
  // validation
  if (!(start in graph) || !(target in graph)) {
    console.error(
      `Either the start node: ${start}, or target node: ${target} is not a part of the graph`
    );

    return false;
  }

  // initialize stack and vistided set with the start node
  const stack: string[] = [start];
  const vistied = new Set<string>([start]);

  while (stack.length > 0) {
    // pop the top node of the stack
    const node = stack.pop()!;

    // if that nodeis the target => return true
    if (node === target) return true;

    // if poped node wasn't the target, itterate over it's neighbors
    for (const neighbor of graph[node] || []) {
      // if a neighbor wasn't visited before => makre is as visited && push it to the stack
      if (!vistied.has(neighbor)) {
        vistied.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
  //   this process will explore the first branch of the starting node, then the first sub-branch,... etc and once it reaches the maximum depth (a node with no neighbors or in other words a node with no sub branches to explore) it tracks back to the last unexplored branch from the left -> right order and does the same operation till all nodes are unexplored

  //   if all elements were visited and the target still not found return false
  return false;
}

const itemFound = DFS({ graph, start: "A", target: "E" });

console.log(itemFound);
