const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    nickName: {type: String, required: true},
    rating: {type: Number,  default: 0},
    email: {type: String, required: true, unique: true,match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);