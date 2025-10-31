export interface Graph {
  [key: string]: string[];
}

// We define the Graph

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
