const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    photo: { type: String, required: true },
    rating: { type: Number, required: true },
    prices: { type: String, required: true },
    discount: { type: String },
    description: { type: String, required: true },
    size_options: { type: [String], required: true },
    category: { type: String, required: true },
    gender: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
