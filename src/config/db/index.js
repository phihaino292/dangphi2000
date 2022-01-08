const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/web_ban_hang', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect susscessfully!!!');
    } catch (error) {
        console.log('Connect fail!!!');
    }
}

module.exports = { connect }