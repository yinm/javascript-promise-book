const promise = Promise.reject(new Error('message'))
promise.catch((error) => {
  console.error(error)
})