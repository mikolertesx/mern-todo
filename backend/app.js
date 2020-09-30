if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const authRoutes = require("./routes/auth");
const todosRoutes = require("./routes/todos");

const port = process.env.PORT || 3000;
// Load mongo vars.
const mongoPath = process.env.MongoDB;
const dbPath = process.env.Database;
const dbFixedPath = `${mongoPath}/${dbPath}`;
// Enable cors.
app.use(cors());

// We are using json to communicate.
app.use(express.json());

// Use route-middlewares.
app.use("/auth", authRoutes);
app.use("/todos", todosRoutes);

// Configure Mongoose
mongoose
  .connect(dbFixedPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(
    (_onFullFill) => {
      app.listen(port, () => {
        console.log(dbFixedPath);
        console.log(`App running in localhost at ${port}`);
      });
    },
    (_onRejected) => {
      console.log("App rejected DB.");
      throw new Error('Database connection error, check if it\'s added to your envs or that you have proper access to Mongo.');
    }
  );
