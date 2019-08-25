const express = require("express");
const router = express.Router();

const checkAuth = require('../../middleware/check-auth');
const PostController = require('../controllers/posts');

router.get('/', PostController.get_posts);
router.get('/:postId', PostController.get_post_byId);
router.post('/', PostController.create_post);
router.post('addComment/:postId, PostController.add_comment_to_post');
router.patch("/:postId", PostController.patch_post);
router.delete("/:postId", PostController.delete_post);

module.exports = router;