// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');



Product.belongsTo(Category, {
  foreignKey: 'category_id',
});


Category.hasMany(Product, {
  foreignKey: 'product_id',
});

Product.belongsToMany(Category,{
  through: ProductTag
});

Tag.belongsToMany(Product,{
  through: ProductTag
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

