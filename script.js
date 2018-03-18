promise = new Promise((resolve, reject) => {
  reject(new Error('エラー'))
})

promise.catch((error) => {
  console.error(error)
})