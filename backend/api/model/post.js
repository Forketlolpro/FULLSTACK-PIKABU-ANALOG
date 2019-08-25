const mongoose = require('mongoose');

const postSchema =  mongoose.Schema({
    title: String,
    content: String,
    rating: {type: Number, default: 0},
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }]
});

module.exports = mongoose.model('Post', postSchema);