const requireAuth = require('../middleware/requireAuth');
const User = require('../models/user');
const postRouter = require('./postRoutes')
const router = require('express').Router()

router.use(requireAuth);

router.use('/posts', postRouter)
router.get('/', async (req, res) => {
  const user = await User.findById(res.userId);
  if(!user){
    return res.json({ message: 'Invalid Credentails', status: 'failure' });
  }
  return res.json({ message: 'Succesfully find user', status: 'success', email: user.email,id: user._id  });
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id);
  if(!user){
    return res.json({ message: 'Invalid Credentails', status: 'failure' });
  }
  return res.json({ message: 'Succesfully found user', status: 'success', email: user.email, id: user._id });
})

module.exports = router;