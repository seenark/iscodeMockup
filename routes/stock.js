var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const idsQuery = req.query.productSubId;
  const idArr = idsQuery.split(",");
  const data = idArr.map((id) => {
    const random = Math.floor(Math.random() * 10);
    if (random <= 5) {
      return { id: id, stock: 0 };
    } else {
      return { id: id, stock: random };
    }
  });
  res.json(data);
});

module.exports = router;
