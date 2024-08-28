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



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
