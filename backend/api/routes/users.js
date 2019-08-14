const express = require("express");
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Handling GET request to /users"
    })
});

router.post('/', (req, res, next)=>{
    const user = {
        userName: req.body.userName,
        userLastName: req.body.userLastName,
        userNickname: req.body.userNickname
    };
    res.status(200).json({
        message: "Handling POST request to /users",
        user: user
    })
});

router.get('/:userId', (req, res, next)=>{
    const userId = req.params.userId;
    res.status(200).json({
        message: "Handling GET request to /users/id",
        id: userId
    })
});

router.patch('/:userId', (req, res, next)=>{
    res.status(200).json({
        message: "Handling PATCH request to /users/id"
    })
});

router.delete('/:userId', (req, res, next)=>{
    res.status(200).json({
        message: "Handling DELETE request to /users/id"
    })
});

module.exports = router;