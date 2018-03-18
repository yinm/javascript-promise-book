Promise.reject(new Error('BOOM!')).catch((error) => {
  console.error(error)
})