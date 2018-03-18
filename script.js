function asyncFunction() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Async Hello world')
    }, 16)
  })
}

asyncFunction().then(function(value) {
  console.log(value)
}, function(error) {
  console.log(error)
})