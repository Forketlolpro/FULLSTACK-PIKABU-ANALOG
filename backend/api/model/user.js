const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    nickName: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);