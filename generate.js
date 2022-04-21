const generateProducts = () => {
  const { faker } = require("@faker-js/faker");

  const products = [];
  for (let id = 0; id < 1000; id++) {
    const productName = faker.commerce.productName();
    const productDescription = faker.commerce.productDescription();
    const productImage = faker.image.transport();
    const productPrice = faker.finance.amount(5, 500, 2, "$");
    const productRating = faker.finance.amount(0, 5, 0);

    products.push({
      id: id,
      product_name: productName,
      product_description: productDescription,
      product_image: productImage,
      product_price: productPrice,
      product_rating: productRating,
    });
  }
  return { products: products };
};

module.exports = generateProducts;
