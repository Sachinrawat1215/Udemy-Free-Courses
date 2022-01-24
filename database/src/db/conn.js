const mongoose = require('mongoose');

const connection = (URL) => {
    mongoose.connect(URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connection Sucessfull");
    }).catch((error) => {
        console.log("Failed to connect", error);
    });
}

module.exports = connection;