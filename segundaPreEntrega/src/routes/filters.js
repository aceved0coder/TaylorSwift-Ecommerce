const { Router } = require("express");
const { filtro } = require("../utils/controllers/filters");
require("dotenv").config();
const router = Router();

router.get("/filters", async (req, res, next) => {
  let {
    type,
    category,
    priceMin,
    priceMax,
  } = req.query;
  try {
    const filter = await filtro(
      type,
      category,
      priceMin,
      priceMax,
    );
    res.status(200).send(filter);
  } catch (err) {
    next(err);
  }
});

module.exports = router;