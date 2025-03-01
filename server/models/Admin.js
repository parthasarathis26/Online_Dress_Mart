const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, default: 'dressmart@gmail.com' },
    password: { type: String, required: true, default: '26082004' }
});

module.exports = mongoose.model('Admin', adminSchema);
