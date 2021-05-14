const { Product } = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getProducts = (req, res) =>{
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.getProductDetails = (req, res) =>{
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.findOneAndUpdate({_id: req.params.id}, 
        {
            title,
            price,
            description
        }, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(confirmDelete => res.json(confirmDelete))
        .catch(err => res.json(err))
}