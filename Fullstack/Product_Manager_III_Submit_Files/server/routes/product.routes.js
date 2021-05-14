const ProductController = require('../controller/product.controller');

module.exports = app =>{
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/products/:id', ProductController.getProductDetails);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
    app.post('/api/products/create', ProductController.createProduct);
}