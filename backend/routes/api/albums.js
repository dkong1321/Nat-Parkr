express = require('express')
router = express()
const db = require('../../db/models')

router.get('/', asyncHandler(async(req,res,next)=>{
    const albums = await db.Album.findAll({});

}))
