const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const router = require('./routes/userRoutes');
const User = require('./models/user');
const requireValidLogin = require('./middleware/requireValidLogin');
const createToken = require('./utils/createToken');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.get('/', (req, res) => {
  return res.json({ message: 'Hello and Welcome to social network' })
})

app.use('/user', router)

app.post('/login', requireValidLogin, async (req, res) => {
  const { email, password } = req.body;
  // make sure user exists in db
  const user = await User.findOne({ email });
  if(!user) {
    return res.json({ message: 'Invalid Credentails', status: 'failure' });
  }

  // make sure password is correct
  const correctPassword = bcrypt.compare(password, user.password);
  if(!correctPassword) {
    return res.json({ message: 'Invalid Credentails', status: 'failure' });
  }
  let token = createToken(user._id);
  return res.json({ message: 'Succesfully signed in. Please send along the attached token with authorization header. Authorization: Bearer <token>', status: "success", token })
})


app.post('/signup', requireValidLogin, async (req, res) => {
  const { email, password } = req.body;
  const emailExists = await User.findOne({ email: email }, 'email');
  if(emailExists) {
    return res.json({ message: 'E-Mail Account already exists', status: 'error' })
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  console.log(hash)
  const newUser = await User({ email: email, password: hash });
  await newUser.save();
  console.log(newUser._id)
  const token = createToken(user._id);
  return res.json({ message: 'Succesfully signed up. Please send along the attached token with authorization header. Authorization: Bearer <token>', status: "success", token })
})

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Connected')
})