// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.')
    .isLength({min:3,max:256})
    .withMessage('invalid email length'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.')
    .isLength({max:30})
    .withMessage('username cannot be more than 30 characters'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6, max:60})
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
]

// sign up a user
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });
    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);


module.exports = router;
