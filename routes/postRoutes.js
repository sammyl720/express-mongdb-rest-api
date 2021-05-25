const Post = require('../models/Post');

const router = require('express').Router();

router.post('/', async (req, res) => {
  const { text } = req.body;
  if(!text) {
    return res.status(403).json({ message: 'Please enter a text', status: 'failure' });
  }

  const newPost = await new Post({ text, user: res.userId })
  await newPost.save()
  console.log(newPost)
  return res.status(200).json({ message: 'Successfuly added post', status: 'success', post: newPost })
})

router.get('/', async (req, res) => {
  const posts = await Post.find({ user: res.userId })
  return res.status(200).json({ message: 'Here are you\'re posts', status: 'success', posts })
})
module.exports = router;