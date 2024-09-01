const Profile = require("../models/userProfileModel");
// controller for updating user profile

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; //get user id from token
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ msg: "profile not found" });
    }
    const { firstName, phone, address } = req.body;
    const updatedProfile = await Profile.updateOne({
      firstName: firstName ? firstName : profile.firstName,
      phone: phone ? phone : profile.phone,
      address: address ? address : profile.address,
    });
    res
      .status(200)
      .json({ msg: "profile updated successfully", updatedProfile });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};
