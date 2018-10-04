var http = require('http')

http.createServer(function (req, res) {
  console.log(`Request to '${req.url}' with headers '${JSON.stringify(req.headers)}'`)
  res.write('p0ng')
  res.end()
}).listen(8080, _ => console.log('Server started on 8080'))
