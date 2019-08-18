const express = require("express");
const router = express.Router();
const User = require('../model/user');

router.get('/', (req, res, next)=>{
    User.find()
        .select('name lastName nickName')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs
            };
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

});

router.post('/', (req, res, next)=>{
    const user = new User({
        name: req.body.name,
        lastName:  req.body.lastName,
        nickName: req.body.nickName
    });
    user.save()
        .then(result => {
            res.status(201).json({
                user: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

});

router.get('/:userId', (req, res, next)=>{
    const userId = req.params.userId;
    User.findById(userId)
        .select('name lastName nickName')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({user: doc})
            } else {
                res.status(404).json({message: 'No valid entry for this user id'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.patch('/:userId', (req, res, next)=>{
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
});

router.delete('/:userId', (req, res, next)=>{
    const id = req.params.userId;
    User.remove({_id: id}).exec()
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
});

module.exports = router;