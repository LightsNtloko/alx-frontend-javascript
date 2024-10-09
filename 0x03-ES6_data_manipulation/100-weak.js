export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize count to 0 for the new endpoint
  }

  const count = weakMap.get(endpoint) + 1; // Increment count
  weakMap.set(endpoint, count); // Update count in the WeakMap

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
