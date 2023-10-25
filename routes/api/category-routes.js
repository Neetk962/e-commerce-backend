const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  const categories = await Category.findAll();
  res.json(categories)
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const category = await Category.findOne
  ({ where:
    { id: req.params.id }, include: Product
    });
    res.json(category)
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  const newcategory= await Category.create(req.body);
  res.json(newcategory)
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const updatecategory = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.json(updatecategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletecategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(deletecategory)
});

module.exports = router;
