const express = require('express');
const app = express();
const router = express.Router();

// Routes go here

module.exports = app;  // Export the app variable


const path = __dirname + '/views/';
const port = 8080;

router.use(function (req,res,next) {
console.log('/' + req.method);
next();
});

router.get('/', function(req,res){
res.sendFile(path + 'index.html');
});

router.get('/info', function(req,res){
res.sendFile(path + 'info.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
console.log('Example app listening on port 8080!')
})