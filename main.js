
const express = require("express");
const cookieParser= require("cookie-parser");
const app = express();
app.listen(3000);
app.use(cookieParser());

const userRouter = require("./Routers/userRouter.js"); 
const authRouter = require("./Routers/authRouter.js"); 



app.use(express.json());


let users = [
    { id: 1,
    name: "ref3w"
    },
    {
        id:2,
    name: "efverver"
    },    
    {
        id:3,
        name: "cerfekr"
    }];

  

    app.use('/user', userRouter) ; // This is how we tell the app about our mini app
   app.use('/auth',authRouter) ;

  




