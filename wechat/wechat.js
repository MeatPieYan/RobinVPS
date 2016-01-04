var wechat = require('wechat');
var fs = require('fs');
var express = require('express');

var router = express.Router();

var config = require('../config');
var WechatAPI = require('wechat-api');
var menuEvent = require('./menuEvent');
var reply = require('./reply');

var api = new WechatAPI(config.wechatSecret.appid, config.wechatSecret.appsecret);


var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + config.wechatSecret.appid + "&redirect_uri=" + config.domain + "/oauth&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
console.log("********** Robin LOG || URL: " + url + " **********");

router.use('/', wechat(config.wechat, wechat.text(function (message, req, res) {
  console.log("========== Robin LOG || DIR message:");
  console.dir(message);
  reply(message, res, url);
}).event(function (message, req, res) {
  console.log("========== Robin LOG || DIR message:");
  console.dir(message);
  if (message.Event === 'subscribe') {
    res.reply('欢迎关注肉饼');
  } else if (message.Event === 'unsubscribe') {
    res.reply('Bye!');
  } else if (message.Event === 'CLICK') {
    menuEvent(message, res);
  } else {
    res.reply('暂未支持! Coming soon!');
  }
})));

module.exports = router;
