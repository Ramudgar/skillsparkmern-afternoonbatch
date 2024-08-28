const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userProfileSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
   
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const profile=mongoose.model("Profile", userProfileSchema);
module.exports = profile;
