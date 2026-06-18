const express =require('express');
const router =express.Router();
const authMiddleware=require('../middlewares/auth.middleware')
const foodController=require("../controllers/food.controller")
const multer = require('multer')


const upload = multer({
    storage:multer.memoryStorage(),
})

//POST  /api/food/  create a food item
router.post("/",authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"), 
    foodController.createFood)

//GET /api/food/  get all food items
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems
)    


module.exports= router;  