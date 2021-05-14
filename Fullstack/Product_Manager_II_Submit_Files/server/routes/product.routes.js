const ProductController = require('../controller/product.controller');

module.exports = app =>{
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/products/:id', ProductController.getProductDetails);
    app.post('/api/products/create', ProductController.createProduct);
}