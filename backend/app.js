if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const authRoutes = require("./routes/auth");

const port = process.env.PORT || 3000;
// Load mongo vars.
const mongoPath = process.env.MongoDB;
const dbPath = process.env.Database;
const dbFixedPath = `${mongoPath}/${dbPath}`;
// We are using json to communicate.
app.use(express.json());

// Use route-middlewares.
app.use("/auth", authRoutes);

// Configure Mongoose
mongoose
  .connect(dbFixedPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(dbFixedPath);
      console.log(`App running in localhost at ${port}`);
    });
  });
