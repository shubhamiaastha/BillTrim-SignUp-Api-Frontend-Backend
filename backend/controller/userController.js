const express = require('express');
const UserModel = require('../model/userModel')


const createData = async(req,res)=>{
    const{firstName,lastName,phone,email,gender,pricing, address} = req.body;

    const newData = new UserModel({
        firstName,  
        lastName,
        phone,
        email,
        gender, 
        pricing,
        address,
       
    }) 

    try{
        await newData.save();
        res.send({userData: newData})

    }catch(er){
        console.log(er)
    }
}


module.exports =  createData;