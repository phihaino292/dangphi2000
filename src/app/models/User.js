const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String },
    email: { type: String },
    phno: { type: String },
    password: { type: String },

    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true,


});

module.exports = mongoose.model('User', User);