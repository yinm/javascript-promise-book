function getURL(URL) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET', URL, true)

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText)
      } else {
        reject(new Error(req.statusText))
      }
    }

    req.onerror = () => {
      reject(new Error(req.statusText))
    }

    req.send()
  })
}

const url = 'http://httpbin.org/status/500'
getURL(url).then(function onFulfilled(value) {
  console.log(value)
}).catch(function onRejected(error) {
  console.error(error)
})
