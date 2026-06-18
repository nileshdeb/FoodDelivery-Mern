const foodModel = require('../models/food.model');
const storageService=require("../services/storage.service");
const {v4:uuid}=require("uuid")


async function createFood(req,res){
    // console.log(req.foodPartner)
    // console.log(req.body)

    // console.log(req.file)

    // const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    const path = require("path");
    const ext = path.extname(req.file.originalname); // ".mp4", ".jpg", etc.
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid() + ext);


    const foodItem= await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })



    // console.log(fileUploadResult)

    res.status(201).json({
        message:"food created successfully",
        food:foodItem
    })

}

async function getFoodItems(req,res){

    const foodItems= await foodModel.find({})
    res.status(200).json({
        message:"Food items fetched successfully",
        food:foodItems
    })
}

module.exports={
    createFood,
    getFoodItems
}