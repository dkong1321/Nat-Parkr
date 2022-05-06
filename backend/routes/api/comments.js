const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const db = require('../../db/models')

router.get('/', asyncHandler(async(req,res,next)=>{
    const comments = await db.Comment.findAll({
        include: db.User
    });

    res.json({comments})
}))

router.post('/', asyncHandler(async(req,res)=>{
    const {userId, imageId, comment} = req.body;
    const newComment = {comment, userId, imageId};
    const myComment = await db.Comment.build(newComment);
    await myComment.save();
    res.json(myComment)
}))

router.delete('/:id', asyncHandler(async(req,res)=>{
    const commentId = req.params.id;
    const commentToDelete = await db.Comment.findByPk(commentId)

    if(commentToDelete) {
        await commentToDelete.destroy();
    }

    res.json({
        message:"successfullt deleted comment"
    })
}))

module.exports = router;
