const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const user = require("../../models/User");

//roter GET api/users
router.get("/", (req, res) => {
  User.find()
    // .sort({data: -1})
    .then((users) => res.json(users));
});

// route POST api/users
router.post("/", (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!name || !surname || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields correctly" });
  }

  user.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({ msg: "The user is already registered" });

    const newUser = new User({
      name,
      surname,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            {
              expiresIn: 3600,
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  surname: user.surname,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
