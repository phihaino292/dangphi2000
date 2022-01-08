const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Product = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    gia: { type: String },
    slug: { type: String, slug: "name" },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true,


});

module.exports = mongoose.model('Product', Product);