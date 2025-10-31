import { graph } from "./static.js";
import type { Graph, Queue } from "./types.js";
import { dequeue, enqueue } from "./utils.js";

interface BFSInput {
  graph: Graph;
  start: string;
  target: string;
}

function BFS({ graph, start, target }: BFSInput): boolean {
  let queue: Queue = [];
  let visited: string[] = [];
  const root = start;

  //   enqueue the root
  queue = enqueue({ queue, newNode: root });
  //   mark the root as visited
  visited.push(root);

  while (queue.length > 0) {
    const { node, newQueue } = dequeue({ queue });
    // update the queue after the dequeue operation
    queue = newQueue;

    // if the node returned was undefined, it means the queue is empty
    // empty queue and the function is still running => target not found
    if (!node) return false;

    // if dequeued node is the target => return true
    if (node === target) return true;

    const neighborsOfNode = graph[node] as string[];

    if (neighborsOfNode.length > 0) {
      // if dequeued node is not the target, we itterate over it's neighbors and check

      neighborsOfNode.map((neighbor) => {
        // check if neighbor wasn't visited before
        const isVisited = visited.includes(neighbor);

        if (!isVisited) {
          // mark it as visisted and enqueue it
          visited.push(node);
          queue = enqueue({ queue, newNode: neighbor });
        }
      });
    }
  }

  return false;
}

const itemFound = BFS({ graph, start: "A", target: "E" });

console.log(itemFound);
