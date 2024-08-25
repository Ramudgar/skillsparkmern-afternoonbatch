const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const connectDB = require("./src/config/db");

app.use(express.json());

connectDB();

const userRoutes = require("./src/routes/userRoutes");
app.use("/api/user", userRoutes);

const profileModel = require("./src/models/userProfile");
app.post("/profile/create", async (req, res) => {
  const data = req.body;
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.address
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const profile = new profileModel({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });

    const response = await profile.save();
    return res
      .status(201)
      .json({ msg: "Profile created successfully", response });
  } catch (err) {
    return res.status(500).json({ msg: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
