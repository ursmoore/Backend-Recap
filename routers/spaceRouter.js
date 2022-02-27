const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");
const authMiddleware = require("../auth/middleware");

// GET - /spaces/ endpoint to GET ALL SPACES FEATURE 1
router.get("/", async (req, res) => {
  const getAllSpaces = await Space.findAll();
  res.status(200).send({
    message: "here are the Spaces",
    getAllSpaces: getAllSpaces,
  });
});

module.exports = router;

// GET - /spaces/:id Returns a specific space by it's id with the
// stories that belong to it FEATURE 2
router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    console.log("space id =", spaceId);
    const getSpaceById = await Space.findByPk(spaceId, {
      include: [Story],
    });
    if (!getSpaceById) {
      res.status(404).send("this space does not exist");
    } else {
      res
        .status(200)
        .send({ message: "space found", getSpaceById: getSpaceById });
    }
  } catch (e) {
    next(e);
  }
});

// DELETE - /spaces/delete/stories/:storyId ENDPOINT FOR DELETE BUTTON!!!!!!!!!!
// FEATURE 4 DELETE BUTTON
router.delete("/delete/stories/:storyId", auth, async (req, res, next) => {
  try {
    const { storyId } = req.params;
    const story = await Story.findByPk(storyId);
    if (!story) {
      return res.status(404).send("story not found");
    } else {
      const deleteStory = await story.destroy();
      res.send({ message: "ok", deleteStory });
    }
  } catch (e) {
    next(e);
  }
});

///////////////////////////////////////////////////////////////
// FEATURE 5 ADD A STORY TO SPACE AND DATABASE!!! /////////////
/// POST /spaces/create/story/:id endpoint
router.post("/create/story/:id", authMiddleware, async (req, res, next) => {
  // router.post("/create/story/:id", async (req, res, next) => {
  const spaceId = parseInt(req.params.id);
  const { name, content, imageUrl } = req.body;
  console.log("the body", req.body);

  try {
    const space = await Space.findByPk(spaceId);
    if (!space) {
      res.status(404).send("space Id does not match");
    } else {
      const newStory = await Story.create({
        name: name,
        content: content,
        imageUrl: imageUrl,
        spaceId: spaceId,
      });
      res.send(newStory);
    }
  } catch (e) {
    next(e);
  }
});

//HERE YOU CAN MODIFY YOUR SPACY SPACE FOR FEATURE 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!
// PATCH ENDPOINT FOR UPDATING SPACE -> http PATCH :4000/spaces/edit/:id
router.patch("/edit/:id", async (req, res) => {
  try {
    const spaceId = req.params.id;
    const { title, description, backgroundColor, color } = req.body;

    const space = await Space.findByPk(spaceId);
    if (!space) {
      res.status(400).send("This is not correct");
    } else {
      const updateSpace = await space.update({
        title: title,
        description: description,
        backgroundColor: backgroundColor,
        color: color,
      });
      res.status(200).send(updateSpace);
    }
  } catch (e) {
    console.log(e);
  }
});
