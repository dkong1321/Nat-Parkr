// express
const express = require('express')
const router =express()
const multer =require('multer')
const upload = multer({dest: 'uploads/'})
const asyncHandler = require('express-async-handler')

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

//
//added from s3
// we dont need
// const {uploadFile} = require("./s3")

// s3 section

require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
const util = require("util")
const unlinkFile = util.promisify(fs.unlink)

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

// uploads file to s3
// should need to export
function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename,
    }
    // .promise will return a promise
    return s3.upload(uploadParams).promise()
}

// downloads file from s3
function getFileStream(fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}

// dont need all in same file
//exports.uploadFile = uploadFile
//

router.get('/:key', (req,res)=>{
    const key = req.params.key
    const readStream = getFileStream(key)

    readStream.pipe(res)
});

router.post('/', upload.single('image'),asyncHandler(async(req, res)=>{
    const file = req.file
    const { title, description, userId, albumId, locationId} = req.body
    const imageURL = file.filename
    const newImage = { title, imageURL, description, userId, albumId, locationId}
    const image = await db.Image.build(newImage)
    await image.save();

    const result = await uploadFile(file)
    await unlinkFile(file.path)
    res.send({imagePath: `/images${result.Key}`})
}));


// downloads file from s3

module.exports = router;

// requires
