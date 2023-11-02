const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).then((tags) => {
    res.json(tags);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Product,
      },
    ],
  }).then((tag) => {
    res.json(tag);
  });
});

router.post("/", async(req, res) => {
  // create a new tag
  const newtag = await Tag.create(req.body);
  res.json(newtag);
});

router.put("/:id", async(req, res) => {
  // update a tag's name by its `id` value
  const updatetag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(updatetag);
});

router.delete("/:id", async(req, res) => {
  // delete on tag by its `id` value
  const deletetag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(deletetag);
});


module.exports = router;
