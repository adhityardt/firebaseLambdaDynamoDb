var https = require('https')
var firebaseHost = "getbottle.firebaseio.com"

function fbPut(key, value) {
  return new Promise((resolve,reject) => {
    var options = {
      hostname: firebaseHost,
      port: 443,
      path: key + ".json",
      method: 'PUT'
    }

    var req = https.request(options, function(res){
      console.log("request made")
      res.setEncoding('utf8')
      var body = ''
      res.on('data', function(chunk) {
        body += chunk
      })
      res.on('end', function () {
        console.log('ini body',body)
        resolve(body)
      })
    })
    req.end(JSON.stringify(value))
    req.on('error', reject)
  })
}


fbPut("/foo/bar", "hei").then(res => {
  console.log("wrote data")
})