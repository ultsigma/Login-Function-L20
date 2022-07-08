const express = require("express");
const userRouter = express.Router(); 
const userModel = require("../Models/userModel.js");
const cookieParser=  require("cookie-parser");


userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);


userRouter.route('/:id')
.get(getUserById);



function getUser(req,res){
    res.send({ users        });
};

function postUser(req,res){
    console.log(req.body);
    users = req.body;
    res.json({
        Message : "Data sent sucessfully" ,
           users :req.body      
             })

};

function updateUser(req,res){
    let a= req.body;
      console.log(req.body);
    for(key in a)
    {
        users("key") = a ["key"];
    }
    res.json({
        Message : "Data updates sucessfully"
    });
};

function deleteUser(req,res)
{
    users={};
    res.send("DAta sent successsfully");
};

 function getUserById(req,res){
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]["id"]==paramId) obj = users[i];
    }
    res.json({
        message:"req received",
        data : obj

    });
};

function setCookies(req,res){
    res.cookie('isLoggedIn',true,{maxAge:1000*606024 , secure: ture , httpOnly : true});
    res.cookie('isPrimeMember' , true);
    res.send("cookies have been set");

}

function getCookies(req,res){
   let cookies = req.cookies;
   console.log("cookies");
   res.send("cookies received");

}






module.exports = userRouter;