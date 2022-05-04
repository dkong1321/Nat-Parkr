const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const db = require('../../db/models')

router.get('/', asyncHandler(async(req,res,next)=>{
    const albums = await db.Album.findAll({include:db.Image});
    res.json({albums})

}))

router.post('/', asyncHandler(async(req,res)=>{
    const {title, userId} = req.body;
    const newAlbum = {title, userId};
    const album = await db.Album.build(newAlbum)
    await album.save();
    res.json(album)
}))

router.put('/editalbum/:id', asyncHandler(async(req,res)=>{
    const albumId = req.params.userId
    const {title} =req.body;
    const albumToUpdate = await db.Album.findByPk(albumId);

    await albumToUpdate.update({
        title
    });

    res.json(
        albumToUpdate
    )

}))

module.exports = router;
