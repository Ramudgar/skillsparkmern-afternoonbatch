// controller for user registration

const User = require("../models/userModel");

const userRegister = async (req, res) => {
  try {
    // console.log(req.body);
    const data = req.body;
    const email = data.email;
    console.log(data);
    console.log(data.name);
    // const name=req.body.name;

    if (!data.email || !data.password) {
      return res.status(400).json({ msg: "Please enter email or password" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
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
    return res.status(500).json({ msg: "Server error", error: err });
  }
};

module.exports = { userRegister };
