var mongoose = require('mongoose');

console.info("========== Robin INFO || DB connect ==========");
mongoose.connect('mongodb://bbf9ada967f34a8d8b1e3aa9f28305a5:e585cffe1f6d470fb42f1d5475294fa1@mongo.duapp.com:8908/fnfzWBVrxPGREFTuAlKw', {server: {auto_reconnect:true}});

mongoose.connection.on('close', function(){
	console.info("========== Robin INFO || DB re-connect ==========");
	mongoose.connect('mongodb://bbf9ada967f34a8d8b1e3aa9f28305a5:e585cffe1f6d470fb42f1d5475294fa1@mongo.duapp.com:8908/fnfzWBVrxPGREFTuAlKw', {server:{auto_reconnect:true}});
});

mongoose.connection.on('error', function(error){
	console.error('########## Robin ERROR || DB error + ' + error + " ##########");
	mongoose.disconnect();
});

exports.mongoose = mongoose;