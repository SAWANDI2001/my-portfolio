const express = require("express");
const Project = require("../models/Project");
const Contact = require("../models/Contact");

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const projectCount = await Project.countDocuments();
    const messageCount = await Contact.countDocuments();

    res.json({
      projects: projectCount,
      messages: messageCount,
      skills: 13,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch dashboard stats",
      error: error.message,
    });
  }
});

module.exports = router;