const mongoose  = require("mongoose");
const db_link="mongodb+srv://admin:hlrJgH8lKzm19Gjs@cluster0.bym1rvb.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
  //  console.log(db);
    console.log("db_connected");
})
.catch(function(err){
    console.log(err);
});

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    password :{
        type: String,
        required:true,
        minLength:8
    },
    confirmPassword :{
        type: String,
        required:true,
        minLength:8,
        validate : function(){
            return this.password==this.connfirmPassword;
        }
    }

})  ;

userSchema.pre('save' ,function(){ 

    this.confirmPasseord= undefined;
});


//userSchema.pre('save' , async function(){let salt = await bcrypt.genSalt();let hashString = await bcrypt.hash(this.password , salt);this.password = hashedString;
//});
userSchema.post('save' ,function(){ 

    console.log("after savong in db");
});

const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;

