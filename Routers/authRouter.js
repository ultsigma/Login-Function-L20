const express = require("express");
const userModel = require("../Models/userModel.js");

const authRouter = express.Router();

authRouter.route('/signup')
.get(middleware1,getSignUp,middleware2)                // pass kia middleware
.post(postSignUp);

authRouter
.route('/login')
.post(loginUser);



function middleware1(req,res,next)
{
    console.log("middleware 1 encountered");
    next();
}
function middleware2(req,res){
    console.log("middleware 2 encountered");
    res.sendFile('index.html',{root:__dirname});
}
  
function getSignUp(req,res,){
    console.log("getSignup called");
  
next();
};

function postSignUp(req,res,next)
{
    let obj = req.body;
    console.log('backend',obj);                

    res.json({
        message : "usr signed up",
        data : obj
    });

}; 
async function loginUser(req,res)
{
    try{
    let data = req.body;
    if(data.email)
    {
    let user = await userModel.findOne({email:data.email});
    if(user)
    {
        if(user.password==data.password)
        {
            return res.json({
                message: "User logged in",
                data : user
            })
        }

        else

        {
            return res.json({
                Message : "wrong credentials"
            })
        }
    }
    else{
        return res.json({
            Message : "User not found"
        })
    }}
    else {

        return res.json({
            message: "Empty Field"
        });
    }
}

    catch(err) {
        res.status(500).json({mesage: err.message});
    }

}


module.exports = authRouter;













































