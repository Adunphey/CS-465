const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const ctrlTrips = require('../controllers/trips');
const auth = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

const ADMIN_USER = {
  username: 'admin',
  password: 'password123'
};

router.get('/trips', auth, ctrlTrips.tripsList);
router.get('/trips/:tripid', auth, ctrlTrips.tripsReadOne);

router.post('/auth/login', function (req, res) {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  const valid =
    username === ADMIN_USER.username &&
    password === ADMIN_USER.password;

  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { username, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.status(200).json({ token });
});

module.exports = router;