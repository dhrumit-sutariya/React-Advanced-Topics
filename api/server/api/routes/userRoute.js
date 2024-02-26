const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/username", (req, res) => {
  try {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    // console.log(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.status(200).json({ user: user, status: "success" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/update/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      user.username = req.body.username;
      const updatedUser = await user.save();
      res.status(200).json({ user: updatedUser, status: "success" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/update/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      user.username = req.body.username;
      user.password = req.body.password;
      const updatedUser = await user.save();
      res.status(200).json({ user: updatedUser, status: "success" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      await user.deleteOne();
      res.status(200).json({ user: user, status: "success" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
