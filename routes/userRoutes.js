const requireAuth = require('../middleware/requireAuth')

const router = require('express').Router()

router.use(requireAuth);

router.get('/:id', (req, res) => {
  const { id } = req.params
  return res.json({
    id: req.params.id,
    isOwner: res.userId == id
  })
})

module.exports = router;