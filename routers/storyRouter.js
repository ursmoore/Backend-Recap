const { Router } = require("express");
const router = new Router();
const Story = require("../models").story;

router.get("/", async (req, res) => {
  const getAllStories = await Story.findAll();
  res.status(200).send({
    message: "here are the Stories",
    getAllSpaces: getAllStories,
  });
});

module.exports = router;
