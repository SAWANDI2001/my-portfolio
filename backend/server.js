require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running",
  });
});

// Project Routes
app.use("/api/projects", projectRoutes);

// Contact Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB Connection + Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");
    console.log("Database:", mongoose.connection.name);
    console.log("Ready State:", mongoose.connection.readyState);

    try {
      await mongoose.connection.db.admin().ping();
      console.log("MongoDB Ping Successful");
    } catch (error) {
      console.error("MongoDB Ping Failed:", error.message);
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });
