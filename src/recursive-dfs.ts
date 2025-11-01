import type { DFSInput } from "./dfs.js";
import { graph } from "./static.js";

function recursiveDFS({
  graph,
  start,
  target,
  visited,
}: DFSInput & { visited: Set<string> }) {
  // mark current node as visited
  visited.add(start);
  // log current node to console
  console.log(start);

  // if current node is the target return true
  if (start === target) {
    return true;
  }

  // if current node has no neighbors return false
  if (graph[start]!.length === 0) {
    return false;
  }

  // itterate over the neighbors of the current node
  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      // for each unvisited neighbor call recursiveDFS to explore a step deeper in the graph
      return recursiveDFS({ graph, start: neighbor, target, visited });
    }
  }
}

const visited = new Set<string>([]);

const itemFound = recursiveDFS({ graph, start: "A", target: "E", visited });

console.log(itemFound);
