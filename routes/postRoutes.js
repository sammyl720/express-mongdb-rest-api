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

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    return res.status(200).json({ message: 'Here is the post', status: 'success', post })
  } catch (error) {

    return res.status(404).json({ message:'Sorry Could not find the post you were looking for', status: 'failure'})
  }
})
module.exports = router;