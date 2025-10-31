import type { Graph, Queue } from "./types.js";

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

export function enqueue({
  queue,
  newNode,
}: {
  queue: Queue;
  newNode: string;
}): Queue {
  return [...queue, newNode];
}

interface DequeueReturn {
  newQueue: Queue;
  node: string | undefined;
}

export function dequeue({ queue }: { queue: Queue }): DequeueReturn {
  let newQueue = queue;

  const node = newQueue.pop();

  return { newQueue, node };
}
