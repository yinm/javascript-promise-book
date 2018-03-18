function getURLCallback(URL, callback) {
  const req = new XMLHttpRequest()
  req.open('GET', URL, true)
  req.onload = () => {
    if (req.status === 200) {
      callback(null, req.responseText)
    } else {
      callback(new Error(req.statusText), req.response)
    }
  }

  req.onerror = () => {
    callback(new Error(req.statusText))
  }

  req.send()
}

// parse JSON with safety
function jsonParse(callback, error, value) {
  if (error) {
    callback(error, value)
  } else {
    try {
      const result = JSON.parse(value)
      callback(null, result)
    } catch(e) {
      callback(e, value)
    }
  }
}

// request with XHR
const request = {
  comment: function getComment(callback) {
    return getURLCallback('http://azu.github.io/promises-book/json/comment.json', jsonParse.bind(null, callback))
  },
  people: function getPeople(callback) {
    return getURLCallback('http://azu.github.io/promises-book/json/people.json', jsonParse.bind(null, callback))
  }
}

// call callback functions when all XHR requests end
function allRequest(requests, callback, results) {
  if (requests.length === 0) {
    return callback(null, results)
  }

  const req = requests.shift()
  req((error, value) => {
    if (error) {
      callback(error, value)
    } else {
      results.push(value)
      allRequest(requests, callback, results)
    }
  })
}

function main(callback) {
  allRequest([request.comment, request.people], callback, [])
}

// example
main((error, results) => {
  if (error) {
    console.error(error)
    return
  }

  console.log(results)
})