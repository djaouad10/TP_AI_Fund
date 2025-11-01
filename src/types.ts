export interface Graph {
  [key: string]: string[];
}

export interface WeightedNode {
  node: string;
  cost: number;
}

export interface WeightedGraph {
  [key: string]: WeightedNode[];
}
