const aPromise = new Promise((resolve) => {
  resolve(100)
})
aPromise.then((value) => {
  return value * 2
})
aPromise.then((value) => {
  return value * 2
})
aPromise.then((value) => {
  console.log('1: ' + value)
})

const bPromise = new Promise((resolve) => {
  resolve(100)
})
bPromise.then((value) => {
  return value * 2
}).then((value) => {
  return value * 2
}).then((value) => {
  console.log('2: ' + value)
})