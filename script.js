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

const request = {
  comment: function getComment() {
    return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse)
  },
  people: function getPeople() {
    return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse)
  }
}

function main() {
  function recordValue(results, value) {
    results.push(value)
    return results
  }

  const pushValue = recordValue.bind(null, [])
  return request.comment().then(pushValue).then(request.people).then(pushValue)
}

main().then((value) => {
  console.log(value)
}).catch((error) => {
  console.error(error)
})