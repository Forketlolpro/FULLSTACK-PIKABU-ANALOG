const mongoose = require("mongoose");

const Post = require("../model/post");

exports.get_posts = (req, res, next) => {
    Post.find()
        .select("title content rating postedBy")
        .populate('postedBy', 'nickName')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                posts: docs
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.get_post_byId = (req, res, next) => {
    const id = req.params.postId;
    Post.findById(id)
        .select("title content rating postedBy comments")
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    post: doc,
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
};

exports.create_post = (req, res, next) => {
    const post = new Post({
        title: req.body.postTitle,
        content: req.body.postContent,
        postedBy: req.body.postedBy
    });
    post.save()
        .then(result => {
            res.status(201).json({
                message: 'Post created'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
};

exports.add_comment_to_post = (req, res, next) => {

};

exports.patch_post = (req, res, next) => {
    Post.update({_id: req.params.postId}, {$set: req.body})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Post updated"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

exports.delete_post = (req, res, next) => {
    Post.remove({ _id: req.params.postId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Post deleted"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};