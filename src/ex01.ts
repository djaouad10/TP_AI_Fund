// EXO: 01

import { type Graph, graph } from "./static.js";
import { printGraph } from "./utils.js";

// Printing the nodes and their children

printGraph({ graph });

// adding a connection: I with E

function addConnection({
  graph,
  node1,
  node2,
}: {
  graph: Graph;
  node1: string;
  node2: string;
}): Graph {
  let updatedGraph: Graph = {};

  for (let key in graph) {
    if (key === node1) {
      updatedGraph[key] = [...(graph[key] ?? []), node2];
    } else if (key === node2) {
      updatedGraph[key] = [...(graph[key] ?? []), node1];
    } else {
      updatedGraph[key] = graph[key] ?? [];
    }
  }

  return updatedGraph;
}

const newGraph = addConnection({ graph, node1: "I", node2: "E" });

console.log(
  "------------------------------------------------------------------------------"
);

printGraph({ graph: newGraph });
