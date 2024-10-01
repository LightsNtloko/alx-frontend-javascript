export default function taskBlock(trueOrFalse) {
  let task = false; // Use 'let' instead of 'const'
  let task2 = true; // Use 'let' instead of 'const'

  if (trueOrFalse) {
    task = false; // Update outer variable
    task2 = true; // Update outer variable
  }

  return [task, task2]; // Return the current values of task and task2
}
