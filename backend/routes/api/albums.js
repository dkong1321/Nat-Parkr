const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const db = require('../../db/models')

const {check} = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation');

const validateAlbum = [
    check('title')
        .exists({checkFalsy: true})
        .isLength({min:4, max:50})
        .withMessage('Please provide a title between 4 to 50 characters.'),
        handleValidationErrors
]

router.get('/', asyncHandler(async(req,res,next)=>{
    const albums = await db.Album.findAll({include:db.Image});
    res.json({albums})

}))

router.post('/', validateAlbum, asyncHandler(async(req,res)=>{
    const {title, userId} = req.body;
    const newAlbum = {title, userId};
    const album = await db.Album.build(newAlbum)
    if(album) {
        await album.save();
    }

    return res.json(album)

}))

// edit album name not used
router.put('/:id', validateAlbum, asyncHandler(async(req,res)=>{
    const albumId = req.params.id
    const {title} =req.body;
    const albumToUpdate = await db.Album.findByPk(albumId);

    const newTitle = await albumToUpdate.update({
        title
    });
    if(newTitle){
        res.json(
            albumToUpdate
        )
    }
    return true
}))

// add images to album (AlbumImage)
router.post(`/addimage/:id`, asyncHandler(async(req,res)=>{
    const albumId = req.params.id
    const {imageId} = req.body
    const albumImageRelation = await db.AlbumImage.build({albumId,imageId})
    const oldRelation = await db.AlbumImage.findOne({
        where:{albumId, imageId}
    })
    if(!oldRelation){
        await albumImageRelation.save();
        res.json(albumImageRelation)
    } else {
        res.json({
            message:"image is already in album"
        })

    }

}))

//remove image from album
router.delete('/removeimage/:id', asyncHandler(async(req,res)=>{
    const albumId = req.params.id;
    const {id} = req.body
    const imageId = id
    const albumImageRelation = await db.AlbumImage.findOne({where:{albumId,imageId}})
    if(albumImageRelation) {
       await albumImageRelation.destroy()
    }

    res.json({
        message:"successfully deleted album"
    })
}) )


//delete album
router.delete('/:id', asyncHandler(async(req,res)=>{
    const albumId = req.params.id;
    const albumToDelete = await db.Album.findByPk(albumId)
    const albumImageRelation = await db.AlbumImage.findAll({
        where:{
            albumId
        }
    })

    if(albumImageRelation) {
        albumImageRelation.forEach((imageAssociation)=>{
        imageAssociation.destroy()
    })
    }

    if (albumToDelete) {
        await albumToDelete.destroy();
    }

    res.json({
        message:"successfully deleted album"
    })
}))

module.exports = router;
