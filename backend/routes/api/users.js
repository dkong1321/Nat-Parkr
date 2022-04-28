// backend/routes/api/users.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();

router.post(
    '/',
    asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });
    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);

router.get(
    '/',
    restoreUser,
    (req,res) => {
        const {user} = req;
        if(user) {
            return res.json({
                user:user.toSafeObject()
            });
        } else return res.json({});
    }
);

module.exports = router;