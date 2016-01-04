module.exports = function(message, res, url){
	var input = (message.Content || '').trim();

	if (input === 'login') {
		res.reply([{
			title: '点我点我',
	        description: 'OAuth 测试',
	        url: url
	    }]);
		return;
	}
	if (input === '获取菜单') {
		api.getMenu(function(err, result){
			console.log(result);
			return res.reply("请查看日志");
		})
	}
	if (input === '删除菜单') {
		api.removeMenu(function(err, result){});
		return res.reply("删除菜单");
	}
	if (input === '新建菜单') {
		var menu = fs.readFileSync('./wechat/menu.json');
		if(menu){
			menu = JSON.parse(menu);
		}
		api.createMenu(menu, function(err, result){
			if(result && result.errcode === 0){
				return res.reply("成功");
			}

			if(err){
				console.log(err);
				return res.reply("失败");
			}
		});
	}

	if (input === '大王') {
		return res.reply("不要叫我大王，要叫我女王大人啊……");
	}
	if (input.length < 2) {
		return res.reply('内容太少，请多输入一点:)');
	}
}