export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = false;
    var task2 = true;
  }

  return [task, task2];// This returns the outer task and task2
}
