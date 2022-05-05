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

// edit album name
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

router.delete('/:id', asyncHandler(async(req,res)=>{
    console.log("hello from delete album route")
    const albumId = req.params.id;
    const albumToDelete = db.image.findByPk(albumId)
    if (albumToDelete) {
        await albumToDelete.destroy();
    }

    res.json({
        message:"successfully deleted album"
    })
}))

module.exports = router;
