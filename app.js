var express = require('express');

var app = express();

//Define Port
var port = 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});