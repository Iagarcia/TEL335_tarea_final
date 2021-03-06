var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	},
	passwordConf: {
		type: String,
		required: true,
	},
	favorites: [Number],
});

// Authenticate input on database
UserSchema.statics.authenticate = function (_email, password, callback) {
	User.findOne({ email: _email }).exec(function (err, user) {
		if (err) {
			return callback(err)
		} else if (!user) {
		var err = new Error('User not found.');
		err.status = 401;
		return callback(err);
		}
		if (password === user.password) {
			return callback(null, user);
		} else {
			return callback();
		}
	})
}

var User = mongoose.model('User', UserSchema);
module.exports = User;
