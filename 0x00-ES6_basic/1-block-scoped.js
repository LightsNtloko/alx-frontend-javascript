export default function taskBlock(trueOrFalse) {
  let task = false;  // Replace var with let
  let task2 = true;  // Replace var with let

  if (trueOrFalse) {
    let task = true;  // Replace var with let
    let task2 = false;  // Replace var with let
  }

  return [task, task2]; // This returns the outer task and task2
}
