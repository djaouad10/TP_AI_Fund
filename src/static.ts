// We define the Graph

import type { Graph, WeightedGraph } from "./types.js";

export const graph: Graph = {
  A: ["G", "B", "E", "J"],
  B: ["G", "H", "C", "F", "A", "J"],
  C: ["H", "B", "D"],
  D: ["E", "C", "I"],
  E: ["A", "D", "F"],
  F: ["B", "E", "J"],
  G: ["B", "A"],
  H: ["B", "C"],
  I: ["D"],
  J: ["A", "B", "F"],
};

export const weightedGraph: WeightedGraph = {
  A: [
    { node: "G", cost: 3 },
    { node: "B", cost: 5 },
    { node: "E", cost: 7 },
    { node: "J", cost: 4 },
  ],
  B: [
    { node: "G", cost: 5 },
    { node: "H", cost: 2 },
    { node: "C", cost: 6 },
    { node: "F", cost: 8 },
    { node: "A", cost: 5 },
    { node: "J", cost: 3 },
  ],
  C: [
    { node: "H", cost: 2 },
    { node: "B", cost: 6 },
    { node: "D", cost: 4 },
  ],
  D: [
    { node: "E", cost: 9 },
    { node: "C", cost: 4 },
    { node: "I", cost: 5 },
  ],
  E: [
    { node: "A", cost: 7 },
    { node: "D", cost: 9 },
    { node: "F", cost: 3 },
  ],
  F: [
    { node: "B", cost: 8 },
    { node: "E", cost: 3 },
    { node: "J", cost: 6 },
  ],
  G: [
    { node: "B", cost: 5 },
    { node: "A", cost: 3 },
  ],
  H: [
    { node: "B", cost: 2 },
    { node: "C", cost: 2 },
  ],
  I: [{ node: "D", cost: 5 }],
  J: [
    { node: "A", cost: 4 },
    { node: "B", cost: 3 },
    { node: "F", cost: 6 },
  ],
};
