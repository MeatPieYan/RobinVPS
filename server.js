var express = require('express');

var config = require('./config');
var wechat = require('./wechat/wechat');
var index = require('./routes/index');
var hello = require('./routes/hello');
var oauth = require('./wechat/oauth');
var mongoose = require('./db/mongodb');

var app = express();
var port = config.port;

app.use(express.query());

app.use('/app', express.static(__dirname + "/app"));

app.use('/', index);
app.use('/wechat', wechat);
app.use('/hello', hello);
app.use('/oauth', oauth);

app.listen(port, function(){
	console.info(" ========== Robin server start at port 18080 ==========");
});