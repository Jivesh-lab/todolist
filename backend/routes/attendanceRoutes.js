const express =require("express");
const Attendance=require("../models/Attendance");
const router=express.Router();
router.post("/add",async(req,res)=>{
    
    try
    {
        const {clgId,name,emailId,phoneNo}=req.body;
        const attendance= new Attendance({
            clgId,
            name,
            emailId,
            phoneNo
    });
        await attendance.save();
        res.status(200).json({clgId,name,emailId,phoneNo})

    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({message:err.message})
    }
});

module.exports=router;