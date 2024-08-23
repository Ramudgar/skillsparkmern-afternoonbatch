const mongoose = require("mongoose");
// const schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // isAdmin:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // },
    userRole: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User=mongoose.model("User",userSchema);
module.exports=User;
