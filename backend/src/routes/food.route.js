const express =require('express');
const router =express.Router();
const authMiddleware=require('../middlewares/auth.middleware')
const foodController=require("../controllers/food.controller")

router.post("/",authMiddleware.authFoodPartnerMiddleware,foodController.createFood)


module.exports= router;