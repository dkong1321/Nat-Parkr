// express
const express = require('express')
const router =express()
const asyncHandler = require('express-async-handler')
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3')

// add db
const db = require ('../../db/models')

const {check} = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation');

validateImage = [
    check('title')
        .exists({checkFalsy:true})
        .withMessage('Please provide a title')
        .isLength({min:1, max: 50})
        .withMessage('Please provide a title between 1 to 50 characters'),
    check('description')
        .exists({checkFalsy:true})
        .withMessage('Please provide a description')
        .isLength({min:1, max:255})
        .withMessage('Please provide a description between 1 to 255 characters'),
    handleValidationErrors
]

// -------------------get all images---------------------------//
router.get('/', asyncHandler(async(req,res,next)=>{

    const images = await db.Image.findAll({
        include: {model:db.User}
    });
    res.json(
        {images}
    )
}))

router.get('/:id', asyncHandler(async(req,res,next)=>{
    const imageId = req.params.id
    const image = await db.Image.findByPk(imageId,
        {include: {model:db.User}}
        );
    res.json(
        {image}
    )
}))

router.post('/', singleMulterUpload('image'), validateImage, asyncHandler(async(req, res)=>{
    const { title, description, userId, albumId, locationId} = req.body
    const imageURL = await singlePublicFileUpload(req.file)
    const newImage = { title, imageURL, description, userId, locationId}
    const image = await db.Image.build(newImage)
    const createdImage = await image.save();
    if(albumId !=="null"){
        const albumRelation = {imageId:createdImage.id, albumId}
        const newAlbumImage = await db.AlbumImage.build(albumRelation)

        await newAlbumImage.save();
    }
    if(image){
       return res.json(image)
    }
}));

router.put('/editimage/:id', validateImage, asyncHandler(async(req,res)=>{
        const imageId = req.params.id
        const {title, description, userId, albumId, locationId} = req.body
        const imageToUpdate = await db.Image.findByPk(imageId);

        await imageToUpdate.update({
            title,
            description,
            locationId
        });

        return res.json(
            imageToUpdate
        )
    })
)

router.delete('/:id', asyncHandler(async(req,res)=>{
    const imageId = req.params.id;
    const imageToDelete = await db.Image.findByPk(imageId);
    const albumImageRelation =  await db.AlbumImage.findAll({
            where:{
                imageId
            }
        })

    albumImageRelation.forEach((imageAssociation)=>{
        imageAssociation.destroy()
    })

    if(imageToDelete !==undefined || imageToDelete !== null){
        await imageToDelete.destroy();
    }
    res.json({
        message:"successfully deleted image"
    })

}))

// downloads file from s3

module.exports = router;

// requires
