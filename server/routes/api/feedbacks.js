const express = require("express");
const router = express.Router();

const feedback = require("../../models/Feedback");

// route GET api/feedback
router.get("/", (req, res) => {
  Feedback.find()
    // .sort({data: -1})
    .then((feedback) => res.json(feedback));
});

// route POST api/feedback
router.post("/", (req, res) => {
  const newFeedback = new Feedback({
    email: req.body.email,
    content: req.body.content,
  });

  newFeedback.save().then((feedback) => res.json(feedback));
});

module.exports = router;
