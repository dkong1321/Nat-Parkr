// express
const express = require('express')
const router =express()
const asyncHandler = require('express-async-handler')
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3')

// add db
const db = require ('../../db/models')

// -------------------get all images---------------------------//
router.get('/', asyncHandler(async(req,res,next)=>{

    const images = await db.Image.findAll({});

    res.json(
        {images}
    )
}))


router.post('/', singleMulterUpload('image'),asyncHandler(async(req, res)=>{
    const { title, description, userId, albumId, locationId} = req.body
    const imageURL = await singlePublicFileUpload(req.file)
    const newImage = { title, imageURL, description, userId, locationId}
    const image = await db.Image.build(newImage)
    const createdImage = await image.save();

    const albumRelation = {imageId:createdImage.id, albumId}
    const newAlbumImage = await db.AlbumImage.build(albumRelation)

    await newAlbumImage.save();
    res.json(image)
}));

router.put('/editimage/:id', asyncHandler(async(req,res)=>{
        const imageId = req.params.id
        const {title, description, userId, albumId, locationId} = req.body
        const imageToUpdate = await db.Image.findByPk(imageId);

        const albumImage =  await db.AlbumImage.findOne({
            where:{
                imageId
            }
        })

        const albumImageToUpdate = await db.AlbumImage.findByPk(albumImage.id)
        await imageToUpdate.update({
            title,
            description,
            locationId
        });

        await albumImageToUpdate.update({
            imageId,
            albumId
        })

        res.json(
            imageToUpdate
        )
    })
)

router.delete('/:id', asyncHandler(async(req,res)=>{
    const imageId = req.params.id;
    const imageToDelete = await db.Image.findByPk(imageId);
    if(imageToDelete !==undefined){
        await imageToDelete.destroy();
    }
    res.json({
        message:"successfully deleted"
    })
}))


// downloads file from s3

module.exports = router;

// requires
