const aPromise = new Promise((resolve) => {
  resolve(100)
})
const thenPromsie = aPromise.then((value) => {
  console.log(value)
})
const catchPromise = thenPromsie.catch((error) => {
  console.error(error)
})

console.log(aPromise !== thenPromsie)
console.log(thenPromsie !== catchPromise)