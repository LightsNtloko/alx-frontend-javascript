export default function taskBlock(trueOrFalse) {
  // Outer scope variables
  const task = false; // This should always be false
  const task2 = true; // This should always be true

  if (trueOrFalse) {
    // When trueOrFalse is true, return the values of task and task2
    return [task, task2]; // Return the outer variables
  }

  // When trueOrFalse is false, also return the outer variables
  return [task, task2]; // Return the outer variables
}
