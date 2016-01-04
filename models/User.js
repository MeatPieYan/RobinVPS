var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	o_id: String,
	nickname: String
});