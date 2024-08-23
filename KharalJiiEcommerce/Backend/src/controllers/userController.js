// controller for user registration

const User = require("../models/userModel");

const userRegister = async (req, res) => {
  const data = req.body;
  // const name=req.body.name;

  if (!data.email || !data.password) {
    res.status(400).json({ msg: "Please enter email or password" });
  }

  try {
    const user = await User.findOne({ email: data.email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      userRole: data.userRole,
    });

    const response = await newUser.save();
    return res
      .status(201)
      .json({ msg: "User registered successfully", user: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error", error: err });
  }
};

module.exports = { userRegister };
