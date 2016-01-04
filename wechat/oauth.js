var OAuth = require('wechat-oauth');
var express = require('express');
var User = require('../models/User');
var config = require('../config');
var userController = require('../controllers/user-controller');

var router = express.Router();
var client = new OAuth(config.wechatSecret.appid, config.wechatSecret.appsecret);

router.use('/', function(req, res) {
	console.info("********** ROBIN INFO || callback IN");

	var code = req.query.code;
	client.getAccessToken(code, function (err, result) {

		if(err){
			console.error("########## Robin ERROR || Oauth get access Token error as below :");
			console.dir(err);
			return;
		}
		var openid = result.data.openid;
		console.log("========== Robin LOG || openid:  " + openid + "  ==========");

		if(!openid){
			return;
		}

		userController.login(openid, _fnLoginSuccess, _fnLoginFailed);

		function _fnLoginSuccess(){
			res.redirect("http://www.baidu.com");
		}

		function _fnLoginFailed(){
			client.getUser(openid, function (err, result) {
				if(err){
					console.error("########## Robin ERROR || Oauth get access Token error as below :");
					console.dir(err);
					return;
				}

				var userInfo = result;
				console.log("========== Robin LOG || user info: ==========");
				console.dir(userInfo);
				userController.signup(userInfo, res);
				// res.redirect("http://tieba.baidu.com");
			});
		}

	});
});

module.exports = router;