const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

exports.user_login = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }

                if (result) {
                    const token = jwt.sign(
                        {email: user[0].email,name: user[0].name, lastName: user[0].lastName, nickName: user[0].nickName},
                        process.env.JWT_KEY,
                        {expiresIn: "1h"});
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    })
                }

                res.status(401).json({
                    message: 'Auth failed'
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
};

exports.user_get_by_id = (req, res, next)=>{
    const userId = req.params.userId;
    User.findById(userId)
        .select('name lastName nickName email')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({user: doc})
            } else {
                res.status(404).json({message: 'No valid entry for this user id'})
            }
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
};

exports.user_patch = (req, res, next)=>{
    const id = req.params.userId;
    const props = req.body;
    User.update({_id: id}, props)
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
};

exports.user_delete =  (req, res, next)=>{
    User.remove({_id: req.params.userId}).exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
};


exports.user_signup = (req, res, next)=>{
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                res.status(409).json({
                    message: "Email exists"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            name: req.body.name,
                            lastName:  req.body.lastName,
                            nickName: req.body.nickName,
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                });
            }
        });
};