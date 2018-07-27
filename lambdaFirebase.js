var https = require('https')
// exports.handler = async (event) => {
function testLambda (){
  var firebaseHost = "getbottle.firebaseio.com"
  var options = {
    hostname: firebaseHost,
    port: 443,
    path: "/foo/bar.json",
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
      console.log(body)
    })
  })
  req.end(JSON.stringify("ini dia si jali2"))
  console.log('hello from adhitya rahman')
  return 'Hello from Lambda!';
};

testLambda()