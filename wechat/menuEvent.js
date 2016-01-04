module.exports = function(message, res){
	var key = message.EventKey;

	if(!key){
		return;
	}

	if(key === 'V1001_MY_Account'){
		res.reply([{
			content: '个人信息'
		}]);
	}
}