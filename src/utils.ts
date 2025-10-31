import type { Graph } from "./types.js";

export function printGraph({ graph }: { graph: Graph }) {
  for (let key in graph) {
    console.log("Node:", key);

    console.log("Neighbors:");

    graph[key]?.map((child, index) => {
      console.log("Child number:", index + 1, "is: ", child);
    });

    console.log("\n");
    console.log("\n");
  }
}
