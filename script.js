const promise = Promise.reject(new Error('message'))
promise.then(undefined, (error) => {
  console.error(error)
})