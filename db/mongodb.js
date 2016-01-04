var mongoose = require('mongoose');

console.info("========== Robin INFO || DB connect ==========");
mongoose.connect('mongodb://127.0.0.1:27017/Robin', {server: {auto_reconnect:true}});

mongoose.connection.on('close', function(){
	console.info("========== Robin INFO || DB re-connect ==========");
	mongoose.connect('mongodb://127.0.0.1:27017/Robin', {server:{auto_reconnect:true}});
});

mongoose.connection.on('error', function(error){
	console.error('########## Robin ERROR || DB error + ' + error + " ##########");
	mongoose.disconnect();
});

exports.mongoose = mongoose;