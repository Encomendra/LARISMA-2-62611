const express = require("express");
const router = express.Router();
const controller = require("../controllers/Controller");

router.get("/programming-language", (req, res) => {
  const resultFromController = controller.myFavoriteProgrammingLanguages();
  res.send(resultFromController);
});

module.exports = router;
