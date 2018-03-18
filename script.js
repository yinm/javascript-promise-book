function taskA() {
  console.log('Task A')
  return Promise.reject('throw Error @ Task A')
}
function taskB() {
  console.log('Task B')
}
function onRejected(error) {
  console.error(error)
}
function finalTask() {
  console.log('Final Task')
}

const promise = Promise.resolve()
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(finalTask)
