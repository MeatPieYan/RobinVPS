var User = require('../models/User');

exports.login = function(openid, fnSuccess, fnFailed){
	User.find({o_id: openid}, function(err, results){
		if(err){
			console.error("########## Robin ERROR || DB FIND" + err + "##########");
		}

		if(results && results.length === 1){
			var userData = results[0];
			console.log("========== Robin LOG || USER Found ==========");
			console.dir(userData);

			fnSuccess();

		} else {
			console.log("========== Robin LOG || Not Found" );
			// return null;
			fnFailed();
		}

	})
};

exports.signup = function(user, res){
	console.info("********** Robin INFO || Signup **********");
	var _user = {};
	_user.o_id = user.openid;
	_user.nickname = user.nickname;
	var user = new User(_user);
	console.dir(user);
	user.save(function(){
		res.redirect("http://tieba.baidu.com");
	});
}

