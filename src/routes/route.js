const express=require("express")
const Controller=require('../controllers/urlController')
const router=express.Router()

//..................................PostApi...............................................//

router.post('/url/shorten',Controller.createUrl)

//..................................GetApi...............................................//

router.get('/:urlCode',Controller.getUrl)





module.exports=router
