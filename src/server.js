var express = require('express');
var app = express();

app.get('/requestdump', function (req, res) {
  res.send({
    "headers": req.headers,
    "method": req.method,
    "secure": req.secure
  });
});

app.listen(3000, function () {
  console.log('request-dump listening on port 3000 and endpoint /requestdump')
});
