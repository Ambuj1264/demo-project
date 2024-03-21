const mongoose = require("mongoose");
const dbUri = process.env.DATABASE_BASE_URL || "mongodb+srv://Ambuj:Ambuj@cluster0.wgwis8s.mongodb.net/demo";
mongoose
  .connect(dbUri)
  .then(() => console.log("Database is connected")) // eslint-disable-line no-console
  .catch((err) => console.log("Could not connect to MongoDB", err)); // eslint-disable-line no-console