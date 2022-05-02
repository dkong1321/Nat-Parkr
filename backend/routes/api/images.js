// express
const express = require('express')
const router =express()
const asyncHandler = require('express-async-handler')
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3')

// add db
const db = require ('../../db/models')

// -------------------get all images---------------------------//
router.get('/', asyncHandler(async(req,res,next)=>{
    // should we need a user to login to see photos
    // const {userId} = req.session.auth
    const userId = 3
    const images = await db.Image.findAll({});

    res.json(
        {images}
    )
}))


router.post('/', singleMulterUpload('image'),asyncHandler(async(req, res)=>{
    const { title, description, userId, albumId, locationId} = req.body
    const imageURL = await singlePublicFileUpload(req.file)
    const newImage = { title, imageURL, description, userId, albumId, locationId}
    const image = await db.Image.build(newImage)
    await image.save();
    res.json(image)
}));

router.put('/editimage/:id', asyncHandler(async(req,res)=>{
        console.log("hello from edit route")
        const imageId = req.params.id
        const {title, description, userId, albumId, locationId} = req.body
        const imageToUpdate = await db.Image.findByPk(imageId);

        await imageToUpdate.update({
            title,
            description,
            albumId,
            locationId
        });
        res.json({
            imageToUpdate
        })
    })
)

router.delete('/:id', asyncHandler(async(req,res)=>{
    console.log("hello from the delete")
    const imageId = req.params.id;
    console.log("from in the api route", imageId)
    const imageToDelete = await db.Image.findByPk(imageId);
    if(imageToDelete !==undefined){
        await projectToDelete.destory();
    }
}))


// downloads file from s3

module.exports = router;

// requires
