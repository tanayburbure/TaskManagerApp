import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    //Basic Details
    name : {
        type : String,
        require : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        select : false
    },

    // Profile Details
    phone : {
        type : String,
        trim : true
    },
    address : {
        type : String,
        trim : true
    },

    //User role
    role : {
        type : String,
        enum : ["USER","ADMIN"],
        default : "USER"
    }
    },
    {
        timestamp : true
    }
);

//Hash password before saving
userSchema.pre("save",async function(){
    if(!this.isModified("password")) {
        return ;
    }
    this.password = await bcrypt.hash(this.password,12)
});

//comparing entered password with hashed password
userSchema.methods.comparePassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password);
}

const User = mongoose.model("User",userSchema);
export default User ;